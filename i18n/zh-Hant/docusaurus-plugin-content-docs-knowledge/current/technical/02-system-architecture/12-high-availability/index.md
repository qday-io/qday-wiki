---
title: 高可用性
draft: false
---

# 高可用性

- **RPC 閘道**：多個 `cdk-erigon` 唯讀副本置於負載平衡器之後。任何副本都可服務讀取流量；只有指定的 Sequencer 會寫入新區塊。
- **zk 證明者**：證明者實例可水平擴展；Aggregator 會將批次分配至可用的證明者。
- **DA 節點**：`reth` + `lighthouse` 以 Ethereum 共識 / 執行配對的形式運行，並採用標準的 Ethereum 高可用模式（多個信標節點、執行用戶端）。
- **資料庫**：以 PostgreSQL 複寫保存 `cdk-erigon` 與 `cdk-node` 的狀態。
