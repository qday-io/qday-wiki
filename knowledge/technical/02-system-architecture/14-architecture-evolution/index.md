---
title: Architecture Evolution
draft: false
---

# Architecture Evolution

QDAY2's architecture is designed to evolve in two phases:

**Phase 1 (current)** — L1-assisted ZK rollups with EVM compatibility. Ledger security is inherited from Abelian via the Committer's status root submissions. Account keys remain ECDSA.

**Phase 2 (in development)** — ML-DSA-65 native account support at the EVM level. The `cdk-erigon` EVM will be upgraded to natively process ML-DSA-65 signatures. Users will be able to create quantum-resistant accounts without changing their existing ECDSA account. Both account types will coexist for backward compatibility.
