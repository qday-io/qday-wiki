---
title: 高可用性
draft: false
---

# 高可用性

- **RPC Gateway**：多個 `cdk-erigon` 唯讀副本位於負載平衡器之後。任何副本都可以處理讀取流量；只有指定的排序器（Sequencer）會寫入新區塊。
- **zk Prover**：證明者實例可以橫向擴展；Aggregator 會將批次分配給可用的證明者。
- **DA Node**：`reth` + `lighthouse` 以以太坊共識層 / 執行層配對的形式運行，採用標準的以太坊高可用性模式（多個信標節點及執行客戶端）。
- **數據庫**：以 PostgreSQL 複製保存 `cdk-erigon` 及 `cdk-node` 的狀態。
