---
title: JSON-RPC API
draft: false
---

# JSON-RPC API

QDAY2 nodes (`cdk-erigon`) speak **Ethereum JSON-RPC**. Wallets, Foundry, Hardhat, ethers, viem, and MetaMask use the `eth_` / `net_` / `web3_` methods unchanged. Polygon CDK adds a **`zkevm_`** namespace for batch status, witnesses, and Global Exit Root — the parts that have no Ethereum equivalent.

Live HTTP / WebSocket URLs: [Chain parameters](/Knowledge/reference/chains).

```bash title="JSON-RPC request"
curl -s https://rpc.qday.io \
  -X POST -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"eth_chainId","params":[]}'
```

Block parameters accept a hex quantity or a tag: `earliest`, `latest`, `pending`, `safe`, `finalized`.

:::note Public vs operator
Public RPC should expose `eth_*` (and typically `net_*` / `web3_*`). `zkevm_getWitness`, `zkevm_getProverInput`, `debug_*`, and `admin_*` belong on operator nodes — see [RPC Security](/Knowledge/technical/security/rpc-security).
:::

## Ethereum JSON-RPC (`eth`)

Methods below follow the [Ethereum Execution APIs](https://ethereum.github.io/execution-apis/). QDAY2 is EVM-compatible; these work the same as on Ethereum.

### Chain and client

| Method | Params | Description |
|--------|--------|-------------|
| `eth_chainId` | — | Chain ID (`0xABE1` / `44001` Origin mainnet) |
| `eth_syncing` | — | `false` if in sync, otherwise a sync progress object |
| `eth_blockNumber` | — | Latest L2 block number (hex) |
| `eth_protocolVersion` | — | Ethereum protocol version |
| `eth_coinbase` | — | Sequencer coinbase (fee recipient) |
| `net_version` | — | Network ID (decimal string; matches chain ID on QDAY2) |
| `net_listening` | — | Whether the node is listening for peers |
| `net_peerCount` | — | Connected peer count (hex) |
| `web3_clientVersion` | — | Client version string (`cdk-erigon/…`) |
| `web3_sha3` | `data` | Keccak-256 of the hex data |

### State

| Method | Params | Description |
|--------|--------|-------------|
| `eth_getBalance` | `address`, `block` | Account balance in wei |
| `eth_getTransactionCount` | `address`, `block` | Account nonce |
| `eth_getCode` | `address`, `block` | Contract bytecode |
| `eth_getStorageAt` | `address`, `slot`, `block` | Storage slot value |
| `eth_getProof` | `address`, `slots[]`, `block` | Merkle account / storage proof |

### Blocks

| Method | Params | Description |
|--------|--------|-------------|
| `eth_getBlockByHash` | `hash`, `fullTx` | Block by hash (`fullTx`: objects vs hashes) |
| `eth_getBlockByNumber` | `block`, `fullTx` | Block by number or tag |
| `eth_getBlockTransactionCountByHash` | `hash` | Tx count in the block |
| `eth_getBlockTransactionCountByNumber` | `block` | Tx count in the block |
| `eth_getBlockReceipts` | `block` | All receipts in the block |
| `eth_getUncleCountByBlockHash` | `hash` | Always `0x0` on QDAY2 (no uncles) |
| `eth_getUncleCountByBlockNumber` | `block` | Always `0x0` |
| `eth_getUncleByBlockHashAndIndex` | `hash`, `index` | Always `null` |
| `eth_getUncleByBlockNumberAndIndex` | `block`, `index` | Always `null` |

### Transactions

| Method | Params | Description |
|--------|--------|-------------|
| `eth_sendRawTransaction` | `signedTx` | Submit a signed tx; returns tx hash |
| `eth_getTransactionByHash` | `hash` | Transaction object or `null` |
| `eth_getTransactionByBlockHashAndIndex` | `hash`, `index` | Tx at index in the block |
| `eth_getTransactionByBlockNumberAndIndex` | `block`, `index` | Tx at index in the block |
| `eth_getTransactionReceipt` | `hash` | Receipt (status, logs, gas used) |
| `eth_pendingTransactions` | — | Txs in the local pool (if enabled) |

`eth_sendTransaction` / `eth_sign` are wallet methods. Public QDAY2 RPC expects **signed** payloads via `eth_sendRawTransaction`.

### Call and gas

| Method | Params | Description |
|--------|--------|-------------|
| `eth_call` | `tx`, `block` | Simulate a call; no state change |
| `eth_estimateGas` | `tx`, `block?` | Estimated gas for the call |
| `eth_createAccessList` | `tx`, `block?` | EIP-2930 access list |
| `eth_gasPrice` | — | Suggested gas price (legacy) |
| `eth_maxPriorityFeePerGas` | — | Suggested EIP-1559 tip |
| `eth_feeHistory` | `count`, `newest`, `reward%[]?` | Base fee and priority-fee history |

### Logs and filters

| Method | Params | Description |
|--------|--------|-------------|
| `eth_getLogs` | `filter` | Logs matching address / topics / block range |
| `eth_newFilter` | `filter` | Install a log filter; returns filter id |
| `eth_newBlockFilter` | — | Filter for new block hashes |
| `eth_newPendingTransactionFilter` | — | Filter for pending tx hashes |
| `eth_getFilterChanges` | `id` | New matches since last poll |
| `eth_getFilterLogs` | `id` | All logs for a log filter |
| `eth_uninstallFilter` | `id` | Drop a filter |

On WebSocket (`wss://…`) you can use `eth_subscribe` / `eth_unsubscribe` (`newHeads`, `logs`, `newPendingTransactions`) instead of polling filters.

## Polygon CDK zkEVM (`zkevm`)

These methods are **not** on Ethereum. They come from Polygon CDK / `cdk-erigon` and describe L2 batches, virtualization, ZK verification, and the bridge exit-root tree.

Operator nodes enable the namespace with `http.api` including `zkevm`. Public endpoints may expose only the cheap status methods.

### Batch and finality

Maps onto [Consensus & Settlement](/Knowledge/technical/protocol/consensus-settlement): sequenced → virtualized (posted to DA / L1) → verified (ZK proof checked).

| Method | Params | Description |
|--------|--------|-------------|
| `zkevm_batchNumber` | — | Latest sequenced batch number |
| `zkevm_virtualBatchNumber` | — | Latest **virtualized** batch (posted toward L1 / DA) |
| `zkevm_verifiedBatchNumber` | — | Latest **verified** batch (proof accepted on `zkRollupManager`) |
| `zkevm_batchNumberByBlockNumber` | `blockNumber` | Batch that contains this L2 block |
| `zkevm_consolidatedBlockNumber` | — | Highest L2 block in a verified batch |
| `zkevm_isBlockVirtualized` | `blockNumber` | `true` if the block’s batch is virtualized |
| `zkevm_isBlockConsolidated` | `blockNumber` | `true` if the block’s batch is verified |

```bash title="Latest verified batch"
curl -s https://rpc.qday.io \
  -X POST -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"zkevm_verifiedBatchNumber","params":[]}'
```

### Batch and block data

| Method | Params | Description |
|--------|--------|-------------|
| `zkevm_getBatchByNumber` | `batchNumber` | Batch metadata: blocks, state root, timestamp, L1 info |
| `zkevm_getBatchCountersByNumber` | `batchNumber` | zk counters and gas used for the batch |
| `zkevm_getFullBlockByNumber` | `blockNumber` | L2 block plus zkEVM extra fields |
| `zkevm_getFullBlockByHash` | `blockHash` | Same by hash |
| `zkevm_getL2BlockInfoTree` | `blockNumber` | L2 block info-tree (GER / block-info leaves) |
| `zkevm_getNativeBlockHashesInRange` | `from`, `to` | Native block hashes in an inclusive range |
| `zkevm_getLatestDataStreamBlock` | — | Latest block the data-stream has published |

### Witness and prover (heavy)

Used by the Aggregator / Prover. Expect large payloads and rate limits.

| Method | Params | Description |
|--------|--------|-------------|
| `zkevm_estimateCounters` | `transaction` | Estimate zk **counters** for a tx (not the same as `eth_estimateGas`) |
| `zkevm_getWitness` | `blockNumber` (and options) | Execution witness for proving a block |
| `zkevm_getBatchWitness` | `batchNumber` | Witness for a whole batch |
| `zkevm_getBlockRangeWitness` | `from`, `to` | Witness covering a block range |
| `zkevm_getProverInput` | batch / block args | Input blob the prover consumes |

### Exit roots and rollup contracts

| Method | Params | Description |
|--------|--------|-------------|
| `zkevm_getLatestGlobalExitRoot` | — | Latest Global Exit Root known to the node |
| `zkevm_getExitRootTable` | — | Exit-root table (bridge messaging) |
| `zkevm_getExitRootsByGER` | `ger` | Exit roots for a given GER |
| `zkevm_getRollupAddress` | — | Rollup / zkEVM contract address |
| `zkevm_getRollupManagerAddress` | — | `PolygonRollupManager` address |

### Forks and version

| Method | Params | Description |
|--------|--------|-------------|
| `zkevm_getForkId` | — | Current zkEVM fork id |
| `zkevm_getForkIdByBatchNumber` | `batchNumber` | Fork id that applied to that batch |
| `zkevm_getForkById` | `forkId` | Fork metadata |
| `zkevm_getForks` | — | Known forks |
| `zkevm_getVersionHistory` | — | Node / protocol version history |

### Deprecated (do not use)

| Method | Notes |
|--------|--------|
| `zkevm_getBroadcastURI` | Removed upstream |
| `zkevm_virtualCounters` | Removed |
| `zkevm_traceTransactionCounters` | Removed |

## Related

- [Network Configuration](/Knowledge/technical/developer-guide/network-configuration) — endpoints and curl check
- [Network Protocol](/Knowledge/technical/protocol/network-protocol) — DevP2P + JSON-RPC surface
- [zk Proof Protocol](/Knowledge/technical/protocol/zk-proof-protocol) — batch / witness / prover / verifier
- [Chain parameters](/Knowledge/reference/chains) — chain IDs and RPC URLs
