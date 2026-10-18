---
title: 共識與結算
draft: false
---

# 共識與結算

QDay Aevum 採用 **PoS-over-PoW** 共識設計：權益證明（Proof-of-Stake）驗證者網絡運作於 Abelian 的工作量證明（Proof-of-Work）Layer 1 之上。

**L2 軟確認**——當 `cdk-erigon` 將交易納入區塊時，該交易即獲得軟確認。它會立即在鏈上可見，並可作為後續交易的依賴。在批次最終確定之前，仍可能發生重組。

**批次最終確定性**——當 Aggregator 將其批次的有效 ZK 證明提交至 `zkRollupManager.verifyBatches()` 時，交易即達成 L2 批次最終確定性。此時狀態根在 DA 層已不可變更。

**L1 最終確定性**——在 Committer 將批次狀態根寫入 Abelian 鏈之後，交易即具備完整的 L1 最終確定性，並以 Abelian 的格密碼安全作為錨定。

**DA 層共識**——DA／結算層運行 Abelian Plus Node，以 `reth` 負責執行、`lighthouse` 負責驗證者集合之間的共識。
