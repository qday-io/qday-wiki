---
title: Overall Architecture
draft: false
---

# Overall Architecture

QDay Aevum is an EVM-compatible Layer 2 built with Polygon CDK and integrated with the Abelian Layer 1 (PoW) through the **Abelian Plus Node**. The architecture separates L2 execution, batch verification, validator agreement, and state commitment:

- **CDK-based L2 execution** — `cdk-erigon` (Sequencer) executes transactions and produces L2 blocks; `cdk-node` (Sequence Sender) packs them into batches and submits them to the Rollup contracts.
- **Abelian Plus Node** — Reth (EVM execution for Rollup contracts), Lighthouse (consensus client), the **Committer** (submits the finalized state root to Abelian), and an **Abelian Node** (connects to the native Abelian chain). Abelian itself has no smart contracts, so the Rollup contracts run in the Abelian Plus Node's EVM environment.
- **Multi-validator batch verification** — Multiple independent validators check each batch and reach agreement through an M-of-N threshold.

```
┌────────────────────────────────────────┐
│         Infrastructure                 │
│   Docker / K8s / PostgreSQL / Redis    │
└──────────────────┬─────────────────────┘
                   │
                   ▼
     ┌─────────────┐
     │ cdk-erigon  │  L2 execution (Sequencer)
     └─────┬───────┘
           │ L2 blocks
           ▼
     ┌─────────────┐
     │  cdk-node   │  Sequence Sender
     └─────┬───────┘
           │ batches
           ▼
┌────────────────────────────────────────┐
│         Abelian Plus Node              │
│  reth + lighthouse (DA Node)           │
│  Rollup contracts (batch records)      │
│  Committer · Abelian Node              │
└──────────┬─────────────────▲───────────┘
           │ batch records   │ finalized
           ▼                 │ state root
┌────────────────────────────┴───────────┐
│   Independent validators (M-of-N)      │
│   batch data consistency +             │
│   state transition verification        │
└────────────────────────────────────────┘
                   │
                   ▼  Committer submits finalized state root
            Abelian Chain (L1, PoW)
```
