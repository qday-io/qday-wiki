---
title: Token Standards
draft: false
---

# Token Standards

**ERC-20** — QDay Aevum is compatible with the standard ERC-20 token interface. The USD8 stablecoin implements ERC-20 with EIP-2612 permit support.

**USD8** — USD8 is the USD-pegged stablecoin of the QDay payment layer. Token details: symbol `USD8`, currency `USD`, decimals `6` (on every network). On the QDay Aevum testnet it is deployed as `tUSD8` at `0x456569838f1d43009A91ebA4263147Afd7233483`; the QDay mainnet address will be published at launch.

**ERC-4337 Smart Accounts** — Smart Accounts are ERC-4337-compatible contracts. They implement `IAccount` (for `validateUserOp`) and optionally `IAccountExecute` for batched calls.

**Future: Post-Quantum Token Standard** — Phase 2 will introduce an extension to ERC-20 that adds ML-DSA-65 signature verification for token operations, enabling quantum-resistant token transfers.
