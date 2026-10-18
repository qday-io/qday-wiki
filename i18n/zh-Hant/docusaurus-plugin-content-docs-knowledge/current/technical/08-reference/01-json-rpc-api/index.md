---
title: JSON-RPC API
draft: false
---

# JSON-RPC API

QDay Aevum 節點（`cdk-erigon`）使用 **Ethereum JSON-RPC**。錢包、Foundry、Hardhat、ethers、viem 與 MetaMask 可直接沿用 `eth_` / `net_` / `web3_` 方法，無需修改。Polygon CDK 額外提供 **`zkevm_`** 命名空間，用於批次狀態、witness 與 Global Exit Root——這些是以太坊沒有對應項的部分。

範例使用 QDay Aevum 測試網（`https://rpc-test.qday.info`、`wss://rpc-test.qday.info`）。最新的 HTTP / WebSocket URL：[鏈參數](/Knowledge/reference/chains)。

```bash title="JSON-RPC request"
curl -s https://rpc-test.qday.info \
  -X POST -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"eth_chainId","params":[]}'
```

區塊參數可接受十六進位數值或標籤：`earliest`、`latest`、`pending`、`safe`、`finalized`。

:::note 公開節點與節點營運者
公開 RPC 應開放 `eth_*`（通常也包含 `net_*` / `web3_*`）。`zkevm_getWitness`、`zkevm_getProverInput`、`debug_*` 與 `admin_*` 應僅存在於節點營運者的節點上——請參閱 [RPC 安全](/Knowledge/technical/security/rpc-security)。
:::

## Ethereum JSON-RPC（`eth`） {/* #ethereum-json-rpc-eth */}

