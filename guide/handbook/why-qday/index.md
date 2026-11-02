---
title: Why QDay
sidebar_position: 2
---

# Why QDay

## QDay vs Ethereum

| | Ethereum | QDay |
|---|---|---|
| Speed | ~15–30 transactions per second at the base layer | Thousands of transactions per second today, designed to scale toward tens of thousands |
| Fees | Can rise sharply when the network is busy | Designed to stay low and predictable — sub-cent fees per transaction |
| Finality | ~12–15 minutes for full settlement | Under a second on QDay itself, with settlement anchored to Abelian shortly after |
| Smart accounts | Optional add-on most wallets don't use by default | ERC-4337 smart contract wallets with paymaster gas abstraction (fees payable in the native stablecoin, USD8, instead of $QDAY), session keys and spending limits — live on the QDay Aevum testnet; mainnet in Q1 2027 |
| Quantum security | Relies on cryptography that isn't designed to resist quantum computers | Settlement secured by quantum-resistant cryptography from the start |
| AI agents | No native support | Built-in identity and payment infrastructure for AI agents — agent wallets, session keys and the x402 facilitator are live on the QDay Aevum testnet; mainnet in Q1 2027 |
| Payments | Workable, but cost and speed limit frequent or small payments | Built around USD8, a native stablecoin designed for everyday and machine-speed payments |
| Everyday experience | Mnemonic phrases and manual fee management | Simpler by design: fees payable in the USD8 stablecoin via paymaster gas abstraction, passkey login (Q1 2027) |

## QDay vs Generic EVM

Polygon, BNB Chain, Arbitrum, Optimism, Base, and Avalanche are all widely used EVM-compatible chains, and most of them compete on the same thing: being a faster, cheaper alternative to Ethereum, while relying on the same account security and offering nothing built specifically for AI agents.

QDay's difference is combining four things these chains don't offer together: native infrastructure for AI agents, a payment system built around USD8, its native stablecoin, rather than a volatile native token, settlement secured by quantum-resistant cryptography, and full EVM compatibility. Being fast and cheap is the baseline QDay starts from — not the pitch.

## Core Features

### Quantum-resistant rollups

QDay is an EVM-compatible Layer 2 built with Polygon CDK that bundles transactions into batches. Each batch is checked by multiple independent validators and finalized once an M-of-N threshold agrees; the Committer then submits the finalized state root to Abelian. This keeps transactions fast and cheap while anchoring the committed ledger state in Abelian's quantum-resistant cryptography.

### ML-DSA-65

Abelian, the Layer-1 chain QDay settles to, uses lattice-based cryptography — specifically the Learning-With-Errors (LWE) and Ring-LWE problems — a mathematical approach recognized by NIST as resistant to quantum attacks, instead of the elliptic-curve cryptography most blockchains use today. QDay is also building quantum-resistant accounts directly into its own layer: a new account type, generated from the same mnemonic phrase as a user's existing account, that uses quantum-resistant keys (ML-DSA-65) independently of the standard account. The two can coexist, and value can move between them, so adopting quantum-resistant security doesn't require abandoning an existing wallet.

If a dApp on QDay is ever exploited, the affected account can be frozen and the network can pause processing for the rollup involved while the incident is resolved — and because that pause relies on quantum-resistant signatures, an attacker cannot force it open even with access to a quantum computer.

### ERC-4337

QDay wallets can be smart contracts (ERC-4337 account abstraction) rather than simple key pairs: through paymaster gas abstraction, fees can be paid in USD8 instead of a separate gas token, login can use a device passkey instead of a mnemonic phrase, and AI agents can be given their own wallets with configurable spending limits and expiration windows. Agent wallets and session keys (an ERC-4337 smart-contract policy engine) and the stablecoin paymaster are live on the QDay Aevum testnet; mainnet deployment follows in Q1 2027.

### AI Agent

QDay gives AI agents a direct, native way to transact: an onchain identity standard (ERC-8004) so an agent can build a verifiable reputation, and a payment protocol (x402) that lets an agent pay for an API call or service in a single request — in USD8, with no subscription or manual approval needed. The x402 facilitator is live on the QDay Aevum testnet; mainnet deployment of the payment network follows in Q1 2027.

### Payment

USD8, QDay's native stablecoin pegged to the US dollar, is the primary way value moves across the network — for consumer payments, merchant settlement, and machine-speed agent payments alike. Through paymaster gas abstraction, users and AI agents can pay transaction fees in USD8 instead of holding $QDAY, and cross-border transfers are designed to settle in under a couple of seconds, well below the cost and delay of traditional banking rails.
