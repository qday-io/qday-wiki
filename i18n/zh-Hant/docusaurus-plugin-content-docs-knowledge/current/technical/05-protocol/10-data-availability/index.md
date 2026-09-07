---
title: 資料可用性
draft: false
---

# 資料可用性

**Abelian Plus Node** —— QDAY2 的 DA 層是 Abelian Plus Node，運行 `reth`（Ethereum 執行用戶端）與 `lighthouse`（Ethereum 共識用戶端）。DA 節點承載 zkEVM 合約，並儲存所有 rollup 資料——批次、證明與狀態根。

**DA 承諾** —— 每個提交至 `zkRollupManager` 的批次都包含一個 DA 承諾（批次資料的雜湊）。Aggregator 必須能從 DA 節點取得完整的批次資料以產生證明。

**記錄合約** —— DA 層上的鏈上合約儲存：批次中繼資料（批次編號、雜湊、時間戳記）、狀態根（證明後的狀態根），以及提交結果（Committer 寫入 Abelian 鏈的成功 / 失敗）。
