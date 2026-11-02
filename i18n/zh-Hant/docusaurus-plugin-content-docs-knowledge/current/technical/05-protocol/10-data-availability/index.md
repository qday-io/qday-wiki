---
title: 數據可用性
draft: false
---

# 數據可用性

**Abelian Plus Node**——QDay Aevum 的 DA 節點基礎設施是 Abelian Plus Node，整合了 `reth`（為 Rollup 合約提供 EVM 執行）與 `lighthouse`（共識客戶端）。Rollup 合約在此 EVM 環境中運行並記錄批次資料。

**驗證所需數據**——驗證者需要批次記錄及對應的 L2 交易數據，以檢查批次數據一致性並重新執行狀態轉換。因此，數據可用性是 QDay 批次驗證所依賴的條件之一。

**狀態承諾**——批次最終確定後，Committer 會透過 Abelian Node 將最終狀態根提交至 Abelian 鏈。
