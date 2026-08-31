---
title: Why QDay
sidebar_position: 2
---

# Why QDay

## QDay vs Ethereum

| | Ethereum | QDay |
|---|---|---|
| Speed | ~15–30 transactions per second at the base layer | Thousands of transactions per second today, designed to scale toward tens of thousands |
| Fees | Can rise sharply when the network is busy | Designed to stay low and predictable — a fraction of a cent to a few cents per transaction |
| Finality | ~12–15 minutes for full settlement | Under a second on QDay itself, with settlement anchored to Abelian shortly after |
| Smart accounts | Optional add-on most wallets don't use by default | Smart contract wallets with gas paid in QDAY (USD8 for agent-initiated payments), passkey login, and spending limits built in |
| Quantum security | Relies on cryptography that isn't designed to resist quantum computers | Settlement secured by quantum-resistant cryptography from the start |
| AI agents | No native support | Built-in identity and payment infrastructure for AI agents |
| Payments | Workable, but cost and speed limit frequent or small payments | Built around USD8, a native stablecoin designed for everyday and machine-speed payments |
| Everyday experience | Mnemonic phrases and manual fee management | Simpler by design: predictable QDAY gas fees, passkey login |

## QDay vs Generic EVM

Polygon, BNB Chain, Arbitrum, Optimism, Base, and Avalanche are all widely used EVM-compatible chains, and most of them compete on the same thing: being a faster, cheaper alternative to Ethereum, while relying on the same account security and offering nothing built specifically for AI agents.

QDay's difference is combining four things these chains don't offer together: native infrastructure for AI agents, a payment system built around USD8, its native stablecoin, rather than a volatile native token, settlement secured by quantum-resistant cryptography, and full EVM compatibility. Being fast and cheap is the baseline QDay starts from — not the pitch.

## Core Features

### zk Proof

QDay uses zero-knowledge rollup technology to bundle transactions and prove their validity without revealing the underlying data, then settles that proof to Abelian. This keeps transactions fast and cheap while giving them the same quantum-resistant guarantee as Abelian itself — the proofs are constructed so that even an attacker with a quantum computer cannot forge them.

### ML-DSA-65

Abelian, the Layer-1 chain QDay settles to, uses lattice-based cryptography — specifically the Learning-With-Errors (LWE) and Ring-LWE problems — a mathematical approach recognized by NIST as resistant to quantum attacks, instead of the elliptic-curve cryptography most blockchains use today. QDay is also building quantum-resistant accounts directly into its own layer: a new account type, generated from the same mnemonic phrase as a user's existing account, that uses quantum-resistant keys (ML-DSA-65) independently of the standard account. The two can coexist, and value can move between them, so adopting quantum-resistant security doesn't require abandoning an existing wallet.

If a dApp on QDay is ever exploited, the affected account can be frozen and the network can pause processing for the rollup involved while the incident is resolved — and because that pause relies on quantum-resistant signatures, an attacker cannot force it open even with access to a quantum computer.

### ERC-4337

QDay wallets are smart contracts (ERC-4337 account abstraction) rather than simple key pairs: fees can be paid in USD8 instead of a separate gas token, login can use a device passkey instead of a mnemonic phrase, and AI agents can be given their own wallets with configurable spending limits and expiration windows.

### AI Agent

QDay gives AI agents a direct, native way to transact: an onchain identity standard so an agent can build a verifiable reputation, and a payment protocol that lets an agent pay for an API call or service in a single request — in USD8, with no subscription or manual approval needed.

### Payment

USD8, QDay's native stablecoin pegged to the US dollar, is the primary way value moves across the network — for consumer payments, merchant settlement, and machine-speed agent payments alike. Fees are paid in USD8 rather than a volatile native token, and cross-border transfers are designed to settle in under a couple of seconds, well below the cost and delay of traditional banking rails.
