---
title: QDAY Payment Roadmap
---

# QDAY Payment Roadmap

QDay’s **payment network** (Phase 1.5): USD8 as the unit of account, a gateway for merchants, and rails for people and **AI agents**. Everyday dApp gas stays in QDAY; **agent-initiated** payments are designed to fee in USD8.

## Goal

A global payment layer on QDay for:

- Merchants and processors (storefronts and agent-driven checkout)
- Micropayments and per-request API billing
- Subscriptions and streaming payouts
- Agents that pay within a spending limit, without a human clicking every tx

Product context: [Why QDay](/guide/handbook/why-qday). Builder APIs: [Build on QDay — SDKs](/guide/handbook/build-on-qday#sdks) and [Payment SDK](/Knowledge/technical/developer-guide#payment-sdk).

## Payment milestone table

Aligned with the network [QDAY Roadmap](/guide/handbook/roadmap/qday-roadmap):

| Milestone | Target | What it unlocks |
|---|---|---|
| USD8 and Swap / Bridge (Phase 1) | Through Phase 1 Mainnet | Move and trade USD8; pay some flows manually |
| Phase 1.5 development begins | 2026 Q1 | Payment gateway, invoices, webhooks |
| Phase 1.5 Testnet | 2026 Q3 | Merchants and agents try the stack on Aevum / testnet |
| Phase 1.5 Mainnet | 2027 Q1 | Production payment network |
| Native PQC accounts (Phase 2) | 2027 | Same payment APIs on QR accounts when they ship |

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

Architecture notes: [Payment Architecture](/Knowledge/technical/system-architecture#payment-architecture) and [Payment Ecosystem](/Knowledge/technical/ecosystem#payment-ecosystem).

## How to follow along

1. Hold USD8 on QDay ([Swap](/guide/handbook/user-guide/swap), [bridge / convert](/guide/handbook/user-guide#qday-bridge)).
2. Integrate `@qday-io/sdk/payments` when the testnet gateway is announced ([Developer Guide](/Knowledge/technical/developer-guide#payment-development)).
3. For agent commerce, use Smart Accounts and session keys (`@qday-io/sdk/aa`, `@qday-io/sdk/agent`).
4. Use only official Portal and docs URLs; payment webhooks must be signature-checked.

PQC of the **ledger** is on the [QDAY PQC Roadmap](/guide/handbook/roadmap/pqc-roadmap). Payment contracts in Phase 1.5 still sit on Phase 1 EVM accounts until Phase 2 QR contracts exist.
