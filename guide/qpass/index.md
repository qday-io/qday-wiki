---
sidebar_position: 1
title: What is QPass
---

# QPass

:::info[In development]
QPass is being built. This section describes the planned design; names, fees and commands may change before launch.
:::

**QPass** (Agentic QDay Pass) lets your AI agents pay for services on your behalf — with their own identity, a funded spending wallet, and spending rules you set. You stay in control: every payment an agent makes is bound to limits you approved, and you can revoke access at any time.

QPass lives in the **QDay PQ Wallet**, a mobile smart wallet for iOS and Android that has two parts:

| | What it does |
|---|---|
| **Main Wallet** | Your crypto wallet on QDay: send and receive tokens, with a path from classic ECDSA keys to post-quantum signatures (ML-DSA-65). |
| **Agentic Payments (QPass)** | A separate spending wallet that your agents pay from, in **USD8**, the QDay native stablecoin. |

## Why a separate pass for agents

An AI agent should be able to buy an API call or check out a cart without ever touching your main wallet or its keys. QPass gives each agent a delegated identity and short-lived session keys, so an agent can only spend what you allowed, for as long as you allowed it. See [Identity model](identity-model).

## What you can do with QPass

- Fund a spending wallet with USD8 from your Main Wallet.
- Register agents (for example a coding assistant or a shopping agent) under your QPass.
- Approve **spending sessions** with a per-transaction limit, a total budget and an expiry.
- Watch and revoke active sessions from the wallet or the command line.
- Let agents pay merchants over HTTP using the **x402** payment protocol. See [Payment flows](payment-flows).

## Roadmap

| Phase | Agentic payments |
|---|---|
| **1** | USD8 on QDay · x402 payments · single-shot and prepaid payments · spending wallet (smart account) · payment sessions · gas paid in USD8 |
| **2** | On-chain agent identity (ERC-8004) · USDC on Base · spending wallet and sessions on Base · gas paid in USDC |
| **4** | Session flow for streaming micropayments |

## Next

- [Identity model](identity-model): how you, your agents and their sessions relate.
- [Set up QPass](setup): from wallet to first spending session.
- [Payment flows](payment-flows): the ways an agent can pay a merchant.
