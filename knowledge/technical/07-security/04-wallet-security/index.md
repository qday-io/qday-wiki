---
title: Wallet Security
draft: false
---

# Wallet Security

**EOA wallets** — Standard ECDSA wallets (MetaMask, hardware wallets) are fully supported in Phase 1. Users should follow standard Ethereum wallet security practices: hardware wallets for significant holdings, unique seed phrases stored offline.

**Smart Account wallets** — ERC-4337 Smart Accounts add security features not available to EOAs: multi-signature requirements, spending limits, session key expiry, and social recovery. Compromising a single EOA signer does not automatically compromise a Smart Account with a threshold-based ownership policy.

**Post-quantum wallets (Phase 2)** — In Phase 2, users can create ML-DSA-65 accounts that are not vulnerable to quantum attacks. A single BIP-39 mnemonic derives both an ECDSA account and an ML-DSA-65 account. Users should migrate holdings to the ML-DSA-65 account before Q-Day arrives.
