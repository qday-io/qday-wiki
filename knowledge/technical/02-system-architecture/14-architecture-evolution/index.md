---
title: Architecture Evolution
draft: false
---

# Architecture Evolution

QDay Aevum's architecture is designed to evolve in phases:

**Phase 1 (current)** — L1-assisted quantum-resistant rollups with EVM compatibility. A Polygon CDK-based L2 whose batches are verified by multiple independent validators (M-of-N); the Committer submits the finalized state root to Abelian. Account keys remain ECDSA.

**Phase 1.5** — Agentic Payment Network. The modular Polygon CDK upgrade, x402 facilitator and stablecoin paymaster are live on the Aevum testnet (2026 Q3); Phase 1.5 on mainnet is planned for 2027 Q1.

**Phase 2 (in development)** — ML-DSA-65 native account support at the EVM level. The `cdk-erigon` EVM will be upgraded to natively process ML-DSA-65 signatures. Users will be able to create quantum-resistant accounts without changing their existing ECDSA account. Both account types will coexist for backward compatibility. Phase 2 is planned on the Aevum testnet in 2027 Q2 and on mainnet in 2027 Q4.
