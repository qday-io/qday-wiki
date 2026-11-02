---
title: 網絡拓撲
draft: false
---

# 網絡拓撲

QDay Aevum 橫跨四個邏輯層運作：

**客戶端層**——錢包、dApp 及 RPC 客戶端連接至 QDAY Node（cdk-erigon）的 JSON-RPC 端點。RPC Gateway 將請求負載平衡至多個唯讀副本。

**L2 執行層**——`cdk-erigon` 同時擔任排序器（Sequencer）與全節點。它維護 EVM 狀態與交易池（TxPool），並產生 L2 區塊。

**Abelian Plus Node／驗證層**——Abelian Plus Node 使用 `reth`（為 Rollup 合約提供 EVM 執行）與 `lighthouse`（共識客戶端）提供數據可用性。負責記錄批次資訊的 Rollup 合約在此 EVM 環境中運行。多個獨立驗證者會根據這些記錄及 L2 交易數據驗證每個批次，並透過 M-of-N 門檻達成一致。

**L1 承諾層**——Committer 透過 Abelian Node 將 QDay 的最終狀態根提交至 Abelian 區塊鏈。這將 QDay Aevum 的狀態錨定至 Abelian 的抗量子 PoW 鏈。Abelian 會記錄該承諾，但本身不會重新驗證每筆 L2 交易，亦不會強制執行驗證者門檻。
