---
title: Wallet Ecosystem
draft: false
---

# Wallet Ecosystem

**EOA Wallet** — Standard Ethereum externally-owned accounts protected by ECDSA. Any Ethereum wallet (MetaMask, Rabby, hardware wallets) works on QDAY2 by adding the network. QDAY2 inherits ledger-level quantum resistance from Abelian L1 even for EOA accounts.

**Smart Account Wallet** — ERC-4337 Smart Accounts provide the best user experience: gasless transactions (Paymaster-sponsored), one-click transaction batching, session keys for recurring operations, and programmable multi-sig recovery. The QDAY2 Smart Account SDK makes deploying and interacting with Smart Accounts as simple as connecting a standard wallet.

**Post-Quantum Wallet (Phase 2)** — In Phase 2, users will be able to generate ML-DSA-65 accounts directly in their wallet. A single BIP-39 mnemonic will derive both a standard ECDSA account and a quantum-resistant ML-DSA-65 account, enabling a smooth migration of assets from classical to post-quantum security.

**AI Wallet** — An AI Wallet pairs a Smart Account with an AI agent that can monitor balances, execute intents, manage subscriptions, and initiate payments — all within user-defined session key boundaries. The agent operates autonomously within its authorized scope without requiring manual sign-off on each action.
