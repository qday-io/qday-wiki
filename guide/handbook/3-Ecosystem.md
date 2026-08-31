---
id: ecosystem
title: 3. Ecosystem
sidebar_position: 3
---

# 3. Ecosystem

## 3.1 Overview

QDay's ecosystem is built in layers: a core protocol connecting QDay to Abelian for security and settlement, a set of DeFi and bridging applications, and an agent-and-payments layer built around USD8, QDay's native stablecoin.

## 3.2 DApps

QDay's ecosystem applications include:

- **ABEL Staking** — stake ABEL on QDay to earn staking and airdrop rewards.
- **QDay Bridge** — moves ERC20, TRC20, and QRC20 tokens between QDay and other EVM-compatible chains.
- **QDay Staking** — stake QDAY to support the network and earn rewards.
- **Q-Swap** — QDay's decentralized exchange for swapping tokens.
- [Placeholder] A prediction market is planned.
- [Placeholder] An oracle service is planned.
- [Placeholder] An onchain identity product is planned.

## 3.3 DeFi

Together, these form QDay's DeFi layer: Q-Swap handles token swaps, and staking is available for both QDAY and ABEL. The design intent is for USD8, QDay's native stablecoin, to serve as the primary collateral and settlement asset across all of them, so DeFi activity on QDay isn't exposed to native-token price swings.

## 3.4 AI Ecosystem

AI agents on QDay hold their own wallets, register a verifiable onchain identity, and pay for services directly in USD8 — a single API call can be paid for in real time, without a subscription or a human approving each transaction.

## 3.5 Abelian Partnership

Abelian is the Layer-1 blockchain underneath QDay. It has operated at mainnet for several years, using proof-of-work consensus and lattice-based cryptography that predates and underlies QDay's own quantum-resistant design. Abelian provides the settlement layer QDay's transactions ultimately anchor to, the quantum-resistant signatures behind QDay's security features, and the account-derivation standard QDay's own quantum-resistant accounts are built on.
