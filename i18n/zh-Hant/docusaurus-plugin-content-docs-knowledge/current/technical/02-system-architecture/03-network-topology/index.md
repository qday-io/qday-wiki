---
title: 網絡拓撲
draft: false
---

# 網絡拓撲

QDay Aevum 橫跨四個邏輯層運作：

**客戶端層**——錢包、dApp 及 RPC 客戶端連接至 QDAY Node（cdk-erigon）的 JSON-RPC 端點。RPC Gateway 將請求負載平衡至多個唯讀副本。

**L2 執行層**——`cdk-erigon` 同時擔任排序器（Sequencer）與全節點。它維護 EVM 狀態與交易池（TxPool），並產生 L2 區塊。

**DA / 結算層**——Abelian Plus Node 使用 `reth`（執行層）與 `lighthouse`（共識層）提供數據可用性。所有 zkEVM 合約——`PolygonZkEVMBridge`、`PolygonRollupManager`、`GlobalExitRoot` 及 `Verifier`——都部署於此。

**L1 記錄層**——Committer 將批次狀態根與 Rollup 摘要直接寫入 Abelian 區塊鏈。這是所有 QDay Aevum 狀態的抗量子錨點。
