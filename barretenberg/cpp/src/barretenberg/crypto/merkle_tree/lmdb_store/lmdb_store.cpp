#include "lmdb_store.hpp"
#include "barretenberg/crypto/merkle_tree/lmdb_store/lmdb_database.hpp"
#include "barretenberg/crypto/merkle_tree/lmdb_store/lmdb_environment.hpp"
#include "barretenberg/crypto/merkle_tree/types.hpp"
#include "barretenberg/numeric/uint128/uint128.hpp"
#include "barretenberg/numeric/uint256/uint256.hpp"
#include <cstddef>
#include <cstdint>
#include <cstring>
#include <lmdb.h>
#include <vector>

namespace bb::crypto::merkle_tree {
LMDBStore::LMDBStore(
    LMDBEnvironment::SharedPtr environment, std::string name, bool integerKeys, bool reverseKeys, MDB_cmp_func* cmp)
    : _environment(environment)
    , _name(std::move(name))
{
    LMDBDatabaseCreationTransaction tx(_environment);
    _database = std::make_unique<LMDBDatabase>(_environment, tx, _name, integerKeys, reverseKeys, cmp);
    tx.commit();
}

LMDBWriteTransaction::Ptr LMDBStore::create_write_transaction() const
{
    return std::make_unique<LMDBWriteTransaction>(_environment, *_database);
}
LMDBReadTransaction::Ptr LMDBStore::create_read_transaction()
{
    _environment->wait_for_reader();
    return std::make_unique<LMDBReadTransaction>(_environment, *_database);
}
} // namespace bb::crypto::merkle_tree