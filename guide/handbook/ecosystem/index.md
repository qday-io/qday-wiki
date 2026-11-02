---
title: Ecosystem
sidebar_position: 3
---

# Ecosystem

## Overview

QDay's ecosystem is built in layers: a core protocol connecting QDay to Abelian for security and settlement, a set of DeFi and bridging applications, and an agent-and-payments layer built around USD8, QDay's native stablecoin.

## DApps

QDay's ecosystem applications include:

- **ABEL Staking** — ended 15 Oct 2026; [unstake and claim](/guide/handbook/user-guide/abel-staking) by 12:00 HKT, 31 Dec 2026.
- **QDay Bridge** — bridges ERC20, TRC20 and QRC20 tokens between QDay and other EVM-compatible chains.
- **QDay Staking** — ended 15 Oct 2026; [unstake and claim](/guide/handbook/user-guide/qday-staking) by 12:00 HKT, 31 Dec 2026.
- **Q-Swap** — QDay's decentralized exchange for swapping tokens.

## DeFi

QDay's DeFi layer currently centres on Q-Swap, which handles token swaps (on QDay Origin mainnet); further DeFi products are planned, including QLEAP (QDay Lending Ecosystem And Protocol) for lending and borrowing, and Q-Finance, a consolidated dApp to manage DeFi assets in one interface. The design intent is for USD8, QDay's native stablecoin, to serve as the primary collateral and settlement asset across these applications, so DeFi activity on QDay isn't exposed to native-token price swings.

## AI Ecosystem

AI agents on QDay are designed to hold their own wallets, register a verifiable onchain identity (ERC-8004), and pay for services directly in USD8 — a single API call can be paid for in real time, without a subscription or a human approving each transaction. Agent wallets and session keys (ERC-4337), the x402 facilitator and the stablecoin paymaster are live on the QDay Aevum testnet; mainnet deployment of the payment network and native stablecoin follows in Q1 2027.

## Abelian Partnership

Abelian is the Layer-1 blockchain underneath QDay. It has operated at mainnet for several years, using proof-of-work consensus and lattice-based cryptography that predates and underlies QDay's own quantum-resistant design. Abelian provides the settlement layer QDay's transactions ultimately anchor to, the quantum-resistant signatures behind QDay's security features, and the account-derivation standard QDay's own quantum-resistant accounts are built on.
