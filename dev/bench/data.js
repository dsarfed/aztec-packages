window.BENCHMARK_DATA = {
  "lastUpdate": 1724965611277,
  "repoUrl": "https://github.com/AztecProtocol/aztec-packages",
  "entries": {
    "C++ Benchmark": [
      {
        "commit": {
          "author": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "committer": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "id": "f2b8a3603a08e12bfe499c0cab6cdb7f6476e568",
          "message": "WIP chore: does parallel for nest right now?",
          "timestamp": "2024-08-19T15:52:20Z",
          "url": "https://github.com/AztecProtocol/aztec-packages/pull/8072/commits/f2b8a3603a08e12bfe499c0cab6cdb7f6476e568"
        },
        "date": 1724084588421,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13489.258459000013,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10035.959417999999 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4857.0457560000195,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4469.776982 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 40601.844012999994,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 40601845000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14599.013504,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14599013000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3773238717,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3773238717 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 209594693,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 209594693 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3094299917,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3094299917 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 172116848,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 172116848 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "committer": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "id": "30d83d92d129b05a9bfbb15096d19800f5b7c64e",
          "message": "feat: optimize to_radix",
          "timestamp": "2024-08-19T15:52:20Z",
          "url": "https://github.com/AztecProtocol/aztec-packages/pull/8073/commits/30d83d92d129b05a9bfbb15096d19800f5b7c64e"
        },
        "date": 1724084792391,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13246.604273000003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10048.474245000001 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4942.621224999983,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4472.743317999999 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39958.997632000006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39958997000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14512.459488000002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14512460000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3755858919,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3755858919 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 208557469,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 208557469 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3104691630,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3104691630 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173188239,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173188239 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "committer": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "id": "b405ba7b3c31107ea780f6921c05d499434083ec",
          "message": "feat: PG recursive verifier constructors based on stdlib inputs",
          "timestamp": "2024-08-19T15:52:20Z",
          "url": "https://github.com/AztecProtocol/aztec-packages/pull/8052/commits/b405ba7b3c31107ea780f6921c05d499434083ec"
        },
        "date": 1724086497855,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13236.636307999986,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9955.299616 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4905.702769999991,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4456.67809 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39748.325937999994,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39748327000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14430.117137000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14430118000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3756957232,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3756957232 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 208711585,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 208711585 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3060493542,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3060493542 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173142684,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173142684 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "committer": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "id": "51c9ad15f68ce9b6817050e2d444cc05a85ba808",
          "message": "feat: PG recursive verifier constructors based on stdlib inputs",
          "timestamp": "2024-08-19T15:52:20Z",
          "url": "https://github.com/AztecProtocol/aztec-packages/pull/8052/commits/51c9ad15f68ce9b6817050e2d444cc05a85ba808"
        },
        "date": 1724087374523,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13448.808257000024,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10051.196767999998 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4880.282520999998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4478.74033 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 40047.13003000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 40047130000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14506.480003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14506481000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3786377631,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3786377631 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 208660962,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 208660962 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3082142549,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3082142549 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173087296,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173087296 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "committer": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "id": "160bc7cffded2179f7396bed09ca3a7641fb91c1",
          "message": "refactor(avm): separate alu finalization",
          "timestamp": "2024-08-19T15:52:20Z",
          "url": "https://github.com/AztecProtocol/aztec-packages/pull/8069/commits/160bc7cffded2179f7396bed09ca3a7641fb91c1"
        },
        "date": 1724087879443,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13364.582963000004,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9897.252857000001 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4954.164798999997,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4531.587369000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39891.545537,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39891545000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14492.010509000002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14492009000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3800044610,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3800044610 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 211607693,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 211607693 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3110716009,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3110716009 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173552173,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173552173 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "committer": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "id": "0460b98cd972ca99784fc8001e3f4d3fcf65b424",
          "message": "feat: PG recursive verifier constructors based on stdlib inputs",
          "timestamp": "2024-08-19T15:52:20Z",
          "url": "https://github.com/AztecProtocol/aztec-packages/pull/8052/commits/0460b98cd972ca99784fc8001e3f4d3fcf65b424"
        },
        "date": 1724090413726,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13310.021998999986,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9955.814637 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5018.582276000004,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4601.911491 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39840.736996,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39840736000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14553.139731,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14553141000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3826777320,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3826777320 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 215638513,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 215638513 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3111450838,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3111450838 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173124604,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173124604 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "committer": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "id": "5f0c10f302103a8b52d298d2969200f820e1451f",
          "message": "feat: PG recursive verifier constructors based on stdlib inputs",
          "timestamp": "2024-08-19T15:52:20Z",
          "url": "https://github.com/AztecProtocol/aztec-packages/pull/8052/commits/5f0c10f302103a8b52d298d2969200f820e1451f"
        },
        "date": 1724091340218,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13451.412032999997,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10526.895682999999 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5102.524040999995,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4625.276476 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 40573.720659000006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 40573721000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14682.455011,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14682455000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3783876666,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3783876666 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 210472717,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 210472717 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3109789056,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3109789056 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 175398381,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 175398381 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "committer": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "id": "9cea4b9036f9e4b91966daaaed0b3ab6c5a3c3dd",
          "message": "chore(master): Release 0.50.0",
          "timestamp": "2024-08-19T18:24:39Z",
          "url": "https://github.com/AztecProtocol/aztec-packages/pull/8032/commits/9cea4b9036f9e4b91966daaaed0b3ab6c5a3c3dd"
        },
        "date": 1724092518757,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13286.707360999997,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10089.523592000001 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4873.4418170000135,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4513.812835999999 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39833.824196,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39833823000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14446.869765000003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14446868000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3780331558,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3780331558 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 208012107,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 208012107 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3100743109,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3100743109 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173051992,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173051992 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "committer": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "id": "f55c7fe1dda3f5e9e2cb788e5a3056ef2fcf29a1",
          "message": "feat: PG recursive verifier constructors based on stdlib inputs",
          "timestamp": "2024-08-19T18:24:39Z",
          "url": "https://github.com/AztecProtocol/aztec-packages/pull/8052/commits/f55c7fe1dda3f5e9e2cb788e5a3056ef2fcf29a1"
        },
        "date": 1724092785935,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13578.174794000006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10589.697963 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4930.3006530000175,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4501.385382 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 40454.745986999995,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 40454747000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14499.055485,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14499057000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3792400235,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3792400235 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 208954527,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 208954527 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3100302145,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3100302145 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173024004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173024004 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "committer": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "id": "ae65fb2fd89a0c382c435848b21c6be06a385c32",
          "message": "feat: PG recursive verifier constructors based on stdlib inputs",
          "timestamp": "2024-08-19T18:24:39Z",
          "url": "https://github.com/AztecProtocol/aztec-packages/pull/8052/commits/ae65fb2fd89a0c382c435848b21c6be06a385c32"
        },
        "date": 1724094295436,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13333.175237999996,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10004.602624000003 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4919.059814999997,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4564.64936 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 40057.235742,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 40057236000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14537.347931999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14537348000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3806881443,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3806881443 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 214000154,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 214000154 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3123658047,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3123658047 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 175475932,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 175475932 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "committer": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "id": "051a4d921b41e408088ba177862226cc20a88999",
          "message": "feat: PG recursive verifier constructors based on stdlib inputs",
          "timestamp": "2024-08-19T18:24:39Z",
          "url": "https://github.com/AztecProtocol/aztec-packages/pull/8052/commits/051a4d921b41e408088ba177862226cc20a88999"
        },
        "date": 1724095582676,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13256.613845000003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10028.757474999999 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4891.221049000009,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4460.201333999999 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39627.311692,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39627311000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14366.759880999998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14366760000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3754572444,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3754572444 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 211999384,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 211999384 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3091223248,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3091223248 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173783711,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173783711 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "committer": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "id": "1021e383a2dcba1608cbdae13bbef228ce033494",
          "message": "feat: PG recursive verifier constructors based on stdlib inputs",
          "timestamp": "2024-08-19T18:24:39Z",
          "url": "https://github.com/AztecProtocol/aztec-packages/pull/8052/commits/1021e383a2dcba1608cbdae13bbef228ce033494"
        },
        "date": 1724101212147,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13284.596678000014,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9976.063374 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4968.907463999997,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4595.562985 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39845.42254500001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39845422000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14596.407281000002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14596407000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3791405907,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3791405907 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 210993536,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 210993536 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3101308071,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3101308071 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 174035361,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 174035361 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "committer": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "id": "a8240d8dc6414db175259773fe9509d5f08828c6",
          "message": "WIP chore: does parallel for nest right now?",
          "timestamp": "2024-08-19T18:24:39Z",
          "url": "https://github.com/AztecProtocol/aztec-packages/pull/8072/commits/a8240d8dc6414db175259773fe9509d5f08828c6"
        },
        "date": 1724101312881,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13456.394034999988,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10208.978727 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5150.384418000016,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4618.348293999999 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 40671.620465,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 40671620000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14809.623920999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14809624000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3783973735,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3783973735 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 207987614,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 207987614 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3086576204,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3086576204 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173396441,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173396441 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adam.domurad@gmail.com",
            "name": "ludamad",
            "username": "ludamad"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4cb5c83174f55f046d7d37e4e6a4667556ac5907",
          "message": "refactor(bb): small cleanup in protogalaxy prover (#8072)\n\nsmall cleanup in protogalaxy prover (makes the polynomial structure work\r\na bit cleaner), bit faster runtime (-50ms client ivc\r\nClientIVCBench/Full/6 with the simpler multithreading), bit faster\r\ncompilation (unmeasured but I put more in the impl file), bit safer\r\n(catch nesting parallel_for, which if ever was done looked unsafe,\r\nluckily we did not seem to make that mistake)\r\n\r\n- small cleanup in protogalaxy prover, introduce\r\n`_compute_vanishing_polynomial_and_lagranges` and make methods\r\nout-of-line\r\n- simplify two cases `compute_next_accumulator` to not use custom\r\nparallelization but instead use polynomial methods\r\n- ensure we don't accidentally nest parallel_for, which didn't look\r\ncorrect under recursion (global state)",
          "timestamp": "2024-08-19T23:29:33Z",
          "tree_id": "28bcbfc68b23b7b79d7737eeda975b50d89ebf83",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/4cb5c83174f55f046d7d37e4e6a4667556ac5907"
        },
        "date": 1724110955457,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13365.644014999987,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10071.764473999998 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4944.324507000005,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4589.576301 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39975.171489,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39975172000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14538.088091000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14538088000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3767106588,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3767106588 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 207724489,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 207724489 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3081205918,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3081205918 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173077142,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173077142 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adam.domurad@gmail.com",
            "name": "ludamad",
            "username": "ludamad"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bff26b2f9aecb8298225d5abe72740fedd1f4e8",
          "message": "refactor(bb): simplify parallel_for_if_effective (#8079)\n\nThe chunkiness of `run_loop_in_parallel_if_effective` was getting in the\r\nway of doing polynomial refactor passes for structured polynomials.\r\n\r\n- Renamed parallel for variants to all start with parallel_for\r\n- Doing math on the spot with constants was simpler, plus other\r\nsimplifications.\r\n- Removed the variant that takes two parameters, and introduced a one\r\nparameter variant as just having an 'i' parameter felt like the sweet\r\nspot, plus a lot of places where the thread/chunk index was not used I\r\ndo plan to use in a followup as we can avoid mutexes that way and be\r\nmore efficient.\r\n\r\nBundled changes:\r\n- There was an unnecessary polynomial copy in IPA\r\n- Also, introduce a SlabVector class where we were using\r\nSlabContainerAllocator, with plans to use it more (and possibly make it\r\nequal to normal std::vector for native code where memory fragmentation\r\nreally doesn't matter)",
          "timestamp": "2024-08-19T20:29:11-07:00",
          "tree_id": "b714a006f76141baa295a1db0bea05d0c7308df3",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/5bff26b2f9aecb8298225d5abe72740fedd1f4e8"
        },
        "date": 1724125490803,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13310.521337000011,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10026.65256 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5375.36291100001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4851.505246000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39909.273784,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39909274000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 15058.622363999997,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 15058622000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3757617824,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3757617824 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 209829928,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 209829928 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3130721183,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3130721183 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173742970,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173742970 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "codygunton@gmail.com",
            "name": "Cody Gunton",
            "username": "codygunton"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec03e403cc8bfa1f40fb05fe93eadf9ed63b9b2f",
          "message": "chore: Split up stdlib/recursion (#8054)\n\nA single target contained many stdlib verifiers. I split that up to make\r\nworking on these faster. I also move the Goblin VM verifiers into\r\nstdlib/ for consistency. I also removed some template instatiations of\r\nthe Protogalaxy that are not needed.",
          "timestamp": "2024-08-20T10:00:47Z",
          "tree_id": "c583bbdd467d997a69503b2b11d5790d202453ee",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/ec03e403cc8bfa1f40fb05fe93eadf9ed63b9b2f"
        },
        "date": 1724148685488,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13347.796576000008,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9898.169382 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5053.374314999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4561.518164 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39951.034381,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39951035000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14560.236238,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14560236000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3811037490,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3811037490 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 211058017,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 211058017 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3114330616,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3114330616 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173658037,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173658037 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98505400+ledwards2225@users.noreply.github.com",
            "name": "ledwards2225",
            "username": "ledwards2225"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c568b0545b022a536a6eb4199be817593e6b317",
          "message": "feat: PG recursive verifier constructors based on stdlib inputs (#8052)\n\nUpdate the PG recursive verifier to take stdlib\r\naccumulators/verification_keys and stdlib proofs as opposed to their\r\nnative counterparts. This work will allow for a connection to be made\r\nbetween the proofs/vkeys used in noir protocol circuits and those used\r\nin the backend. The workflow will be roughly 1) construct stdlib\r\nvkey/proof from their known native counterparts, 2) use `assert_equal`\r\nto connect the witnesses of these objects to those received in the\r\ncorresponding acir `RecursionConstraint`, and 3) run the recursive\r\nverifier as usual.",
          "timestamp": "2024-08-20T16:45:09Z",
          "tree_id": "3fcd651b87ccb62eaca1da05ed8f66128d0526d9",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/4c568b0545b022a536a6eb4199be817593e6b317"
        },
        "date": 1724173284608,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13300.210032999985,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10012.99604 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4887.386962000008,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4495.215189 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39827.981034,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39827982000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14388.985789,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14388987000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3762419491,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3762419491 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 207201517,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 207201517 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3076782901,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3076782901 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 172472322,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 172472322 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mara@aztecprotocol.com",
            "name": "maramihali",
            "username": "maramihali"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d86577c2e36c5a077a859058602f455421ed93e1",
          "message": "feat: Poseidon2 gates for Ultra arithmetisation (#7494)\n\nAdd Poseidon2 gates to the `UltraCircuitBuilder` which now ensures that\r\nrecursive verifier instantiated with the Ultra arithmetisation produce\r\nthe correct number of constraints.\r\n\r\nUpdates required:\r\n* change verification key length and constant proof length constants\r\nacross the codebase (two selectors from the new gate whose commitments\r\nneed to be in the vk and the poseidon relation becomes the one with the\r\nhighest degree); changes to Prover.toml accordingly\r\n* ensure the ultra recursive verifier still stays constant size now that\r\nhashing produces gates\r\n* small modification to solidity verifer to reflect the ones in cpp with\r\nthe caveat that the UltraKeccak flavor still doesnt support Poseidon\r\ngate (changes coming in a followup PR)\r\n\r\nTube circuit changes in # of gates (post finalisation):\r\n- number of gates prior this change, in master: 13947018\r\n- number of gates post this change: 14038982\r\n\r\nCloses https://github.com/AztecProtocol/barretenberg/issues/1041",
          "timestamp": "2024-08-21T10:54:35Z",
          "tree_id": "1c00b5af5a78048a1bf46b9d9b2ea002b105daf4",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/d86577c2e36c5a077a859058602f455421ed93e1"
        },
        "date": 1724238239889,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13650.790059000003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10486.816176 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5066.132444000004,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4687.170844 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 40166.086421,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 40166086000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14692.371447,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14692371000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3747146237,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3747146237 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 207923437,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 207923437 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3089209790,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3089209790 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 172251297,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 172251297 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47281315+guipublic@users.noreply.github.com",
            "name": "guipublic",
            "username": "guipublic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2ee79d28affa66ef3c9f73782182b6221e2e9d98",
          "message": "chore: handle constant output for ec add opcode (#8108)\n\nWhen enabling constant inputs for ec addition we may get contant output\r\nas well.",
          "timestamp": "2024-08-21T18:26:38+02:00",
          "tree_id": "5bffe3598c2a9bf59fcd93e7303ad9156b2deb9b",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/2ee79d28affa66ef3c9f73782182b6221e2e9d98"
        },
        "date": 1724258199375,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13665.626783000022,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10404.427329999999 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5094.544990000003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4639.034811 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 40069.431718,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 40069431000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14777.989955000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14777990000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3748228723,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3748228723 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 210611464,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 210611464 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3071174040,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3071174040 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 172694889,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 172694889 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adam.domurad@gmail.com",
            "name": "ludamad",
            "username": "ludamad"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b73f69126b8ae70aa7ade96e775cabce581358f",
          "message": "fix(ci): correctly run bb tests with asserts (#7607)",
          "timestamp": "2024-08-21T10:50:59-07:00",
          "tree_id": "d51ce5225841ebbc81dc4d6fd2838f54c109769f",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/7b73f69126b8ae70aa7ade96e775cabce581358f"
        },
        "date": 1724263425136,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13574.792914,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10458.184383 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5082.6136749999905,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4684.489781000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 40265.197248,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 40265198000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14689.716704999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14689717000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3777028729,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3777028729 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 208352074,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 208352074 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3088494605,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3088494605 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 172615954,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 172615954 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98505400+ledwards2225@users.noreply.github.com",
            "name": "ledwards2225",
            "username": "ledwards2225"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c5ab2b373086cb2842ee848329e282b463b3272",
          "message": "chore: use decider verifier in ultra verifier (#8115)\n\nUse decider verifier in ultra verifier instead of duplicating the logic.\r\n(Also removes some unnecessary and/or broken constructors)",
          "timestamp": "2024-08-21T11:10:22-07:00",
          "tree_id": "4bb59238b80b7b08dc78de6074996f8d4af2b2b0",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/6c5ab2b373086cb2842ee848329e282b463b3272"
        },
        "date": 1724264699219,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13653.301577000007,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10398.181463 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5051.197374000011,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4640.034814999999 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 40209.036518,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 40209036000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14768.049267,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14768050000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3759122851,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3759122851 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 207209337,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 207209337 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3087762013,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3087762013 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 174582397,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 174582397 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fcarreiro@users.noreply.github.com",
            "name": "Facundo",
            "username": "fcarreiro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8a9eb4b809f582c0fa185a2193e0493fc579d98",
          "message": "refactor(avm): separate alu finalization (#8069)\n\nPIL\n* Moved ALU lookups to alu.pil. These are mostly range checks and I expect them to be different once @IlyasRidhuan finishes setting up the gadget changes.\n\nCPP\n* Made ALU entry smaller and encapsulated finalize.",
          "timestamp": "2024-08-22T10:10:34+01:00",
          "tree_id": "785b41059dbbfb8f2add99056cd6befa33ad6d3c",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/e8a9eb4b809f582c0fa185a2193e0493fc579d98"
        },
        "date": 1724318715664,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13615.141731999984,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10327.444193 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5069.9080929999955,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4675.631683 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 40269.55786,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 40269558000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14624.27101,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14624270000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3759112942,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3759112942 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 206720851,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 206720851 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3094599307,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3094599307 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 172900131,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 172900131 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "james.zaki@proton.me",
            "name": "James Zaki",
            "username": "jzaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a7443216dfaa7b2731911e2320b2c1c1a720e8e8",
          "message": "docs: Update installation info for bb and noir (#8119)\n\nPeople trip up on not having jq installed when noir instructions tell\r\nthem to use the bb command.\r\nUpdate both to smooth this out.\r\n\r\n---------\r\n\r\nCo-authored-by: Tom French <15848336+TomAFrench@users.noreply.github.com>",
          "timestamp": "2024-08-22T09:32:18Z",
          "tree_id": "0420029516b35a7b0be24484d3eab37f9d19c3dc",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/a7443216dfaa7b2731911e2320b2c1c1a720e8e8"
        },
        "date": 1724320159067,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13671.636196000009,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10562.092021 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5142.773715999993,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4741.576351999999 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 40214.523316,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 40214524000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14693.5976,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14693598000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3774852251,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3774852251 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 208037254,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 208037254 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3100115209,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3100115209 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 172818191,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 172818191 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "60546371+PhilWindle@users.noreply.github.com",
            "name": "PhilWindle",
            "username": "PhilWindle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8a1032ec4738e9b592b45500c1cf47c0e1820ad3",
          "message": "feat: Native Merkle Trees (#7037)\n\nThis PR is the first of several where we are moving to use native\r\nimplementations of Merkle Trees for performance reasons. It includes:\r\n\r\n1. The core tree implementations for both indexed trees and append only\r\ntrees.\r\n2. The introduction of LMDB as a dependency that we retrieve from GIT\r\nand build ourselves.\r\n3. The creation of a set of RAII wrapper objects around the LMDB\r\nconcepts.\r\n4. The creation of a committed/uncommitted store on top of LMDB used by\r\nthe trees for state management\r\n\r\n---------\r\n\r\nCo-authored-by: IlyasRidhuan <ilyasridhuan@gmail.com>\r\nCo-authored-by: Alex Gherghisan <alexg@aztecprotocol.com>",
          "timestamp": "2024-08-22T12:12:37Z",
          "tree_id": "853b87b91b705dfc0f1d0cc8f76370c3276fac89",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/8a1032ec4738e9b592b45500c1cf47c0e1820ad3"
        },
        "date": 1724329474113,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13750.254533000003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10445.755941 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5119.2273820000055,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4751.394111 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 40354.612466000006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 40354613000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14629.768457999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14629768000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3780387679,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3780387679 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 209307590,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 209307590 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3099326385,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3099326385 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 174060750,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 174060750 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "132435771+jeanmon@users.noreply.github.com",
            "name": "Jean M",
            "username": "jeanmon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b1f9fb6a4986fdfa10207ec89f8b23e14d466073",
          "message": "feat(avm): enable zeromorph in AVM verification (#8111)\n\nResolves #4944",
          "timestamp": "2024-08-22T15:10:35+02:00",
          "tree_id": "29f3db899b4876aa136b43c44c8a1fef2a4ea478",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/b1f9fb6a4986fdfa10207ec89f8b23e14d466073"
        },
        "date": 1724333393834,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13616.287578999987,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10365.409744999999 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5052.450032999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4690.233216 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 40121.292698000005,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 40121293000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14733.815796,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14733816000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3751842381,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3751842381 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 210523123,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 210523123 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3069713219,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3069713219 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173538164,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173538164 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "codygunton@gmail.com",
            "name": "Cody Gunton",
            "username": "codygunton"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a5cc3bab86711062d180993cf4a7412d1013aa48",
          "message": "refactor: Deduplication in Protogalaxy (#8067)\n\nShare some code between prover and verifier, and unify some code paths\r\nin the prover where we had duplication between zero-optimized and\r\ngeneral cases.",
          "timestamp": "2024-08-22T08:19:56-07:00",
          "tree_id": "669e931ea05b9fbbdf3b56499aca1e97ea81636d",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/a5cc3bab86711062d180993cf4a7412d1013aa48"
        },
        "date": 1724341079951,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13603.056498999991,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10397.184903000001 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5075.154338000004,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4730.568903 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 40096.241011000006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 40096241000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14805.693106,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14805693000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3762755888,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3762755888 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 208099229,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 208099229 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3097743316,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3097743316 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173073610,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173073610 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98505400+ledwards2225@users.noreply.github.com",
            "name": "ledwards2225",
            "username": "ledwards2225"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "580708a1f7c18338888d83e749a0740a322c86e0",
          "message": "feat: oink recursive verifier (#8121)\n\nIntroduce an Oink recursive verifier and use it to replace the\r\nequivalent logic in Ultra and PG recursive verifiers.\r\n\r\nCloses https://github.com/AztecProtocol/barretenberg/issues/949",
          "timestamp": "2024-08-22T08:20:27-07:00",
          "tree_id": "da593a8c45d22b5e003204ff946f155e1efdfcec",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/580708a1f7c18338888d83e749a0740a322c86e0"
        },
        "date": 1724341551910,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13596.150179999995,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10470.292163999999 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5052.010317999986,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4645.362612999999 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 40237.851298,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 40237851000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14713.377862,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14713377000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3781292675,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3781292675 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 208385654,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 208385654 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3080830471,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3080830471 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173627302,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173627302 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49558828+AztecBot@users.noreply.github.com",
            "name": "Aztec Bot",
            "username": "AztecBot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b5048048b68514571a9113465eda564c8f1ed96",
          "message": "chore(master): Release 0.50.0 (#8032)\n\n:robot: I have created a release *beep* *boop*\r\n---\r\n\r\n\r\n<details><summary>aztec-package: 0.50.0</summary>\r\n\r\n##\r\n[0.50.0](https://github.com/AztecProtocol/aztec-packages/compare/aztec-package-v0.49.2...aztec-package-v0.50.0)\r\n(2024-08-22)\r\n\r\n\r\n### Features\r\n\r\n* Add a prover-node to the proving e2e tests\r\n([#7952](https://github.com/AztecProtocol/aztec-packages/issues/7952))\r\n([ec5a5fb](https://github.com/AztecProtocol/aztec-packages/commit/ec5a5fb8fd9c344bcb0d33a4e9f07300d3317bf2))\r\n* Add max pending txs to bot\r\n([#8046](https://github.com/AztecProtocol/aztec-packages/issues/8046))\r\n([7f5517e](https://github.com/AztecProtocol/aztec-packages/commit/7f5517ecf19e720176d4e97e07f7be557b6705d9))\r\n* Deterministic deployments for L1\r\n([#8031](https://github.com/AztecProtocol/aztec-packages/issues/8031))\r\n([abc6b19](https://github.com/AztecProtocol/aztec-packages/commit/abc6b19b9483b02aa233ce844f01cfb876102531))\r\n* Introduce validator client\r\n([#7854](https://github.com/AztecProtocol/aztec-packages/issues/7854))\r\n([e3be8e6](https://github.com/AztecProtocol/aztec-packages/commit/e3be8e6cd23fa7b7cdf341da720decd21a5d8c44))\r\n* JSON logging\r\n([#8095](https://github.com/AztecProtocol/aztec-packages/issues/8095))\r\n([048fa12](https://github.com/AztecProtocol/aztec-packages/commit/048fa12cf21de3067908c2e03b2245ef8e674d46))\r\n\r\n\r\n### Bug Fixes\r\n\r\n* Port option & extracting correct namespaced options\r\n([#8097](https://github.com/AztecProtocol/aztec-packages/issues/8097))\r\n([e74c83e](https://github.com/AztecProtocol/aztec-packages/commit/e74c83e581380fa344d1dc1cd783beb1b2d11e0e))\r\n* Txe port and aztec start options\r\n([#8071](https://github.com/AztecProtocol/aztec-packages/issues/8071))\r\n([23778c5](https://github.com/AztecProtocol/aztec-packages/commit/23778c5a0ac4fe512cde3a4b66df65f588cad305))\r\n\r\n\r\n### Miscellaneous\r\n\r\n* Configuration for bot on various networks\r\n([#8063](https://github.com/AztecProtocol/aztec-packages/issues/8063))\r\n([453a096](https://github.com/AztecProtocol/aztec-packages/commit/453a096378df57b0280be9aa52697da434e1a457))\r\n* Merge devnet fixes back to master\r\n([#8149](https://github.com/AztecProtocol/aztec-packages/issues/8149))\r\n([6be2183](https://github.com/AztecProtocol/aztec-packages/commit/6be21831764243ea42ef932aac3b79f20b483a40))\r\n* Merge Provernet back to master\r\n([#8070](https://github.com/AztecProtocol/aztec-packages/issues/8070))\r\n([82f3dc7](https://github.com/AztecProtocol/aztec-packages/commit/82f3dc7320e05878cbd55136f1d88f87f14b2468))\r\n</details>\r\n\r\n<details><summary>barretenberg.js: 0.50.0</summary>\r\n\r\n##\r\n[0.50.0](https://github.com/AztecProtocol/aztec-packages/compare/barretenberg.js-v0.49.2...barretenberg.js-v0.50.0)\r\n(2024-08-22)\r\n\r\n\r\n### Miscellaneous\r\n\r\n* Merge devnet fixes back to master\r\n([#8149](https://github.com/AztecProtocol/aztec-packages/issues/8149))\r\n([6be2183](https://github.com/AztecProtocol/aztec-packages/commit/6be21831764243ea42ef932aac3b79f20b483a40))\r\n</details>\r\n\r\n<details><summary>aztec-packages: 0.50.0</summary>\r\n\r\n##\r\n[0.50.0](https://github.com/AztecProtocol/aztec-packages/compare/aztec-packages-v0.49.2...aztec-packages-v0.50.0)\r\n(2024-08-22)\r\n\r\n\r\n### ⚠ BREAKING CHANGES\r\n\r\n* replace public key fetching API\r\n([#7996](https://github.com/AztecProtocol/aztec-packages/issues/7996))\r\n\r\n### Features\r\n\r\n* (LSP) suggest names that match any part of the current prefix\r\n(https://github.com/noir-lang/noir/pull/5752)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Add `Expr::as_any_integer` and `Expr::as_member_access`\r\n(https://github.com/noir-lang/noir/pull/5742)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Add `Expr::as_array`, `Expr::as_repeated_element_array` and same for\r\nslice (https://github.com/noir-lang/noir/pull/5750)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Add `Expr::as_binary_op` (https://github.com/noir-lang/noir/pull/5734)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Add `Expr::as_bool` (https://github.com/noir-lang/noir/pull/5729)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Add `Expr::as_unary` (https://github.com/noir-lang/noir/pull/5731)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Add `Expr` methods: `as_tuple`, `as_parenthesized`, `as_index`,\r\n`as_if` (https://github.com/noir-lang/noir/pull/5726)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Add `TraitImpl::trait_generic_args` and `TraitImpl::methods`\r\n(https://github.com/noir-lang/noir/pull/5722)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Add `unsafe` blocks for calling unconstrained code from constrained\r\nfunctions (https://github.com/noir-lang/noir/pull/4429)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Add a prover-node to the proving e2e tests\r\n([#7952](https://github.com/AztecProtocol/aztec-packages/issues/7952))\r\n([ec5a5fb](https://github.com/AztecProtocol/aztec-packages/commit/ec5a5fb8fd9c344bcb0d33a4e9f07300d3317bf2))\r\n* Add max pending txs to bot\r\n([#8046](https://github.com/AztecProtocol/aztec-packages/issues/8046))\r\n([7f5517e](https://github.com/AztecProtocol/aztec-packages/commit/7f5517ecf19e720176d4e97e07f7be557b6705d9))\r\n* Add reusable procedures to brillig generation\r\n([#7981](https://github.com/AztecProtocol/aztec-packages/issues/7981))\r\n([99d1131](https://github.com/AztecProtocol/aztec-packages/commit/99d1131b645f10f9af4d8f65ef350ecebde8c9c3))\r\n* Automate verify_honk_proof input generation\r\n([#8092](https://github.com/AztecProtocol/aztec-packages/issues/8092))\r\n([bf38d61](https://github.com/AztecProtocol/aztec-packages/commit/bf38d61364a0fb55ae79ef09b05df2533f3a6f17))\r\n* **avm:** Enable zeromorph in AVM verification\r\n([#8111](https://github.com/AztecProtocol/aztec-packages/issues/8111))\r\n([b1f9fb6](https://github.com/AztecProtocol/aztec-packages/commit/b1f9fb6a4986fdfa10207ec89f8b23e14d466073)),\r\ncloses\r\n[#4944](https://github.com/AztecProtocol/aztec-packages/issues/4944)\r\n* Build for arm\r\n([#7994](https://github.com/AztecProtocol/aztec-packages/issues/7994))\r\n([0dffe1b](https://github.com/AztecProtocol/aztec-packages/commit/0dffe1bd69847677c19c03f0e60534105596418c))\r\n* Completing MockNote\r\n([#8059](https://github.com/AztecProtocol/aztec-packages/issues/8059))\r\n([05efe23](https://github.com/AztecProtocol/aztec-packages/commit/05efe230e65208303ebd70bac1e3c4d5bfe4f65b)),\r\ncloses\r\n[#7636](https://github.com/AztecProtocol/aztec-packages/issues/7636)\r\n* Constant addresses as addresses\r\n([#8056](https://github.com/AztecProtocol/aztec-packages/issues/8056))\r\n([1da5caf](https://github.com/AztecProtocol/aztec-packages/commit/1da5cafee41bdfcf00edfa948b74cb61a3aca180))\r\n* Deterministic deployments for L1\r\n([#8031](https://github.com/AztecProtocol/aztec-packages/issues/8031))\r\n([abc6b19](https://github.com/AztecProtocol/aztec-packages/commit/abc6b19b9483b02aa233ce844f01cfb876102531))\r\n* **docs:** Cookbook integration\r\n([#8083](https://github.com/AztecProtocol/aztec-packages/issues/8083))\r\n([19bd8a9](https://github.com/AztecProtocol/aztec-packages/commit/19bd8a9e678b2c3671a49a20090885f1d5d8048c))\r\n* Enabling public and private bridging w/ cli\r\n([#8011](https://github.com/AztecProtocol/aztec-packages/issues/8011))\r\n([f0f9c73](https://github.com/AztecProtocol/aztec-packages/commit/f0f9c73dc3212fa8d986b7c827b6b4f0cbe85494))\r\n* Fault-tolerant parsing of `fn` and `impl`\r\n(https://github.com/noir-lang/noir/pull/5753)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Flush sequencer\r\n([#8050](https://github.com/AztecProtocol/aztec-packages/issues/8050))\r\n([8821e5f](https://github.com/AztecProtocol/aztec-packages/commit/8821e5fc7236c6291fe2b5cac1714c2c2255f6d3))\r\n* Introduce blob circuit\r\n([#8101](https://github.com/AztecProtocol/aztec-packages/issues/8101))\r\n([4bb3bac](https://github.com/AztecProtocol/aztec-packages/commit/4bb3bacd7230e0132eff976a2199fbbf0bc24c2a))\r\n* Introduce validator client\r\n([#7854](https://github.com/AztecProtocol/aztec-packages/issues/7854))\r\n([e3be8e6](https://github.com/AztecProtocol/aztec-packages/commit/e3be8e6cd23fa7b7cdf341da720decd21a5d8c44))\r\n* JSON logging\r\n([#8095](https://github.com/AztecProtocol/aztec-packages/issues/8095))\r\n([048fa12](https://github.com/AztecProtocol/aztec-packages/commit/048fa12cf21de3067908c2e03b2245ef8e674d46))\r\n* LSP auto-import completion\r\n(https://github.com/noir-lang/noir/pull/5741)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* LSP autocomplete constructor fields\r\n(https://github.com/noir-lang/noir/pull/5732)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* LSP signature help (https://github.com/noir-lang/noir/pull/5725)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Max pending jobs in prover node\r\n([#8045](https://github.com/AztecProtocol/aztec-packages/issues/8045))\r\n([c857604](https://github.com/AztecProtocol/aztec-packages/commit/c857604a29e3184a673f2e5632b43b1d684a225b))\r\n* Move out_hash inside tx_effect_hash\r\n([#7489](https://github.com/AztecProtocol/aztec-packages/issues/7489))\r\n([ff0effe](https://github.com/AztecProtocol/aztec-packages/commit/ff0effe600023b4050183f78f97be5cd8373f57b))\r\n* Native Merkle Trees\r\n([#7037](https://github.com/AztecProtocol/aztec-packages/issues/7037))\r\n([8a1032e](https://github.com/AztecProtocol/aztec-packages/commit/8a1032ec4738e9b592b45500c1cf47c0e1820ad3))\r\n* Oink recursive verifier\r\n([#8121](https://github.com/AztecProtocol/aztec-packages/issues/8121))\r\n([580708a](https://github.com/AztecProtocol/aztec-packages/commit/580708a1f7c18338888d83e749a0740a322c86e0))\r\n* **optimization:** Follow past `array_set`s when optimizing\r\n`array_get`s (https://github.com/noir-lang/noir/pull/5772)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Passes copy_cycles by const reference to avoid copying\r\n([#8051](https://github.com/AztecProtocol/aztec-packages/issues/8051))\r\n([495d363](https://github.com/AztecProtocol/aztec-packages/commit/495d363fdf0b89dfeb228c200824fc5f9af7bb19))\r\n* **perf:** Mem2reg function state for value loads to optimize across\r\nblocks (https://github.com/noir-lang/noir/pull/5757)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* PG recursive verifier constructors based on stdlib inputs\r\n([#8052](https://github.com/AztecProtocol/aztec-packages/issues/8052))\r\n([4c568b0](https://github.com/AztecProtocol/aztec-packages/commit/4c568b0545b022a536a6eb4199be817593e6b317))\r\n* Poseidon2 gates for Ultra arithmetisation\r\n([#7494](https://github.com/AztecProtocol/aztec-packages/issues/7494))\r\n([d86577c](https://github.com/AztecProtocol/aztec-packages/commit/d86577c2e36c5a077a859058602f455421ed93e1))\r\n* Prover node metrics\r\n([#8086](https://github.com/AztecProtocol/aztec-packages/issues/8086))\r\n([ab018ff](https://github.com/AztecProtocol/aztec-packages/commit/ab018ff473508f2b3d17ee4bb3dfda99b412951c))\r\n* Removed socat, fixed aztec-run\r\n([#8145](https://github.com/AztecProtocol/aztec-packages/issues/8145))\r\n([ff94aa2](https://github.com/AztecProtocol/aztec-packages/commit/ff94aa20a0bc799710e4515bf4e7496c6bda8be7))\r\n* Removing redundant key fetching\r\n([#8043](https://github.com/AztecProtocol/aztec-packages/issues/8043))\r\n([2bbcc7b](https://github.com/AztecProtocol/aztec-packages/commit/2bbcc7bfde00eb8078fac51e83906287d39119a5))\r\n* Replace public key fetching API\r\n([#7996](https://github.com/AztecProtocol/aztec-packages/issues/7996))\r\n([73d6aa9](https://github.com/AztecProtocol/aztec-packages/commit/73d6aa98c7d156d3a007bd65e49575b1701f0f7e))\r\n* Small optimization in toradix\r\n([#8040](https://github.com/AztecProtocol/aztec-packages/issues/8040))\r\n([0dc7a50](https://github.com/AztecProtocol/aztec-packages/commit/0dc7a503c34625c5ea5a3ec84e4724e96229f038))\r\n* Some fixes and cleanup in PG recursive verifier\r\n([#8053](https://github.com/AztecProtocol/aztec-packages/issues/8053))\r\n([5f2a9bd](https://github.com/AztecProtocol/aztec-packages/commit/5f2a9bd3d968be491a12c63f812aa8d7e3bb585e))\r\n* Suggest trait methods in LSP completion\r\n(https://github.com/noir-lang/noir/pull/5735)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Suggest tuple fields in LSP completion\r\n(https://github.com/noir-lang/noir/pull/5730)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Track world state metrics\r\n([#8109](https://github.com/AztecProtocol/aztec-packages/issues/8109))\r\n([ca58d94](https://github.com/AztecProtocol/aztec-packages/commit/ca58d94d1b08849f2cb472d1d65dff37ad0602d6))\r\n* Typing specific pub keys\r\n([#8099](https://github.com/AztecProtocol/aztec-packages/issues/8099))\r\n([638793a](https://github.com/AztecProtocol/aztec-packages/commit/638793adbc4a0e0640af3bc8a0cf3001b45fe928))\r\n* Unify all acir recursion constraints based on RecursionConstraint and\r\nproof_type\r\n([#7993](https://github.com/AztecProtocol/aztec-packages/issues/7993))\r\n([7cb39bc](https://github.com/AztecProtocol/aztec-packages/commit/7cb39bceddcb9ec4142b86087a7af58d547ddfaa))\r\n* User `super::` in LSP autocompletion if possible\r\n(https://github.com/noir-lang/noir/pull/5751)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Various token note improvements\r\n([#8062](https://github.com/AztecProtocol/aztec-packages/issues/8062))\r\n([8f9dfd9](https://github.com/AztecProtocol/aztec-packages/commit/8f9dfd970199789fcec547605b0bf65fb1acbd0b))\r\n* Zk sumcheck\r\n([#7517](https://github.com/AztecProtocol/aztec-packages/issues/7517))\r\n([0e9a530](https://github.com/AztecProtocol/aztec-packages/commit/0e9a530cfd83f375f6b3a1bb9fb67cf562847f9b))\r\n\r\n\r\n### Bug Fixes\r\n\r\n* (LSP) only add cached files relevant to workspace\r\n(https://github.com/noir-lang/noir/pull/5775)\r\n([2d70215](https://github.com/AztecProtocol/aztec-packages/commit/2d702155f9341cac08a960f271e3ed5450740729))\r\n* Add DEBUG and LOG_LEVEL to valid env vars\r\n([#8094](https://github.com/AztecProtocol/aztec-packages/issues/8094))\r\n([70e61f9](https://github.com/AztecProtocol/aztec-packages/commit/70e61f973de063a972c726303f579ef34441d85f))\r\n* Add link to l1-artifacts\r\n([#7940](https://github.com/AztecProtocol/aztec-packages/issues/7940))\r\n([dcfd120](https://github.com/AztecProtocol/aztec-packages/commit/dcfd12019fbe8e443c5d162876c960a7062164af))\r\n* Add missing trait impls for integer types to stdlib\r\n(https://github.com/noir-lang/noir/pull/5738)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Allow comptime code to use break without also being `unconstrained`\r\n(https://github.com/noir-lang/noir/pull/5744)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* **avm:** Real bytes finalization\r\n([#8041](https://github.com/AztecProtocol/aztec-packages/issues/8041))\r\n([047461a](https://github.com/AztecProtocol/aztec-packages/commit/047461ae6bc5d6a7a4d05bba18cce0682ee75705))\r\n* **ci:** Correctly run bb tests with asserts\r\n([#7607](https://github.com/AztecProtocol/aztec-packages/issues/7607))\r\n([7b73f69](https://github.com/AztecProtocol/aztec-packages/commit/7b73f69126b8ae70aa7ade96e775cabce581358f))\r\n* Correctly constrain get header at\r\n([#7893](https://github.com/AztecProtocol/aztec-packages/issues/7893))\r\n([2ebba0d](https://github.com/AztecProtocol/aztec-packages/commit/2ebba0d90cab84eb1a2a7533f1a4656a1484e19a))\r\n* Deploy L1 rollup contract using salt if provided\r\n([#8074](https://github.com/AztecProtocol/aztec-packages/issues/8074))\r\n([1e8eddf](https://github.com/AztecProtocol/aztec-packages/commit/1e8eddf0eff73a05995c19a10a3d7494039193fe))\r\n* Flaky e2e_prover_node test\r\n([#8116](https://github.com/AztecProtocol/aztec-packages/issues/8116))\r\n([9d97bd4](https://github.com/AztecProtocol/aztec-packages/commit/9d97bd4b5a731aaa98b3b1e11374bd8ab400338d))\r\n* **frontend:** Continue type check if we are missing an unsafe block\r\n(https://github.com/noir-lang/noir/pull/5720)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Let LSP autocompletion work in more contexts\r\n(https://github.com/noir-lang/noir/pull/5719)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Port option & extracting correct namespaced options\r\n([#8097](https://github.com/AztecProtocol/aztec-packages/issues/8097))\r\n([e74c83e](https://github.com/AztecProtocol/aztec-packages/commit/e74c83e581380fa344d1dc1cd783beb1b2d11e0e))\r\n* Set prover node max pending jobs in tests\r\n([#8055](https://github.com/AztecProtocol/aztec-packages/issues/8055))\r\n([403c26f](https://github.com/AztecProtocol/aztec-packages/commit/403c26f3c8e28cf51388dc21d510b6cedaf095ba))\r\n* Stop WorldStrateSynchronizer in prover node\r\n([#8126](https://github.com/AztecProtocol/aztec-packages/issues/8126))\r\n([f724b07](https://github.com/AztecProtocol/aztec-packages/commit/f724b07d2e0603b33a2f195a71403caac56ed784))\r\n* Txe port and aztec start options\r\n([#8071](https://github.com/AztecProtocol/aztec-packages/issues/8071))\r\n([23778c5](https://github.com/AztecProtocol/aztec-packages/commit/23778c5a0ac4fe512cde3a4b66df65f588cad305))\r\n* Unconstrained fn mismatch is now a warning\r\n(https://github.com/noir-lang/noir/pull/5764)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Wallet fixes for devnet, testing and misc\r\n([#8058](https://github.com/AztecProtocol/aztec-packages/issues/8058))\r\n([15f3e8c](https://github.com/AztecProtocol/aztec-packages/commit/15f3e8c216571e1d60ace898e5a3d5fc13c19869))\r\n\r\n\r\n### Miscellaneous\r\n\r\n* Add Brillig loop bytecode size regression and update noir-gates-diff\r\nreport (https://github.com/noir-lang/noir/pull/5747)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Apply some new lints across workspace\r\n(https://github.com/noir-lang/noir/pull/5736)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* **avm:** Kernel trace and finalization\r\n([#8049](https://github.com/AztecProtocol/aztec-packages/issues/8049))\r\n([d7edd24](https://github.com/AztecProtocol/aztec-packages/commit/d7edd24e76a2ab87ac490c8c97f0c344190f646b))\r\n* **avm:** Separate alu finalization\r\n([#8069](https://github.com/AztecProtocol/aztec-packages/issues/8069))\r\n([e8a9eb4](https://github.com/AztecProtocol/aztec-packages/commit/e8a9eb4b809f582c0fa185a2193e0493fc579d98))\r\n* **bb:** IPA parallelization cleanup\r\n([#8088](https://github.com/AztecProtocol/aztec-packages/issues/8088))\r\n([9227fa9](https://github.com/AztecProtocol/aztec-packages/commit/9227fa9f25b1ef8342dbf694c5bb9d37a1b0226d))\r\n* **bb:** Simplify parallel_for_if_effective\r\n([#8079](https://github.com/AztecProtocol/aztec-packages/issues/8079))\r\n([5bff26b](https://github.com/AztecProtocol/aztec-packages/commit/5bff26b2f9aecb8298225d5abe72740fedd1f4e8))\r\n* **bb:** Small cleanup in protogalaxy prover\r\n([#8072](https://github.com/AztecProtocol/aztec-packages/issues/8072))\r\n([4cb5c83](https://github.com/AztecProtocol/aztec-packages/commit/4cb5c83174f55f046d7d37e4e6a4667556ac5907))\r\n* **ci:** Only show last 50 master cpp benches\r\n([#8075](https://github.com/AztecProtocol/aztec-packages/issues/8075))\r\n([96f35bc](https://github.com/AztecProtocol/aztec-packages/commit/96f35bcca3eb1f6dc8685fcec0abdd29faf8bc1a))\r\n* Clarify Field use (https://github.com/noir-lang/noir/pull/5740)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* CLI command to set latest block as proven\r\n([#7987](https://github.com/AztecProtocol/aztec-packages/issues/7987))\r\n([80eaf1d](https://github.com/AztecProtocol/aztec-packages/commit/80eaf1d482184019efd67b9a8be5d9c8729545fb))\r\n* Configuration for bot on various networks\r\n([#8063](https://github.com/AztecProtocol/aztec-packages/issues/8063))\r\n([453a096](https://github.com/AztecProtocol/aztec-packages/commit/453a096378df57b0280be9aa52697da434e1a457))\r\n* Count brillig opcodes in nargo info\r\n(https://github.com/noir-lang/noir/pull/5189)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Deduplication in Protogalaxy\r\n([#8067](https://github.com/AztecProtocol/aztec-packages/issues/8067))\r\n([a5cc3ba](https://github.com/AztecProtocol/aztec-packages/commit/a5cc3bab86711062d180993cf4a7412d1013aa48))\r\n* **docs:** Expanding solidity verifier chain list\r\n(https://github.com/noir-lang/noir/pull/5587)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Dont trail whitespace in vscode\r\n([#5661](https://github.com/AztecProtocol/aztec-packages/issues/5661))\r\n([7595d91](https://github.com/AztecProtocol/aztec-packages/commit/7595d91fb82871c31e379c21ad1ce880d5d001be))\r\n* Handle constant output for ec add opcode\r\n([#8108](https://github.com/AztecProtocol/aztec-packages/issues/8108))\r\n([2ee79d2](https://github.com/AztecProtocol/aztec-packages/commit/2ee79d28affa66ef3c9f73782182b6221e2e9d98))\r\n* Make spans non-optional on `UnresolvedType`\r\n(https://github.com/noir-lang/noir/pull/5773)\r\n([2d70215](https://github.com/AztecProtocol/aztec-packages/commit/2d702155f9341cac08a960f271e3ed5450740729))\r\n* Merge devnet fixes back to master\r\n([#8149](https://github.com/AztecProtocol/aztec-packages/issues/8149))\r\n([6be2183](https://github.com/AztecProtocol/aztec-packages/commit/6be21831764243ea42ef932aac3b79f20b483a40))\r\n* Merge devnet to master\r\n([#8044](https://github.com/AztecProtocol/aztec-packages/issues/8044))\r\n([f84950f](https://github.com/AztecProtocol/aztec-packages/commit/f84950fd2cd93533e1755722ad918c4087682b5d))\r\n* Merge Provernet back to master\r\n([#8070](https://github.com/AztecProtocol/aztec-packages/issues/8070))\r\n([82f3dc7](https://github.com/AztecProtocol/aztec-packages/commit/82f3dc7320e05878cbd55136f1d88f87f14b2468))\r\n* Merging `TokenWithRefunds` with `Token`\r\n([#8042](https://github.com/AztecProtocol/aztec-packages/issues/8042))\r\n([8b795eb](https://github.com/AztecProtocol/aztec-packages/commit/8b795ebcd20166e62dcf7bb90d0ed95cf7013fb7))\r\n* Modified devnet config\r\n([#8087](https://github.com/AztecProtocol/aztec-packages/issues/8087))\r\n([854ab45](https://github.com/AztecProtocol/aztec-packages/commit/854ab45f4a71dc4717a42a4d30dd66f4cd2b454a))\r\n* Nuking old registry contract\r\n([#8057](https://github.com/AztecProtocol/aztec-packages/issues/8057))\r\n([3bd08a8](https://github.com/AztecProtocol/aztec-packages/commit/3bd08a83d11e76111b027b99d6022f986ec34d7e)),\r\ncloses\r\n[#7955](https://github.com/AztecProtocol/aztec-packages/issues/7955)\r\n* Pedersen hash related cleanup in aztec.nr\r\n([#8009](https://github.com/AztecProtocol/aztec-packages/issues/8009))\r\n([3c4ac65](https://github.com/AztecProtocol/aztec-packages/commit/3c4ac65766c651e56fb7823c3d799e462bbb4d91))\r\n* Portal manager cli\r\n([#8047](https://github.com/AztecProtocol/aztec-packages/issues/8047))\r\n([618e251](https://github.com/AztecProtocol/aztec-packages/commit/618e2510d760e8749d1993f84f08fd7adb7683b2))\r\n* Proper portal setup for fees + test\r\n([#7944](https://github.com/AztecProtocol/aztec-packages/issues/7944))\r\n([9fec67e](https://github.com/AztecProtocol/aztec-packages/commit/9fec67e2cd2b5e3aa57e81a8bcadc38bbfaeb46d))\r\n* Public kernel\r\n([#8061](https://github.com/AztecProtocol/aztec-packages/issues/8061))\r\n([617a69c](https://github.com/AztecProtocol/aztec-packages/commit/617a69cefdd1f9c2466af052d86157f946743c05))\r\n* Refactor ACIR function IDs from raw integers to struct\r\n(https://github.com/noir-lang/noir/pull/5748)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Replace relative paths to noir-protocol-circuits\r\n([5ddf0e6](https://github.com/AztecProtocol/aztec-packages/commit/5ddf0e6bcdf93222a542af0321550d32ca62a498))\r\n* Replace relative paths to noir-protocol-circuits\r\n([ca77c17](https://github.com/AztecProtocol/aztec-packages/commit/ca77c1782af5088cadf280a834e9484a3ff87115))\r\n* Replace relative paths to noir-protocol-circuits\r\n([fe73c93](https://github.com/AztecProtocol/aztec-packages/commit/fe73c93b69a5024ae6f6ad690535b7078814a778))\r\n* Replace relative paths to noir-protocol-circuits\r\n([576bc2f](https://github.com/AztecProtocol/aztec-packages/commit/576bc2f90607c171e51ff76ebc979adf7c88faad))\r\n* Replace relative paths to noir-protocol-circuits\r\n([0d05d6b](https://github.com/AztecProtocol/aztec-packages/commit/0d05d6b75772cb37a3e62e9ca6936aabda346393))\r\n* Simplify sequencer and l1 communication\r\n([#7989](https://github.com/AztecProtocol/aztec-packages/issues/7989))\r\n([cee4eba](https://github.com/AztecProtocol/aztec-packages/commit/cee4ebaa9e53247d94882689d065c16a4c8e5bac))\r\n* Split LSP completion.rs into several files\r\n(https://github.com/noir-lang/noir/pull/5723)\r\n([0379462](https://github.com/AztecProtocol/aztec-packages/commit/03794626859b3b3ad898e31855265de62d73620d))\r\n* Split up stdlib/recursion\r\n([#8054](https://github.com/AztecProtocol/aztec-packages/issues/8054))\r\n([ec03e40](https://github.com/AztecProtocol/aztec-packages/commit/ec03e403cc8bfa1f40fb05fe93eadf9ed63b9b2f))\r\n* **sync-noir:** Fix modify/delete conflicts automatically\r\n([#8090](https://github.com/AztecProtocol/aztec-packages/issues/8090))\r\n([a09627c](https://github.com/AztecProtocol/aztec-packages/commit/a09627c78d97917443349a21d953be89bcb32eef))\r\n* Use decider verifier in ultra verifier\r\n([#8115](https://github.com/AztecProtocol/aztec-packages/issues/8115))\r\n([6c5ab2b](https://github.com/AztecProtocol/aztec-packages/commit/6c5ab2b373086cb2842ee848329e282b463b3272))\r\n\r\n\r\n### Documentation\r\n\r\n* Fix typo overview.md\r\n([#7908](https://github.com/AztecProtocol/aztec-packages/issues/7908))\r\n([3749211](https://github.com/AztecProtocol/aztec-packages/commit/37492116a70d6f26b24d53c90858888da3c2d8f4))\r\n* Update installation info for bb and noir\r\n([#8119](https://github.com/AztecProtocol/aztec-packages/issues/8119))\r\n([a744321](https://github.com/AztecProtocol/aztec-packages/commit/a7443216dfaa7b2731911e2320b2c1c1a720e8e8))\r\n</details>\r\n\r\n<details><summary>barretenberg: 0.50.0</summary>\r\n\r\n##\r\n[0.50.0](https://github.com/AztecProtocol/aztec-packages/compare/barretenberg-v0.49.2...barretenberg-v0.50.0)\r\n(2024-08-22)\r\n\r\n\r\n### Features\r\n\r\n* Add a prover-node to the proving e2e tests\r\n([#7952](https://github.com/AztecProtocol/aztec-packages/issues/7952))\r\n([ec5a5fb](https://github.com/AztecProtocol/aztec-packages/commit/ec5a5fb8fd9c344bcb0d33a4e9f07300d3317bf2))\r\n* Automate verify_honk_proof input generation\r\n([#8092](https://github.com/AztecProtocol/aztec-packages/issues/8092))\r\n([bf38d61](https://github.com/AztecProtocol/aztec-packages/commit/bf38d61364a0fb55ae79ef09b05df2533f3a6f17))\r\n* **avm:** Enable zeromorph in AVM verification\r\n([#8111](https://github.com/AztecProtocol/aztec-packages/issues/8111))\r\n([b1f9fb6](https://github.com/AztecProtocol/aztec-packages/commit/b1f9fb6a4986fdfa10207ec89f8b23e14d466073)),\r\ncloses\r\n[#4944](https://github.com/AztecProtocol/aztec-packages/issues/4944)\r\n* Native Merkle Trees\r\n([#7037](https://github.com/AztecProtocol/aztec-packages/issues/7037))\r\n([8a1032e](https://github.com/AztecProtocol/aztec-packages/commit/8a1032ec4738e9b592b45500c1cf47c0e1820ad3))\r\n* Oink recursive verifier\r\n([#8121](https://github.com/AztecProtocol/aztec-packages/issues/8121))\r\n([580708a](https://github.com/AztecProtocol/aztec-packages/commit/580708a1f7c18338888d83e749a0740a322c86e0))\r\n* Passes copy_cycles by const reference to avoid copying\r\n([#8051](https://github.com/AztecProtocol/aztec-packages/issues/8051))\r\n([495d363](https://github.com/AztecProtocol/aztec-packages/commit/495d363fdf0b89dfeb228c200824fc5f9af7bb19))\r\n* PG recursive verifier constructors based on stdlib inputs\r\n([#8052](https://github.com/AztecProtocol/aztec-packages/issues/8052))\r\n([4c568b0](https://github.com/AztecProtocol/aztec-packages/commit/4c568b0545b022a536a6eb4199be817593e6b317))\r\n* Poseidon2 gates for Ultra arithmetisation\r\n([#7494](https://github.com/AztecProtocol/aztec-packages/issues/7494))\r\n([d86577c](https://github.com/AztecProtocol/aztec-packages/commit/d86577c2e36c5a077a859058602f455421ed93e1))\r\n* Some fixes and cleanup in PG recursive verifier\r\n([#8053](https://github.com/AztecProtocol/aztec-packages/issues/8053))\r\n([5f2a9bd](https://github.com/AztecProtocol/aztec-packages/commit/5f2a9bd3d968be491a12c63f812aa8d7e3bb585e))\r\n* Unify all acir recursion constraints based on RecursionConstraint and\r\nproof_type\r\n([#7993](https://github.com/AztecProtocol/aztec-packages/issues/7993))\r\n([7cb39bc](https://github.com/AztecProtocol/aztec-packages/commit/7cb39bceddcb9ec4142b86087a7af58d547ddfaa))\r\n* Zk sumcheck\r\n([#7517](https://github.com/AztecProtocol/aztec-packages/issues/7517))\r\n([0e9a530](https://github.com/AztecProtocol/aztec-packages/commit/0e9a530cfd83f375f6b3a1bb9fb67cf562847f9b))\r\n\r\n\r\n### Bug Fixes\r\n\r\n* **avm:** Real bytes finalization\r\n([#8041](https://github.com/AztecProtocol/aztec-packages/issues/8041))\r\n([047461a](https://github.com/AztecProtocol/aztec-packages/commit/047461ae6bc5d6a7a4d05bba18cce0682ee75705))\r\n* **ci:** Correctly run bb tests with asserts\r\n([#7607](https://github.com/AztecProtocol/aztec-packages/issues/7607))\r\n([7b73f69](https://github.com/AztecProtocol/aztec-packages/commit/7b73f69126b8ae70aa7ade96e775cabce581358f))\r\n\r\n\r\n### Miscellaneous\r\n\r\n* **avm:** Kernel trace and finalization\r\n([#8049](https://github.com/AztecProtocol/aztec-packages/issues/8049))\r\n([d7edd24](https://github.com/AztecProtocol/aztec-packages/commit/d7edd24e76a2ab87ac490c8c97f0c344190f646b))\r\n* **avm:** Separate alu finalization\r\n([#8069](https://github.com/AztecProtocol/aztec-packages/issues/8069))\r\n([e8a9eb4](https://github.com/AztecProtocol/aztec-packages/commit/e8a9eb4b809f582c0fa185a2193e0493fc579d98))\r\n* **bb:** IPA parallelization cleanup\r\n([#8088](https://github.com/AztecProtocol/aztec-packages/issues/8088))\r\n([9227fa9](https://github.com/AztecProtocol/aztec-packages/commit/9227fa9f25b1ef8342dbf694c5bb9d37a1b0226d))\r\n* **bb:** Simplify parallel_for_if_effective\r\n([#8079](https://github.com/AztecProtocol/aztec-packages/issues/8079))\r\n([5bff26b](https://github.com/AztecProtocol/aztec-packages/commit/5bff26b2f9aecb8298225d5abe72740fedd1f4e8))\r\n* **bb:** Small cleanup in protogalaxy prover\r\n([#8072](https://github.com/AztecProtocol/aztec-packages/issues/8072))\r\n([4cb5c83](https://github.com/AztecProtocol/aztec-packages/commit/4cb5c83174f55f046d7d37e4e6a4667556ac5907))\r\n* Deduplication in Protogalaxy\r\n([#8067](https://github.com/AztecProtocol/aztec-packages/issues/8067))\r\n([a5cc3ba](https://github.com/AztecProtocol/aztec-packages/commit/a5cc3bab86711062d180993cf4a7412d1013aa48))\r\n* Handle constant output for ec add opcode\r\n([#8108](https://github.com/AztecProtocol/aztec-packages/issues/8108))\r\n([2ee79d2](https://github.com/AztecProtocol/aztec-packages/commit/2ee79d28affa66ef3c9f73782182b6221e2e9d98))\r\n* Merge devnet fixes back to master\r\n([#8149](https://github.com/AztecProtocol/aztec-packages/issues/8149))\r\n([6be2183](https://github.com/AztecProtocol/aztec-packages/commit/6be21831764243ea42ef932aac3b79f20b483a40))\r\n* Split up stdlib/recursion\r\n([#8054](https://github.com/AztecProtocol/aztec-packages/issues/8054))\r\n([ec03e40](https://github.com/AztecProtocol/aztec-packages/commit/ec03e403cc8bfa1f40fb05fe93eadf9ed63b9b2f))\r\n* Use decider verifier in ultra verifier\r\n([#8115](https://github.com/AztecProtocol/aztec-packages/issues/8115))\r\n([6c5ab2b](https://github.com/AztecProtocol/aztec-packages/commit/6c5ab2b373086cb2842ee848329e282b463b3272))\r\n\r\n\r\n### Documentation\r\n\r\n* Update installation info for bb and noir\r\n([#8119](https://github.com/AztecProtocol/aztec-packages/issues/8119))\r\n([a744321](https://github.com/AztecProtocol/aztec-packages/commit/a7443216dfaa7b2731911e2320b2c1c1a720e8e8))\r\n</details>\r\n\r\n---\r\nThis PR was generated with [Release\r\nPlease](https://github.com/googleapis/release-please). See\r\n[documentation](https://github.com/googleapis/release-please#release-please).",
          "timestamp": "2024-08-22T16:15:35Z",
          "tree_id": "22babfe1987c278694df6b718830ef5cb32e6bd4",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/0b5048048b68514571a9113465eda564c8f1ed96"
        },
        "date": 1724344249799,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13666.856853000012,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10460.843931 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5075.994847000004,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4703.931839 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 40256.444526,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 40256445000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14672.071242999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14672072000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3753921288,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3753921288 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 209190637,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 209190637 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3224434633,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3224434633 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173309427,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173309427 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lucasxia01@gmail.com",
            "name": "Lucas Xia",
            "username": "lucasxia01"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32a04c1e14564192df1581829d8f0ccb4a072769",
          "message": "feat: Free instances and circuits earlier to reduce max memory usage (#8118)\n\nThis PR reduces max memory by roughly a third by deleting a\r\nprover_instance member variable in client_ivc. Before, we were storing\r\nthis prover_instance, which meant that when we accumulate a third\r\ncircuit, we were storing three instances at the same time - the\r\naccumulator, the old instance, and the new instance. It also adjusts the\r\ntest (ClientIVCTests.BasicThree) to only store the builder for when it's\r\nneeded.\r\n\r\nThis is the original memory graph when running\r\nClientIVCTests.BasicThree, which accumulates three circuits of size 2^17\r\n(?).\r\n<img width=\"735\" alt=\"Before\"\r\nsrc=\"https://github.com/user-attachments/assets/66bed03b-3692-4bb2-b176-b6772bdcb27e\">\r\n\r\nAfter freeing the Builder after constructing the instance from it, and\r\nafter freeing the instance after folding it into the accumulator, our\r\nmemory graph looks like.\r\n<img width=\"700\" alt=\"After\"\r\nsrc=\"https://github.com/user-attachments/assets/13f4432c-cfc3-4095-aa6d-908a244aa6b5\">\r\n\r\nYou can see that the peak memory goes from 1216MB to 774MB, and that\r\nwe're no longer storing 3 instances worth of data at one time.",
          "timestamp": "2024-08-22T13:47:51-04:00",
          "tree_id": "f1e8de78798d3508864ba838c19617cb8d608f62",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/32a04c1e14564192df1581829d8f0ccb4a072769"
        },
        "date": 1724349799776,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13718.26680800001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10607.756371000001 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5102.3281669999815,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4592.5226920000005 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39919.471173,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39919471000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14658.943422000002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14658943000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3760003409,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3760003409 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 208016375,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 208016375 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3065669492,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3065669492 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173992757,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173992757 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lucasxia01@gmail.com",
            "name": "Lucas Xia",
            "username": "lucasxia01"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c3dddf83941fd7411f2faefff43552aa174e1401",
          "message": "feat: share the commitment key between instances to reduce mem (#8154)\n\nContinuation of\r\nhttps://github.com/AztecProtocol/aztec-packages/pull/8118.\r\n\r\nIn AztecIVC (or ClientIVC), when we have multiple instances, we create a\r\ncommitment key for each one. However, since each of these instances are\r\nthe same size, there's no need to create a new one for each one.\r\n\r\nWhen we're constructing an instance beyond the first one, we can reuse\r\nthe same commitment key from the AztecIVC accumulator, which saves\r\n~123MB of memory for 2^17 circuits, a reduction of 15.6%.\r\n<img width=\"1045\" alt=\"After\"\r\nsrc=\"https://github.com/user-attachments/assets/032cf442-5c68-4c23-b4d2-16ab8c6812b7\">\r\n\r\n\r\nAfter the change, we cut down max memory by 123MB.\r\n<img width=\"969\" alt=\"Before\"\r\nsrc=\"https://github.com/user-attachments/assets/8e374ab5-8a4b-4395-964e-35e49fe8920a\">",
          "timestamp": "2024-08-22T21:41:18Z",
          "tree_id": "d49386cb90db1a839ad8687b3559fe73e65c2f77",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/c3dddf83941fd7411f2faefff43552aa174e1401"
        },
        "date": 1724363575621,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13527.57957,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10337.787540000001 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5134.989187999991,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4703.179805 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39685.25907100001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39685259000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14643.226008,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14643226000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3784877519,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3784877519 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 210666309,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 210666309 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3118162547,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3118162547 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 174714749,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 174714749 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49558828+AztecBot@users.noreply.github.com",
            "name": "Aztec Bot",
            "username": "AztecBot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5ac57884828af8fd0b2da7121f937727ee059ba0",
          "message": "chore(master): Release 0.50.1 (#8151)\n\n:robot: I have created a release *beep* *boop*\r\n---\r\n\r\n\r\n<details><summary>aztec-package: 0.50.1</summary>\r\n\r\n##\r\n[0.50.1](https://github.com/AztecProtocol/aztec-packages/compare/aztec-package-v0.50.0...aztec-package-v0.50.1)\r\n(2024-08-23)\r\n\r\n\r\n### Miscellaneous\r\n\r\n* **aztec-package:** Synchronize aztec-packages versions\r\n</details>\r\n\r\n<details><summary>barretenberg.js: 0.50.1</summary>\r\n\r\n##\r\n[0.50.1](https://github.com/AztecProtocol/aztec-packages/compare/barretenberg.js-v0.50.0...barretenberg.js-v0.50.1)\r\n(2024-08-23)\r\n\r\n\r\n### Miscellaneous\r\n\r\n* **barretenberg.js:** Synchronize aztec-packages versions\r\n</details>\r\n\r\n<details><summary>aztec-packages: 0.50.1</summary>\r\n\r\n##\r\n[0.50.1](https://github.com/AztecProtocol/aztec-packages/compare/aztec-packages-v0.50.0...aztec-packages-v0.50.1)\r\n(2024-08-23)\r\n\r\n\r\n### Features\r\n\r\n* Free instances and circuits earlier to reduce max memory usage\r\n([#8118](https://github.com/AztecProtocol/aztec-packages/issues/8118))\r\n([32a04c1](https://github.com/AztecProtocol/aztec-packages/commit/32a04c1e14564192df1581829d8f0ccb4a072769))\r\n* Prepare protocol circuits for batch rollup\r\n([#7727](https://github.com/AztecProtocol/aztec-packages/issues/7727))\r\n([a126e22](https://github.com/AztecProtocol/aztec-packages/commit/a126e220a1a6b5265926f5bbb91b7eb79102f0f3))\r\n* Share the commitment key between instances to reduce mem\r\n([#8154](https://github.com/AztecProtocol/aztec-packages/issues/8154))\r\n([c3dddf8](https://github.com/AztecProtocol/aztec-packages/commit/c3dddf83941fd7411f2faefff43552aa174e1401))\r\n\r\n\r\n### Bug Fixes\r\n\r\n* Cli-wallet manifest\r\n([#8156](https://github.com/AztecProtocol/aztec-packages/issues/8156))\r\n([2ffcda3](https://github.com/AztecProtocol/aztec-packages/commit/2ffcda319b6b185c2ce05361149750a8abfdae0d))\r\n\r\n\r\n### Miscellaneous\r\n\r\n* Replace relative paths to noir-protocol-circuits\r\n([5372ac4](https://github.com/AztecProtocol/aztec-packages/commit/5372ac44107eac4a9b216ffa588b69dac4e41c76))\r\n* Requiring only 1 sig from user\r\n([#8146](https://github.com/AztecProtocol/aztec-packages/issues/8146))\r\n([f0b564b](https://github.com/AztecProtocol/aztec-packages/commit/f0b564be119fd0625032abf55d040a186b1cb380))\r\n</details>\r\n\r\n<details><summary>barretenberg: 0.50.1</summary>\r\n\r\n##\r\n[0.50.1](https://github.com/AztecProtocol/aztec-packages/compare/barretenberg-v0.50.0...barretenberg-v0.50.1)\r\n(2024-08-23)\r\n\r\n\r\n### Features\r\n\r\n* Free instances and circuits earlier to reduce max memory usage\r\n([#8118](https://github.com/AztecProtocol/aztec-packages/issues/8118))\r\n([32a04c1](https://github.com/AztecProtocol/aztec-packages/commit/32a04c1e14564192df1581829d8f0ccb4a072769))\r\n* Share the commitment key between instances to reduce mem\r\n([#8154](https://github.com/AztecProtocol/aztec-packages/issues/8154))\r\n([c3dddf8](https://github.com/AztecProtocol/aztec-packages/commit/c3dddf83941fd7411f2faefff43552aa174e1401))\r\n</details>\r\n\r\n---\r\nThis PR was generated with [Release\r\nPlease](https://github.com/googleapis/release-please). See\r\n[documentation](https://github.com/googleapis/release-please#release-please).",
          "timestamp": "2024-08-23T10:25:50+01:00",
          "tree_id": "1a7a163d575c8a81ea0817df3c5723558102373b",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/5ac57884828af8fd0b2da7121f937727ee059ba0"
        },
        "date": 1724405957330,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13554.103808000007,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10389.01234 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5079.755617999993,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4667.523031999999 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39870.69915000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39870701000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14779.831767000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14779832000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3729705409,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3729705409 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 207885837,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 207885837 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3102662291,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3102662291 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173525352,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173525352 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "committer": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "id": "93b1914edd1fcaf582e9f47645f7188f334fb21d",
          "message": "refactor(avm): extract rng chk from gas and mem",
          "timestamp": "2024-08-23T14:49:14Z",
          "url": "https://github.com/AztecProtocol/aztec-packages/pull/8164/commits/93b1914edd1fcaf582e9f47645f7188f334fb21d"
        },
        "date": 1724429284301,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13289.292838000023,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10092.118189 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4919.573163999985,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4511.477937 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39764.283927,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39764283000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14470.127863,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14470128000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3761111182,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3761111182 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 209496581,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 209496581 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3054100960,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3054100960 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 172886224,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 172886224 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "committer": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "id": "ed96de375d3ceaf9aa8f031608b00d6987cae6cb",
          "message": "feat(avm): integrate new range and cmp gadgets",
          "timestamp": "2024-08-23T14:49:14Z",
          "url": "https://github.com/AztecProtocol/aztec-packages/pull/8165/commits/ed96de375d3ceaf9aa8f031608b00d6987cae6cb"
        },
        "date": 1724429458952,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13309.832764999981,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10129.886821 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4915.805544999997,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4492.878343 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39853.879596000006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39853880000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14473.728753,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14473729000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3763474729,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3763474729 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 209883959,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 209883959 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3186759814,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3186759814 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173108272,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173108272 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98505400+ledwards2225@users.noreply.github.com",
            "name": "ledwards2225",
            "username": "ledwards2225"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e46b459e67c090a4ffe496880e47c05855f9df4",
          "message": "chore: Oink takes directly populates an instance (#8170)\n\nOink can be thought of as an \"instance completer\", i.e. when it is done\r\nrunning all of the data that comprises an instance has been created. Up\r\nuntil now the model was to pass oink a reference to a proving key. It\r\nwould \"complete\" the proving key in place by populating some witness\r\npolynomials then explicitly return the rest of the data comprising an\r\ninstance (relation_parameters etc.) in a custom struct like\r\n`OinkOutput`. The data from this output would then be std::move'd into\r\nan instance existing in the external scope.\r\n\r\nThis PR simplifies this model by simply passing oink an instance\r\n(ProverInstance or VerifierInstance) which is \"completed\" in place\r\nthroughout oink. IMO this is cleaner and clearer than the half-and-half\r\napproach of completing the proving key in place and explicitly returning\r\nother data. It also removes a ton of boilerplate for moving data in and\r\nout of an instance. I don't love the \"input parameter treated as output\r\nparameter approach\" but unless we refactor Honk/PG to construct\r\nproving_key instead of an instance, I think this is preferred. (In that\r\ncase oink could take a proving_key and return a completed instance).",
          "timestamp": "2024-08-23T15:39:16-07:00",
          "tree_id": "d26f784a89925ecf358f10a5535d1dd2a3cdcfc6",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/6e46b459e67c090a4ffe496880e47c05855f9df4"
        },
        "date": 1724453612798,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13531.287574000004,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10354.083299999998 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5086.065730000016,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4695.957214 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39769.02871200001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39769029000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14631.225642000003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14631226000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3767305192,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3767305192 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 210633197,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 210633197 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3078762684,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3078762684 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173344248,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173344248 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sirasistant@gmail.com",
            "name": "Álvaro Rodríguez",
            "username": "sirasistant"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8baeffd1239a20ca3cbc4071f7d7da974eff709d",
          "message": "feat: optimize to_radix (#8073)\n\n- Change the ToRadix gadget/blackbox to emit u8 limbs instead of\r\nfields\r\n- Modify the toradix blackbox in brillig with an output_bits flag, to\r\nemit u1 limbs\r\n- No casting is needed in either case (u8 or u1) saving some emitted\r\nbrillig opcodes\r\n- The AVM transpiler, then ignores the output_bits flag, since it'll\r\noutput u8s which is what the AVM expects for bits",
          "timestamp": "2024-08-26T12:21:37+02:00",
          "tree_id": "75f08440826564eaf86af17f2e7ca85c2c5bd032",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/8baeffd1239a20ca3cbc4071f7d7da974eff709d"
        },
        "date": 1724668610820,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13596.35513699999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10504.463456 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5137.794686999996,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4715.277559999999 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39870.96331399999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39870964000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 15067.200397,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 15067199000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3781615339,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3781615339 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 209733474,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 209733474 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3101053176,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3101053176 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173367340,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173367340 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sirasistant@gmail.com",
            "name": "Álvaro Rodríguez",
            "username": "sirasistant"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0263b4c8961a751961b0b9ec98b441e598d1ca4e",
          "message": "feat: Added indirect const instruction (#8065)\n\nAdds indirect const since the AVM supports it, and uses it to reduce a\r\nbunch bytecode sizes when initializing constant arrays.",
          "timestamp": "2024-08-26T15:07:52+02:00",
          "tree_id": "b59e4084ce5939b634265c87dcbb09ce4d7b5251",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/0263b4c8961a751961b0b9ec98b441e598d1ca4e"
        },
        "date": 1724678406646,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13525.035791999982,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10296.161045 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5107.130712,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4683.926792 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39644.855502000006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39644856000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14815.708782000002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14815708000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3745650430,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3745650430 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 207404831,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 207404831 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3066983663,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3066983663 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 172869665,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 172869665 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "codygunton@gmail.com",
            "name": "Cody Gunton",
            "username": "codygunton"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7395b95672e94318de695dc0fc71863ef31b2e30",
          "message": "refactor(Protogalaxy): Isolate some state and clarify skipped zero computation (#8173)\n\nSome steps toward clarifying state during Protogalaxy proof\r\nconstruction:\r\n - Move accumulators into the class that contains state.\r\n- Reduce size of Prover header. Move internal functions into a purely\r\nstatic class. This accounts for most of the diff.\r\n- Clarify the known-zero-value while removing loose coupling of template\r\nparameters.\r\n\r\nThe next step will be to reduce the amount of state in ProverInstances.",
          "timestamp": "2024-08-26T13:35:00-04:00",
          "tree_id": "549b36c902a1ff256f4020e710e3c9981483d2fb",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/7395b95672e94318de695dc0fc71863ef31b2e30"
        },
        "date": 1724694846213,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13583.453192000008,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10239.822048999999 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5104.207797000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4723.826975 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39787.214678000004,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39787215000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14751.218413,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14751218000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3766951787,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3766951787 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 208054914,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 208054914 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3069267900,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3069267900 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173003019,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173003019 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "codygunton@gmail.com",
            "name": "Cody Gunton",
            "username": "codygunton"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd5d2dfe7150fa9bd64945aa6c1a66dfa4be1536",
          "message": "refactor(Protogalaxy): Move state out of Instances (#8177)\n\nThe main goal of this PR, which is achieved, is to move all move all\r\ndata except the `_data` array out of `ProverInstances`. I do additional\r\ncleanup:\r\n- Use constructors for pow polys rather than a `void` type function to\r\nupdate the state.\r\n- Delete commented out higher folding test, which I had been maintaining\r\nin commented out form\r\n - Move `ProtogalaxyProofConstructionState` def into `ProtogalaxyProver`\r\n- More idiomatic folding of relation parameters (loop over a zip of\r\ngetters)",
          "timestamp": "2024-08-26T15:21:02-04:00",
          "tree_id": "c6e4f60ee5a89ddf8df26e9298797673cb151dfc",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/cd5d2dfe7150fa9bd64945aa6c1a66dfa4be1536"
        },
        "date": 1724700825331,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13493.079619000015,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10322.377991000001 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5076.528722999996,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4678.360789000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39592.29461900001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39592295000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14609.373649999998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14609375000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3719550373,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3719550373 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 209812343,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 209812343 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3042896287,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3042896287 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173490579,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173490579 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98505400+ledwards2225@users.noreply.github.com",
            "name": "ledwards2225",
            "username": "ledwards2225"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3540f8ea961b0001ec9f497e2ff4d00c894ce6e4",
          "message": "feat: Use oink in IVC (#8161)\n\nPrior to this work the first call to IVC accumulate initialized an\r\nincomplete (un-oinked) instance for the circuit. The second round then\r\nexecuted folding on two incomplete instances, requiring a call to oink\r\nfor each. Subsequent folding rounds only required a single oink since\r\nthe instance being folded into is a \"complete\" accumulator. This pattern\r\ncreates additional special case handling in IVC/databus. It also results\r\nin the first folding proof having a complicated structure (two internal\r\noink proofs) which makes acir constraint construction and the\r\ncorresponding proof surgery quite complicated. (The current noir\r\nframework can't even support this since recursive verification of the\r\nfirst fold proof involves a single proof but two verification keys).\r\n\r\nWith the present work, the first round of accumulation now uses oink to\r\ncomplete the instance and create an oink proof. The first kernel\r\n(instead of doing no recursive work) now does a single recursive oink\r\nverification. This allows for all subsequent rounds to have identical\r\nstructure - they fold two instances where only the new one is incomplete\r\nand thus only one oink proof is contained in the fold proof. It also\r\nallows every recursive verification (there are now two types: oink and\r\nPG) to be associated with a single proof and a single verification key,\r\nin line with how recursion is currently specified from noir.\r\n\r\nNote: This change also simplifies the databus consistency checks since\r\nthere is no longer any need to treat the first round of folding as a\r\nspecial case.",
          "timestamp": "2024-08-26T21:37:36Z",
          "tree_id": "fe463b80bac30dd5010ce94058bf174ae9c80a8a",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/3540f8ea961b0001ec9f497e2ff4d00c894ce6e4"
        },
        "date": 1724709236121,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13514.988920000007,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10372.168873999997 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5141.761798000019,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4738.8083910000005 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39562.933271,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39562933000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14761.700784999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14761701000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3773080067,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3773080067 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 208777462,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 208777462 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3053206641,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3053206641 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173073875,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173073875 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fcarreiro@users.noreply.github.com",
            "name": "Facundo",
            "username": "fcarreiro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47e83fa680f46b12cd65c26475908987f97fff4d",
          "message": "fix(bb): eliminate recursion in accumulate* (#8205)\n\nJean is working on the AVM recursive verifier and he found that these\nfunctions were executed recursively (the compiler was indeed generating\nrecursive calls) and causing a stack overflow. This fixes that.\n* ~~Also fixed `accumulate_relation_evaluations_without_skipping` which\nwas only not skipping the first relation.~~ Tests fail with the fix,\nI've added a comment.\n* I also made some params `const&`. IIUC they were being copied before\nwhich can be massive for the type `AllValues`. Not sure about that but\nyou might want to check the callers, etc.",
          "timestamp": "2024-08-27T14:00:30+01:00",
          "tree_id": "48228f7a215f4460e1d28bcd247adeca1c73f09d",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/47e83fa680f46b12cd65c26475908987f97fff4d"
        },
        "date": 1724764280203,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13497.53438000002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10433.232167000002 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5095.946416000004,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4660.768961000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39514.393355,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39514393000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14675.655707,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14675655000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3780309344,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3780309344 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 207605461,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 207605461 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3067587446,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3067587446 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173312509,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173312509 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49558828+AztecBot@users.noreply.github.com",
            "name": "Aztec Bot",
            "username": "AztecBot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a7887d738fb923408ded9ffb8d7ab381016994e6",
          "message": "chore(master): Release 0.51.0 (#8158)",
          "timestamp": "2024-08-27T13:53:22Z",
          "tree_id": "f6901c14bac72714db57b6423efcd39aea22f92b",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/a7887d738fb923408ded9ffb8d7ab381016994e6"
        },
        "date": 1724768584664,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13484.208531000007,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10290.779784 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5101.416301,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4682.595083 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39593.35877900001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39593359000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14639.834369999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14639836000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3799302811,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3799302811 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 209454290,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 209454290 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3111814716,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3111814716 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 172143648,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 172143648 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fcarreiro@users.noreply.github.com",
            "name": "Facundo",
            "username": "fcarreiro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55b6ba28938a8d89a4255607a61243cf13391665",
          "message": "fix(bb-prover): create structure for AVM vk (#8233)\n\nApologies for duplicating code! I tried putting a generic on the \"base\"\nclasses, but (1) generics don't play well with static methods (e.g.,\nfromBuffer) and (2) you still need to pass the value for the VK size (on\ntop of the type). I think most of this duplication can be avoided if you\njust accept some type unsafety and save things as `Fr[]` instead of\ntuples with size.\n\nPS: There might be still work to do to align the \"num public inputs\" etc\nindices, and the vk hash.",
          "timestamp": "2024-08-28T15:56:51+01:00",
          "tree_id": "afac2b8273e0318a5a2142c575f8d5111494a7f4",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/55b6ba28938a8d89a4255607a61243cf13391665"
        },
        "date": 1724857892865,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13644.821774000007,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10694.891794 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5233.974395000004,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4814.628248 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39821.008731,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39821009000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14779.256242000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14779256000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3807274593,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3807274593 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 210597651,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 210597651 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3112539309,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3112539309 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 174149039,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 174149039 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98505400+ledwards2225@users.noreply.github.com",
            "name": "ledwards2225",
            "username": "ledwards2225"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "10d7edd3f1ba6d0e113efd2e2bf2d01809ef43d4",
          "message": "feat: proof surgery class (#8236)\n\nAdds a `ProofSurgeon` class that manages all proof surgery, e.g.\r\nsplitting public inputs out of proof for acir and reconstructing again\r\nfor bberg. Simplifies things quite a bit in the process.",
          "timestamp": "2024-08-28T14:13:48-07:00",
          "tree_id": "85ecbdbefb76feb4fc2897a0036853951f8e247f",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/10d7edd3f1ba6d0e113efd2e2bf2d01809ef43d4"
        },
        "date": 1724880933177,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13438.997488000012,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10193.941557999999 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5090.167473000009,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4658.544515999999 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39694.010487,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39694011000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14611.353134,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14611352000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3772471015,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3772471015 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 209251901,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 209251901 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3066250897,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3066250897 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 172553327,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 172553327 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adam.domurad@gmail.com",
            "name": "ludamad",
            "username": "ludamad"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac54f5ce82ac9ca51e35390b782c7da26d3b00da",
          "message": "fix(bb): mac build (#8255)",
          "timestamp": "2024-08-29T01:34:08+01:00",
          "tree_id": "441bfdebba7fbaea6d79fcab1f90e0fe9f5f40da",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/ac54f5ce82ac9ca51e35390b782c7da26d3b00da"
        },
        "date": 1724893246087,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13726.291202999988,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10561.954965 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5313.71356199999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4888.807434000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 40167.21280699999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 40167213000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 15166.263861000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 15166263000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3800921463,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3800921463 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 214312673,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 214312673 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3144035472,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3144035472 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 176657224,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 176657224 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47281315+guipublic@users.noreply.github.com",
            "name": "guipublic",
            "username": "guipublic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0653ba5cc8283fade1c9f8fd534717833cc18e0a",
          "message": "fix: handle constant output for sha256 (#8251)\n\nSmall PR to enable constant outputs support for sha256. This is required\r\nin order to enable constant inputs for sha256.\r\nI expected that constant inputs sha256 to be folded in Noir but we may\r\nbe missing some cases.",
          "timestamp": "2024-08-29T11:28:59+02:00",
          "tree_id": "839b0424d7c23f39bcac0de08ce4d38588387eac",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/0653ba5cc8283fade1c9f8fd534717833cc18e0a"
        },
        "date": 1724924650413,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13540.50203,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10349.916316 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5133.519778999997,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4765.987133 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39968.78757700001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39968787000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14735.276866,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14735277000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3780129175,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3780129175 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 208308511,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 208308511 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3100384190,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3100384190 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 172941020,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 172941020 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fcarreiro@users.noreply.github.com",
            "name": "Facundo",
            "username": "fcarreiro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bdd9b0677089bc54c461beddafc60db95e2456c2",
          "message": "feat(avm): 1-slot sload/sstore (nr, ts) (#8264)\n\nAs agreed with Zac,\n* Changes the AVM opcodes to work 1-slot at a time (this is easier to handle in the circuit).\n* Bubbles up changes to aztec nr. However, this is internal to the PublicContext only, the exported interface still takes N slots/fields.\n\nOn the CPP side, I hardcoded sizes to 1. Work needs to be done to simplify things now that we can.",
          "timestamp": "2024-08-29T16:29:40+01:00",
          "tree_id": "4649e5a9cacdae20b2a49f0941770c50a05e4f0b",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/bdd9b0677089bc54c461beddafc60db95e2456c2"
        },
        "date": 1724946620358,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13502.585730999983,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10292.982155000003 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5136.329669000005,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4757.382818 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39735.570803999995,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39735571000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14710.145868000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14710146000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3790805228,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3790805228 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 208324931,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 208324931 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3061374098,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3061374098 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 172504549,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 172504549 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adam.domurad@gmail.com",
            "name": "ludamad",
            "username": "ludamad"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2323cd53486d3a8a063685094ad51aa98412c4a5",
          "message": "refactor(bb): use std::span in pippenger for scalars (#8269)\n\nRefactoring stepping stone. Behaves identically\r\n\r\nNext step would be to use this to allow accessing power of 2 quantities\r\nabove the std::span size() (with a different wrapper class) so that\r\nnon-powers-of-2 can be passed directly to pippenger\r\n\r\nWe recently anted to save memory on polynomials. The idea is that\r\ninstead of rounding up to a power of 2 to make pippenger fast (at cost\r\nof memory), we will make a wrapper class that happily pretends it has\r\nT{} (i.e. zeroes) anywhere form 0 to nearest rounded up power of 2. For\r\nstarters this just introduces a std::span, which should behave\r\nidentically",
          "timestamp": "2024-08-29T17:01:38Z",
          "tree_id": "31b16225009c56551e9841d8ef13262eed82adcd",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/2323cd53486d3a8a063685094ad51aa98412c4a5"
        },
        "date": 1724951819644,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13802.474261000014,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10547.411571999999 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5069.99193499999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4646.312263999999 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 40270.66841,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 40270667000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14611.493934999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14611493000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3784618196,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3784618196 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 210979989,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 210979989 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3176792949,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3176792949 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 175458836,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 175458836 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilyas@aztecprotocol.com",
            "name": "Ilyas Ridhuan",
            "username": "IlyasRidhuan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0dd954e5be1536ca30b43f883ef5b20f1add1408",
          "message": "feat(avm): range check gadget (#7967)\n\nThis doesnt replace the existing range check - this just sets up the initial work for a range check gadget",
          "timestamp": "2024-08-29T18:34:28+01:00",
          "tree_id": "615aa21e5d88d691a2a1b66d062f75180963da3d",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/0dd954e5be1536ca30b43f883ef5b20f1add1408"
        },
        "date": 1724954155534,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13460.563995,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10381.328398000001 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5051.023547,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4661.523531 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39592.85596100001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39592857000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14707.273602000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14707274000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3735297934,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3735297934 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 209645845,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 209645845 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3069637284,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3069637284 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173180514,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173180514 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilyas@aztecprotocol.com",
            "name": "Ilyas Ridhuan",
            "username": "IlyasRidhuan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc12558c8683b67ebfaf37d2018fd87ff52ab974",
          "message": "refactor(avm): replace range and cmp with gadgets (#8164)\n\nPlease read [contributing guidelines](CONTRIBUTING.md) and remove this line.",
          "timestamp": "2024-08-29T19:50:38+01:00",
          "tree_id": "311e1a69f4a210cfe17742bcad7db45c9b6b8f34",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/cc12558c8683b67ebfaf37d2018fd87ff52ab974"
        },
        "date": 1724958341059,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13746.385995999986,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10742.527569 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5064.125118999997,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4582.918392999999 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39756.178349,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39756179000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14761.892755,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14761892000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3899793116,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3899793116 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 219958465,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 219958465 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3101696455,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3101696455 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 174907237,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 174907237 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "132435771+jeanmon@users.noreply.github.com",
            "name": "Jean M",
            "username": "jeanmon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a5587c7cd85a11eafd8c9a1b39d34274e076396",
          "message": "feat(avm): avm recursive verifier cpp (#8162)\n\nResolves #7790\r\nResolves #7816 \r\nThe current version does not enable checks related to public inputs.\r\nThis will be handled as part of #7817",
          "timestamp": "2024-08-29T22:54:26+02:00",
          "tree_id": "a193cb864db48448ae981d4708a98c7fdc880ca0",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/6a5587c7cd85a11eafd8c9a1b39d34274e076396"
        },
        "date": 1724965604367,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 14637.833551,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 11482.356264 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5172.426130999995,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4769.385147999999 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39885.28477299999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39885284000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14957.589821,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14957590000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3771659685,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3771659685 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 207988271,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 207988271 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3100787228,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3100787228 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 173560697,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 173560697 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}