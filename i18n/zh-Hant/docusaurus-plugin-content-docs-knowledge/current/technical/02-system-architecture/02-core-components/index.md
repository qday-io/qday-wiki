---
title: 核心元件
draft: false
---

# 核心元件

| 元件 | 實作 | 主要角色 |
|-----------|---------------|--------------|
| 使用者／錢包 | MetaMask、SDK、RPC 客戶端 | 送出交易 |
| QDAY 節點 | `cdk-erigon` | 排序器——執行交易、產生 L2 區塊、維護狀態 |
| Sequence Sender | `cdk-node` | 收集區塊、建立批次、提交至 `zkRollupManager` |
| zkRollupManager | Solidity 合約（DA 層） | 接受批次、驗證 ZK 證明、最終確定狀態 |
| Aggregator | `cdk-node` | 取得批次資訊、協調 ZK 證明者、提交證明 |
| zk 證明者 | QDAY 證明者服務 | 為批次產生有效性證明 |
| DA 節點 | `reth` + `lighthouse` | 資料可用性——託管 zkEVM 合約、儲存 rollup 資料 |
| Committer | `qday-anchor-relay` | 監聽 rollup 事件、將狀態根同步至 Abelian 鏈 |
| Abelian 鏈 | Abelian L1 | 儲存批次狀態根、rollup 摘要、最終紀錄 |
| Record Contracts | DA 層上的 Solidity 合約 | 持久化批次中繼資料、狀態根、提交結果 |

**原始碼儲存庫：**

| 儲存庫 | 分支／標籤 |
|------------|-------------|
| [qday-cdk](https://github.com/qday-io/qday-cdk) | `qday-v0.5.4/qday` |
| [qday-agglayer-contracts](https://github.com/qday-io/qday-agglayer-contracts) | `qday-v10.1.0-rc.5/qday` |
| [qday-cdk-erigon](https://github.com/qday-io/qday-cdk-erigon) | `qday-v2.61.19-validium/qday` |
| [qday-abelian-plus-node](https://github.com/qday-io/qday-abelian-plus-node) | main |
| [qday-anchor-relay](https://github.com/qday-io/qday-anchor-relay) | main |
