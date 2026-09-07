---
title: 網路拓樸
draft: false
---

# 網路拓樸

QDAY2 運作於四個邏輯層之上：

**用戶端層（Client Layer）** — 錢包、dApp 與 RPC 用戶端連接至 QDAY 節點（cdk-erigon）的 JSON-RPC 端點。RPC 閘道會將請求負載平衡至多個讀取副本。

**L2 執行層（L2 Execution Layer）** — `cdk-erigon` 同時擔任排序器與全節點。它維護 EVM 狀態與交易池（TxPool），並產生 L2 區塊。

**DA / 結算層（DA / Settlement Layer）** — Abelian Plus 節點使用 `reth`（執行）與 `lighthouse`（共識）提供資料可用性。所有 zkEVM 合約——`PolygonZkEVMBridge`、`PolygonRollupManager`、`GlobalExitRoot` 與 `Verifier`——皆部署於此層。

**L1 記錄層（L1 Record Layer）** — Committer 將批次狀態根與 rollup 摘要直接寫入 Abelian 區塊鏈。這是所有 QDAY2 狀態的抗量子錨點。
