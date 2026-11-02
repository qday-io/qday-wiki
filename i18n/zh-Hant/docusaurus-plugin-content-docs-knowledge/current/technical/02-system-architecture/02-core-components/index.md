---
title: 核心組件
draft: false
---

# 核心組件

| 組件 | 實作 | 主要角色 |
|-----------|---------------|--------------|
| 用戶 / 錢包 | MetaMask、SDK、RPC 客戶端 | 提交交易 |
| QDAY Node | `cdk-erigon` | 排序器（Sequencer）——執行交易、產生 L2 區塊、維護狀態 |
| Sequence Sender | `cdk-node` | 收集區塊、建立批次，並提交至 Rollup 合約 |
| Rollup 合約 | 在 Abelian Plus Node 的 EVM 環境中運行的 Solidity 合約 | 記錄批次資訊 |
| 驗證者 | 多個獨立驗證者 | 驗證批次數據一致性及狀態轉換；透過 M-of-N 門檻達成一致 |
| DA Node | `reth` + `lighthouse`（Abelian Plus Node） | 數據可用性——為 Rollup 合約提供 EVM 執行、共識客戶端 |
| Committer | `qday-anchor-relay`（Abelian Plus Node） | 將最終狀態根提交至 Abelian Chain |
| Abelian Node | Abelian Plus Node | 連接原生 Abelian 鏈並與之互動 |
| Abelian Chain | Abelian L1（PoW） | 儲存已提交的 L2 狀態根 |

**原始碼儲存庫：**

| 儲存庫 | 分支 / 標籤 |
|------------|-------------|
| [qday-cdk](https://github.com/qday-io/qday-cdk) | `qday-v0.5.4/qday` |
| [qday-agglayer-contracts](https://github.com/qday-io/qday-agglayer-contracts) | `qday-v10.1.0-rc.5/qday` |
| [qday-cdk-erigon](https://github.com/qday-io/qday-cdk-erigon) | `qday-v2.61.19-validium/qday` |
| [qday-abelian-plus-node](https://github.com/qday-io/qday-abelian-plus-node) | main |
| [qday-anchor-relay](https://github.com/qday-io/qday-anchor-relay) | main |
