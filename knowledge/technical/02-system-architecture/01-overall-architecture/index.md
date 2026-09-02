---
title: Overall Architecture
draft: false
---

# Overall Architecture

QDAY2 is a modular ZK rollup stack layered on top of the Abelian Layer 1. The system extends the Polygon CDK architecture with three QDAY-specific additions: the **Abelian Plus Node** (DA + record layer), the **Committer** (L1 sync service), and **Record Contracts** (on-chain batch metadata store on Abelian).

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