以下方法遵循 [Ethereum Execution APIs](https://ethereum.github.io/execution-apis/)。QDay Aevum 與 EVM 兼容；這些方法的行為與以太坊上相同。

### 鏈與客戶端 {/* #chain-and-client */}

| 方法 | 參數 | 說明 |
|--------|--------|-------------|
| `eth_chainId` | 無 | 鏈 ID（QDay Aevum 測試網為 `0xABE5` / `44005`） |
| `eth_syncing` | 無 | 已同步時返回 `false`，否則返回同步進度物件 |
| `eth_blockNumber` | 無 | 最新 L2 區塊高度（十六進位） |
| `eth_protocolVersion` | 無 | 以太坊協議版本 |
| `eth_coinbase` | 無 | 排序器 coinbase（手續費接收者） |
| `net_version` | 無 | 網絡 ID（十進位字串；在 QDay Aevum 上與鏈 ID 相同） |
| `net_listening` | 無 | 節點是否正在監聽對等節點 |
| `net_peerCount` | 無 | 已連線的對等節點數量（十六進位） |
| `web3_clientVersion` | 無 | 客戶端版本字串（`cdk-erigon/…`） |
| `web3_sha3` | `data` | 十六進位數據的 Keccak-256 雜湊 |

### 狀態 {/* #state */}

| 方法 | 參數 | 說明 |
|--------|--------|-------------|
| `eth_getBalance` | `address`、`block` | 帳戶餘額（以 wei 計） |
| `eth_getTransactionCount` | `address`、`block` | 帳戶 nonce |
| `eth_getCode` | `address`、`block` | 合約位元組碼 |
| `eth_getStorageAt` | `address`、`slot`、`block` | 儲存槽的值 |
| `eth_getProof` | `address`、`slots[]`、`block` | Merkle 帳戶 / 儲存證明 |

### 區塊 {/* #blocks */}

| 方法 | 參數 | 說明 |
|--------|--------|-------------|
| `eth_getBlockByHash` | `hash`、`fullTx` | 依雜湊取得區塊（`fullTx`：返回物件或僅雜湊） |
| `eth_getBlockByNumber` | `block`、`fullTx` | 依高度或標籤取得區塊 |
| `eth_getBlockTransactionCountByHash` | `hash` | 該區塊中的交易數量 |
| `eth_getBlockTransactionCountByNumber` | `block` | 該區塊中的交易數量 |
| `eth_getBlockReceipts` | `block` | 該區塊中的所有收據 |
| `eth_getUncleCountByBlockHash` | `hash` | 在 QDay Aevum 上永遠為 `0x0`（沒有叔塊） |
| `eth_getUncleCountByBlockNumber` | `block` | 永遠為 `0x0` |
| `eth_getUncleByBlockHashAndIndex` | `hash`、`index` | 永遠為 `null` |
| `eth_getUncleByBlockNumberAndIndex` | `block`、`index` | 永遠為 `null` |

### 交易 {/* #transactions */}

| 方法 | 參數 | 說明 |
|--------|--------|-------------|
| `eth_sendRawTransaction` | `signedTx` | 送出已簽名的交易；返回交易雜湊 |
| `eth_getTransactionByHash` | `hash` | 交易物件或 `null` |
| `eth_getTransactionByBlockHashAndIndex` | `hash`、`index` | 區塊中指定索引的交易 |
| `eth_getTransactionByBlockNumberAndIndex` | `block`、`index` | 區塊中指定索引的交易 |
| `eth_getTransactionReceipt` | `hash` | 收據（狀態、日誌、已用 Gas） |
| `eth_pendingTransactions` | 無 | 本機交易池中的交易（若已啟用） |

`eth_sendTransaction` / `eth_sign` 為錢包方法。公開的 QDay Aevum RPC 要求透過 `eth_sendRawTransaction` 送出**已簽名**的數據。

### 呼叫與 Gas {/* #call-and-gas */}

| 方法 | 參數 | 說明 |
|--------|--------|-------------|
| `eth_call` | `tx`、`block` | 模擬呼叫；不變更狀態 |
| `eth_estimateGas` | `tx`、`block?` | 該呼叫的預估 Gas |
| `eth_createAccessList` | `tx`、`block?` | EIP-2930 存取清單 |
| `eth_gasPrice` | 無 | 建議的 Gas 價格（舊式） |
| `eth_maxPriorityFeePerGas` | 無 | 建議的 EIP-1559 小費 |
| `eth_feeHistory` | `count`、`newest`、`reward%[]?` | 基礎費用與優先費用歷史 |

### 日誌與過濾器 {/* #logs-and-filters */}

| 方法 | 參數 | 說明 |
|--------|--------|-------------|
| `eth_getLogs` | `filter` | 符合地址 / 主題 / 區塊範圍的日誌 |
| `eth_newFilter` | `filter` | 建立日誌過濾器；返回過濾器 ID |
| `eth_newBlockFilter` | 無 | 新區塊雜湊的過濾器 |
| `eth_newPendingTransactionFilter` | 無 | 待處理交易雜湊的過濾器 |
| `eth_getFilterChanges` | `id` | 自上次輪詢以來的新符合項目 |
| `eth_getFilterLogs` | `id` | 日誌過濾器的所有日誌 |
| `eth_uninstallFilter` | `id` | 移除過濾器 |

在 WebSocket（`wss://…`）上，可使用 `eth_subscribe` / `eth_unsubscribe`（`newHeads`、`logs`、`newPendingTransactions`）取代輪詢過濾器。

## Polygon CDK zkEVM（`zkevm`） {/* #polygon-cdk-zkevm-zkevm */}

這些方法**不存在**於以太坊。它們來自 Polygon CDK / `cdk-erigon`，用於描述 L2 批次、虛擬化、ZK 驗證與跨鏈橋 exit-root 樹。

節點營運者可在 `http.api` 中加入 `zkevm` 以啟用此命名空間。公開端點可能只開放成本低廉的狀態查詢方法。

### 批次與最終確定性 {/* #batch-and-finality */}

對應到[共識與結算](/Knowledge/technical/protocol/consensus-settlement)：已排序 → 已虛擬化（發佈至 DA / L1）→ 已驗證（ZK 證明已核驗）。

| 方法 | 參數 | 說明 |
|--------|--------|-------------|
| `zkevm_batchNumber` | 無 | 最新已排序的批次編號 |
| `zkevm_virtualBatchNumber` | 無 | 最新**已虛擬化**的批次（已發佈至 L1 / DA） |
| `zkevm_verifiedBatchNumber` | 無 | 最新**已驗證**的批次（證明已在 `zkRollupManager` 上被接受） |
| `zkevm_batchNumberByBlockNumber` | `blockNumber` | 包含此 L2 區塊的批次 |
| `zkevm_consolidatedBlockNumber` | 無 | 已驗證批次中的最高 L2 區塊 |
| `zkevm_isBlockVirtualized` | `blockNumber` | 若該區塊所屬批次已虛擬化則為 `true` |
| `zkevm_isBlockConsolidated` | `blockNumber` | 若該區塊所屬批次已驗證則為 `true` |

```bash title="Latest verified batch"
curl -s https://rpc-test.qday.info \
  -X POST -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"zkevm_verifiedBatchNumber","params":[]}'
```

### 批次與區塊數據 {/* #batch-and-block-data */}

| 方法 | 參數 | 說明 |
|--------|--------|-------------|
| `zkevm_getBatchByNumber` | `batchNumber` | 批次元數據：區塊、狀態根、時間戳記、L1 資訊 |
| `zkevm_getBatchCountersByNumber` | `batchNumber` | 該批次的 zk 計數器與已用 Gas |
| `zkevm_getFullBlockByNumber` | `blockNumber` | L2 區塊加上 zkEVM 額外欄位 |
| `zkevm_getFullBlockByHash` | `blockHash` | 同上，依雜湊查詢 |
| `zkevm_getL2BlockInfoTree` | `blockNumber` | L2 區塊資訊樹（GER / 區塊資訊葉節點） |
| `zkevm_getNativeBlockHashesInRange` | `from`、`to` | 閉區間範圍內的原生區塊雜湊 |
| `zkevm_getLatestDataStreamBlock` | 無 | 數據串流已發佈的最新區塊 |

### Witness 與證明者（高負載） {/* #witness-and-prover-heavy */}

供 Aggregator / 證明者使用。預期會有大量數據返回與速率限制。

| 方法 | 參數 | 說明 |
|--------|--------|-------------|
| `zkevm_estimateCounters` | `transaction` | 估算交易的 zk **計數器**（與 `eth_estimateGas` 不同） |
| `zkevm_getWitness` | `blockNumber`（及選項） | 用於證明區塊的執行 witness |
| `zkevm_getBatchWitness` | `batchNumber` | 整個批次的 witness |
| `zkevm_getBlockRangeWitness` | `from`、`to` | 涵蓋區塊範圍的 witness |
| `zkevm_getProverInput` | 批次 / 區塊參數 | 證明者所使用的輸入數據 |

### Exit Root 與 rollup 合約 {/* #exit-roots-and-rollup-contracts */}

| 方法 | 參數 | 說明 |
|--------|--------|-------------|
| `zkevm_getLatestGlobalExitRoot` | 無 | 節點已知的最新 Global Exit Root |
| `zkevm_getExitRootTable` | 無 | Exit-root 表（跨鏈橋訊息傳遞） |
| `zkevm_getExitRootsByGER` | `ger` | 指定 GER 的 exit root |
| `zkevm_getRollupAddress` | 無 | Rollup / zkEVM 合約地址 |
| `zkevm_getRollupManagerAddress` | 無 | `PolygonRollupManager` 地址 |

### 分叉與版本 {/* #forks-and-version */}

| 方法 | 參數 | 說明 |
|--------|--------|-------------|
| `zkevm_getForkId` | 無 | 目前的 zkEVM 分叉 ID |
| `zkevm_getForkIdByBatchNumber` | `batchNumber` | 套用於該批次的分叉 ID |
| `zkevm_getForkById` | `forkId` | 分叉元數據 |
| `zkevm_getForks` | 無 | 已知的分叉 |
| `zkevm_getVersionHistory` | 無 | 節點 / 協議版本歷史 |

### 已棄用（請勿使用） {/* #deprecated-do-not-use */}

| 方法 | 備註 |
|--------|--------|
| `zkevm_getBroadcastURI` | 上游已移除 |
| `zkevm_virtualCounters` | 已移除 |
| `zkevm_traceTransactionCounters` | 已移除 |

## 相關頁面 {/* #related */}

- [網絡設定](/Knowledge/technical/developer-guide/network-configuration)——端點與 curl 檢查
- [網絡協議](/Knowledge/technical/protocol/network-protocol)——DevP2P + JSON-RPC 介面
- [ZK 證明協議](/Knowledge/technical/protocol/zk-proof-protocol)——批次 / witness / 證明者 / 驗證者
- [鏈參數](/Knowledge/reference/chains)——鏈 ID 與 RPC URL
