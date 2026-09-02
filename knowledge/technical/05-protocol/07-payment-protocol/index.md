---
title: Payment Protocol
draft: false
---

# Payment Protocol

The QDAY2 payment protocol defines a lifecycle for structured, verifiable payments.

**Payment Session** — A payment session is initiated when a payer creates an on-chain payment intent specifying: payee address, amount, currency, expiry, and optional metadata hash. The session ID is derived from these parameters.

**Invoice Lifecycle** — An invoice passes through states: `Created` → `Pending` (payer acknowledged) → `Paid` (funds locked) → `Settled` (funds released to merchant) → `Expired` (timeout without payment) or `Cancelled` (explicitly cancelled by payer). Each state transition emits an event.

**Settlement Finality** — Payment settlement is gated on L2 batch finality. Funds are released to the merchant only after the batch containing the payment transaction is ZK-verified. For time-sensitive use cases, soft-confirmation settlement is available with a configurable confirmation threshold.

**Streaming Payment** — Streaming payments drip funds continuously over time using a flow rate (tokens per second). The payer locks a deposit; the payee can claim accrued funds at any time. If the deposit runs out, the stream stops automatically.

**Agent Payment Authorization** — AI agents initiate payments through Session Keys scoped to the Payment contract. The agent's session key specifies: maximum single-payment amount, maximum cumulative spend per period, allowed recipient addresses (whitelist), and expiry. Payments outside these bounds are rejected by the EntryPoint at verification time.
