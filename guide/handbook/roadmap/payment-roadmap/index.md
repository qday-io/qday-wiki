---
title: QDAY Payment Roadmap
---

# QDAY Payment Roadmap

:::note[Coming Q1 2027]
The QDay SDK (`@qday-io/sdk`) and CLI (`@qday-io/cli`) launch in Q1 2027 and are not yet published on npm. Code on this page shows the planned API.
:::

QDay’s **payment network** (Phase 1.5): USD8 as the unit of account, a gateway for merchants, and rails for people and **AI agents**. Through paymaster gas abstraction, users and **AI agents** can pay transaction fees in USD8 instead of holding $QDAY.

## Goal

A global payment layer on QDay for:

- Merchants and processors (storefronts and agent-driven checkout)
- Micropayments and per-request API billing
- Subscriptions and streaming payouts
- Agents that pay within a spending limit, without a human clicking every tx

Product context: [Why QDay](/guide/handbook/why-qday). Builder APIs: [Build on QDay — SDKs](/guide/handbook/build-on-qday#sdks) and [Payment SDK](/Knowledge/technical/developer-guide/payment-development).

## Payment milestone table

Aligned with the network [QDAY Roadmap](/guide/handbook/roadmap/qday-roadmap):

| Milestone | Target | What it unlocks |
|---|---|---|
| USD8 and Q-Swap / Bridge (Phase 1) | Through Phase 1 Mainnet | Move and trade USD8; pay some flows manually |
| Phase 1.5 development begins | 2026 Q1 | Payment gateway, invoices, webhooks |
| Phase 1.5 Testnet | 2026 Q3 | Modular Polygon CDK upgrade on the Aevum testnet; x402 facilitator, stablecoin paymaster and agent wallets / session keys live on Aevum |
| Phase 1.5 Mainnet | 2027 Q1 | Mainnet deployment of the Enhanced Payment Network and native stablecoin |
| Native PQC accounts (Phase 2) | Aevum testnet 2027 Q2; mainnet 2027 Q4 | Same payment APIs on quantum-resistant accounts when they ship |

## What Phase 1.5 is for

| Piece | Role |
|---|---|
| **USD8** | Native USD-pegged stablecoin; primary currency for commerce and agents |
| **Payment Gateway** | API to create pay requests without writing the settlement contracts yourself |
| **Invoice** | Amount, currency, expiry, metadata; payable by a wallet or an agent |
| **Subscription** | Recurring pay via session-key limits per period |
| **Streaming** | Continuous flow (tokens per second) against a deposit |
| **Agent payment** | Session key: max per payment, max per day, allowlisted payees, expiry |
| **Webhooks** | Signed notifications when an invoice pays or a stream stops |

Architecture notes: [Payment Architecture](/Knowledge/technical/system-architecture/payment-architecture) and [Payment Ecosystem](/Knowledge/technical/ecosystem/payment-ecosystem).

## How to follow along

1. Get familiar with USD8: it is currently available on QDay Origin mainnet via [Q-Swap](/guide/handbook/user-guide/swap); tUSD8 is the test version on the Aevum testnet (see the [token list](/Knowledge/reference/tokens)).
2. Integrate `@qday-io/sdk/payments` when the testnet gateway is announced ([Developer Guide](/Knowledge/technical/developer-guide/payment-development)).
3. For agent commerce, use Smart Accounts and session keys (`@qday-io/sdk/aa`, `@qday-io/sdk/agent`).
4. Use only official Portal and docs URLs; payment webhooks must be signature-checked.

PQC of the **ledger** is on the [QDay PQC Roadmap](/guide/handbook/roadmap/pqc-roadmap). Payment contracts in Phase 1.5 still sit on Phase 1 EVM accounts until Phase 2 quantum-resistant contracts exist.
