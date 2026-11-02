---
title: 共識與結算
draft: false
---

# 共識與結算

QDay Aevum 是建基於 Polygon CDK、運作於 Abelian 工作量證明（Proof-of-Work）Layer 1 之上的 Layer 2。它不會取代 Abelian 的 PoW 共識：批次由多個獨立驗證者驗證，並透過 M-of-N 門檻達成共識，最終狀態根則提交至 Abelian。

**L2 軟確認**——當 `cdk-erigon` 將交易納入區塊時，該交易即獲得軟確認。它會立即在鏈上可見，並可作為後續交易的依賴。在批次最終確定之前，仍可能發生重組。

**批次最終確定性**——當所需的 M-of-N 驗證者已批准某交易所屬的批次（批次數據一致性及狀態轉換驗證），且符合協議的接受及最終確定規則時，該批次即告最終確定。

**L1 承諾**——最終確定後，Committer 將最終狀態根提交至 Abelian 鏈，把 QDay 的狀態錨定於 Abelian 的 PoW 鏈及格密碼。Abelian 會記錄該承諾，但不會自行重新驗證每筆 L2 交易，亦不會強制執行驗證者門檻。

**Abelian Plus Node**——Abelian Plus Node 運行 `reth`（為 Rollup 合約提供 EVM 執行）及 `lighthouse`（共識客戶端），並配合 Committer 及連接原生 Abelian 鏈的 Abelian Node 一同運作。
