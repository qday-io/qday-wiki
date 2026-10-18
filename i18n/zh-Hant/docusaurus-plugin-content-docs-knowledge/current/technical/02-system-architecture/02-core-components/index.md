---
title: 核心組件
draft: false
---

# 核心組件

| 組件 | 實作 | 主要角色 |
|-----------|---------------|--------------|
| 用戶 / 錢包 | MetaMask、SDK、RPC 客戶端 | 提交交易 |
| QDAY Node | `cdk-erigon` | 排序器（Sequencer）——執行交易、產生 L2 區塊、維護狀態 |
| Sequence Sender | `cdk-node` | 收集區塊、建立批次、提交至 `zkRollupManager` |
| zkRollupManager | Solidity 合約（DA 層） | 接收批次、驗證 ZK 證明、最終確定狀態 |
| Aggregator | `cdk-node` | 擷取批次資訊、協調 zk Prover、提交證明 |
| zk Prover | QDAY 證明服務 | 為批次產生有效性證明 |
| DA Node | `reth` + `lighthouse` | 數據可用性——託管 zkEVM 合約、儲存 Rollup 數據 |
| Committer | `qday-anchor-relay` | 監聽 Rollup 事件，將狀態根同步至 Abelian Chain |
| Abelian Chain | Abelian L1 | 儲存批次狀態根、Rollup 摘要及最終記錄 |
| Record Contracts | DA 層上的 Solidity 合約 | 持久保存批次元數據、狀態根及提交結果 |

**原始碼儲存庫：**

| 儲存庫 | 分支 / 標籤 |
|------------|-------------|
| [qday-cdk](https://github.com/qday-io/qday-cdk) | `qday-v0.5.4/qday` |
| [qday-agglayer-contracts](https://github.com/qday-io/qday-agglayer-contracts) | `qday-v10.1.0-rc.5/qday` |
| [qday-cdk-erigon](https://github.com/qday-io/qday-cdk-erigon) | `qday-v2.61.19-validium/qday` |
| [qday-abelian-plus-node](https://github.com/qday-io/qday-abelian-plus-node) | main |
| [qday-anchor-relay](https://github.com/qday-io/qday-anchor-relay) | main |
