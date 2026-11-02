---
title: Wallet Ecosystem
draft: false
---

# Wallet Ecosystem

**EOA Wallet** — Standard Ethereum externally-owned accounts protected by ECDSA. Any Ethereum wallet (MetaMask, Rabby, hardware wallets) works on QDay Aevum by adding the network. QDay Aevum inherits ledger-level quantum resistance from Abelian L1 even for EOA accounts.

**Smart Account Wallet** *(ERC-4337 policy engine, session keys and stablecoin paymaster live on the QDay Aevum testnet; mainnet in Q1 2027)* — ERC-4337 Smart Accounts provide gas abstraction (via the paymaster, fees can be paid in the native stablecoin USD8 instead of $QDAY), one-click transaction batching, session keys with spending caps and time locks, and programmable multi-sig recovery. The Smart Account SDK (`@qday-io/sdk`, Q1 2027, not yet on npm) will make deploying and interacting with Smart Accounts as simple as connecting a standard wallet.

**Post-Quantum Wallet (Phase 2)** — In Phase 2 (Aevum testnet 2027 Q2; mainnet 2027 Q4), users will be able to generate ML-DSA-65 accounts directly in their wallet. A single BIP-39 mnemonic will derive both a standard ECDSA account and a quantum-resistant ML-DSA-65 account, enabling a smooth migration of assets from classical to post-quantum security.

**AI Wallet** *(agent wallets and session keys live on the QDay Aevum testnet; mainnet in Q1 2027)* — An AI Wallet will pair a Smart Account with an AI agent that can monitor balances, execute intents, manage subscriptions, and initiate payments — all within user-defined session key boundaries. The agent will operate autonomously within its authorized scope without requiring manual sign-off on each action.
