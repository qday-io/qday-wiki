---
title: 數據可用性
draft: false
---

# 數據可用性

**Abelian Plus Node**——QDay Aevum 的 DA 層是 Abelian Plus Node，運行 `reth`（以太坊執行客戶端）與 `lighthouse`（以太坊共識客戶端）。DA 節點承載 zkEVM 合約，並儲存所有 rollup 數據——批次、證明與狀態根。

**DA 承諾**——每個提交至 `zkRollupManager` 的批次都包含一個 DA 承諾（批次數據的雜湊）。Aggregator 必須能從 DA 節點取得完整的批次數據以產生證明。

**記錄合約**——DA 層上的鏈上合約儲存：批次元數據（批次編號、雜湊、時間戳記）、狀態根（證明後的狀態根），以及提交結果（Committer 寫入 Abelian 鏈的成功 / 失敗）。
