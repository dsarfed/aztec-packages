import { type Body, type InboxLeaf } from '@aztec/circuit-types';
import { type AppendOnlyTreeSnapshot, Fr, type Header } from '@aztec/circuits.js';
import { type EthAddress } from '@aztec/foundation/eth-address';
import { type DebugLogger, createDebugLogger } from '@aztec/foundation/log';
import { RollupAbi } from '@aztec/l1-artifacts';

import { type Hex, type PublicClient, getAbiItem } from 'viem';

import {
  getL2BlockProposedLogs,
  getMessageSentLogs,
  getTxsPublishedLogs,
  processL2BlockProposedLogs,
  processMessageSentLogs,
  processTxsPublishedLogs,
} from './eth_log_handlers.js';
import { type DataRetrieval } from './structs/data_retrieval.js';
import { type L1PublishedData } from './structs/published.js';

/**
 * Fetches new L2 block metadata (header, archive snapshot).
 * @param publicClient - The viem public client to use for transaction retrieval.
 * @param rollupAddress - The address of the rollup contract.
 * @param blockUntilSynced - If true, blocks until the archiver has fully synced.
 * @param searchStartBlock - The block number to use for starting the search.
 * @param searchEndBlock - The highest block number that we should search up to.
 * @param expectedNextL2BlockNum - The next L2 block number that we expect to find.
 * @returns An array of tuples representing block metadata including the header, archive tree snapshot; as well as the next eth block to search from.
 */
export async function retrieveBlockMetadataFromRollup(
  publicClient: PublicClient,
  rollupAddress: EthAddress,
  blockUntilSynced: boolean,
  searchStartBlock: bigint,
  searchEndBlock: bigint,
  expectedNextL2BlockNum: bigint,
  logger: DebugLogger = createDebugLogger('aztec:archiver'),
): Promise<[Header, AppendOnlyTreeSnapshot, L1PublishedData][]> {
  const retrievedBlockMetadata: [Header, AppendOnlyTreeSnapshot, L1PublishedData][] = [];
  do {
    if (searchStartBlock > searchEndBlock) {
      break;
    }
    const L2BlockProposedLogs = await getL2BlockProposedLogs(
      publicClient,
      rollupAddress,
      searchStartBlock,
      searchEndBlock,
    );
    if (L2BlockProposedLogs.length === 0) {
      break;
    }

    const lastLog = L2BlockProposedLogs[L2BlockProposedLogs.length - 1];
    logger.debug(
      `Got L2 block processed logs for ${L2BlockProposedLogs[0].blockNumber}-${lastLog.blockNumber} between ${searchStartBlock}-${searchEndBlock} L1 blocks`,
    );

    const newBlockMetadata = await processL2BlockProposedLogs(
      publicClient,
      expectedNextL2BlockNum,
      L2BlockProposedLogs,
    );
    retrievedBlockMetadata.push(...newBlockMetadata);
    searchStartBlock = lastLog.blockNumber! + 1n;
    expectedNextL2BlockNum += BigInt(newBlockMetadata.length);
  } while (blockUntilSynced && searchStartBlock <= searchEndBlock);
  return retrievedBlockMetadata;
}

/**
 * Fetches new L2 block bodies and their hashes.
 * @param publicClient - The viem public client to use for transaction retrieval.
 * @param availabilityOracleAddress - The address of the availability oracle contract.
 * @param blockUntilSynced - If true, blocks until the archiver has fully synced.
 * @param searchStartBlock - The block number to use for starting the search.
 * @param searchEndBlock - The highest block number that we should search up to.
 * @returns A array of L2 block bodies as well as the next eth block to search from
 */
export async function retrieveBlockBodiesFromAvailabilityOracle(
  publicClient: PublicClient,
  availabilityOracleAddress: EthAddress,
  blockUntilSynced: boolean,
  searchStartBlock: bigint,
  searchEndBlock: bigint,
): Promise<DataRetrieval<Body>> {
  const retrievedBlockBodies: Body[] = [];

  do {
    if (searchStartBlock > searchEndBlock) {
      break;
    }
    const l2TxsPublishedLogs = await getTxsPublishedLogs(
      publicClient,
      availabilityOracleAddress,
      searchStartBlock,
      searchEndBlock,
    );
    if (l2TxsPublishedLogs.length === 0) {
      break;
    }

    const newBlockBodies = await processTxsPublishedLogs(publicClient, l2TxsPublishedLogs);
    retrievedBlockBodies.push(...newBlockBodies.map(([body]) => body));
    searchStartBlock = l2TxsPublishedLogs[l2TxsPublishedLogs.length - 1].blockNumber + 1n;
  } while (blockUntilSynced && searchStartBlock <= searchEndBlock);

  return { lastProcessedL1BlockNumber: searchStartBlock - 1n, retrievedData: retrievedBlockBodies };
}

/**
 * Fetch L1 to L2 messages.
 * @param publicClient - The viem public client to use for transaction retrieval.
 * @param inboxAddress - The address of the inbox contract to fetch messages from.
 * @param blockUntilSynced - If true, blocks until the archiver has fully synced.
 * @param searchStartBlock - The block number to use for starting the search.
 * @param searchEndBlock - The highest block number that we should search up to.
 * @returns An array of InboxLeaf and next eth block to search from.
 */
export async function retrieveL1ToL2Messages(
  publicClient: PublicClient,
  inboxAddress: EthAddress,
  blockUntilSynced: boolean,
  searchStartBlock: bigint,
  searchEndBlock: bigint,
): Promise<DataRetrieval<InboxLeaf>> {
  const retrievedL1ToL2Messages: InboxLeaf[] = [];
  do {
    if (searchStartBlock > searchEndBlock) {
      break;
    }
    const messageSentLogs = await getMessageSentLogs(publicClient, inboxAddress, searchStartBlock, searchEndBlock);
    if (messageSentLogs.length === 0) {
      break;
    }
    const l1ToL2Messages = processMessageSentLogs(messageSentLogs);
    retrievedL1ToL2Messages.push(...l1ToL2Messages);
    // handles the case when there are no new messages:
    searchStartBlock = (messageSentLogs.findLast(msgLog => !!msgLog)?.blockNumber || searchStartBlock) + 1n;
  } while (blockUntilSynced && searchStartBlock <= searchEndBlock);
  return { lastProcessedL1BlockNumber: searchStartBlock - 1n, retrievedData: retrievedL1ToL2Messages };
}

/** Retrieves L2ProofVerified events from the rollup contract. */
export async function retrieveL2ProofVerifiedEvents(
  publicClient: PublicClient,
  rollupAddress: EthAddress,
  searchStartBlock: bigint,
  searchEndBlock?: bigint,
): Promise<{ l1BlockNumber: bigint; l2BlockNumber: bigint; proverId: Fr; txHash: Hex }[]> {
  const logs = await publicClient.getLogs({
    address: rollupAddress.toString(),
    fromBlock: searchStartBlock,
    toBlock: searchEndBlock ? searchEndBlock + 1n : undefined,
    strict: true,
    event: getAbiItem({ abi: RollupAbi, name: 'L2ProofVerified' }),
  });

  return logs.map(log => ({
    l1BlockNumber: log.blockNumber,
    l2BlockNumber: log.args.blockNumber,
    proverId: Fr.fromString(log.args.proverId),
    txHash: log.transactionHash,
  }));
}