---
title: 整體架構
draft: false
---

# 整體架構

QDay Aevum 是一個模組化的 ZK Rollup 技術堆疊，疊加於 Abelian Layer 1 之上。系統在 Polygon CDK 架構的基礎上加入三項 QDAY 專屬組件：**Abelian Plus Node**（DA 層 + 記錄層）、**Committer**（L1 同步服務），以及 **Record Contracts**（位於 Abelian 上、儲存批次元數據的鏈上合約）。

```
┌────────────────────────────────────────┐
│         Infrastructure                 │
│   Docker / K8s / PostgreSQL / Redis    │
└──────────────────┬─────────────────────┘
                   │
                   ▼
┌────────────────────────────────────────┐
│         Abelian Plus Node              │
│         reth + lighthouse              │
│   (DA Node + Record Contracts)         │
└──────────────────┬─────────────────────┘
                   │
                   ▼
┌────────────────────────────────────────┐
│         zkEVM Contracts                │
│  RollupManager / Bridge / GlobalExitRoot│
└──────────┬───────────────┬─────────────┘
           │               │
     ┌─────▼──────┐  ┌─────▼──────┐
     │ cdk-erigon │  │ zk Prover  │
     │ (Sequencer)│  │            │
     └─────┬──────┘  └─────▲──────┘
           │               │
           ▼               │
     ┌─────────────┐       │
     │  cdk-node   │───────┘
     │ Seq. Sender │
     └─────┬───────┘
           │
           ▼
     ┌─────────────┐       ┌─────────────────┐
     │  Aggregator │──────►│ Record Contracts │
     └─────┬───────┘       └─────────────────┘
           │
           ▼
     ┌─────────────┐
     │  Committer  │
     └─────┬───────┘
           │
           ▼
     Abelian Chain (L1)
```
