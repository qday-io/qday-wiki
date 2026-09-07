---
title: Token Standards
draft: false
---

# Token Standards

**ERC-20** — QDAY2 is compatible with the standard ERC-20 token interface. The PQUSD stablecoin implements ERC-20 with EIP-2612 permit support.

**PQUSD** — PQUSD is a USD-pegged stablecoin deployed on QDAY2 using the Circle USDC V2.3 contract architecture. Token details: name `PQUSD`, symbol `PQUSD`, currency `USD`, decimals `6`.

**ERC-4337 Smart Accounts** — Smart Accounts are ERC-4337-compatible contracts. They implement `IAccount` (for `validateUserOp`) and optionally `IAccountExecute` for batched calls.

**Future: Post-Quantum Token Standard** — Phase 2 will introduce an extension to ERC-20 that adds ML-DSA-65 signature verification for token operations, enabling quantum-resistant token transfers.
