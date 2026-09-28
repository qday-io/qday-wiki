---
sidebar_position: 4
title: Payment flows
---

# Payment flows

:::info[In development]
QPass is being built. This page describes the planned design.
:::

Agents pay merchants in one of seven ways. **The merchant picks the flow** that fits what it sells; QDay is the neutral payment infrastructure, and the agent is the customer.

| Flow | How payment is agreed | Typical use |
|---|---|---|
| **Pay per request** | Each call gets an HTTP 402 challenge, the agent answers it | APIs, data feeds, single queries |
| **Cart & checkout** | The agent builds a cart, then pays for that order | Online shopping, bulk purchases |
| **Delegated mandate** | You pre-sign an intent, checked at checkout (AP2) | Travel booking, procurement |
| **Streaming** | A budget is held and drawn down as usage happens (MPP) | LLM inference, GPU compute, live feeds |
| **Agent to agent** | One agent pays another for a sub-task | Multi-agent work, tool calls |
| **Subscription** | A pre-paid allowance is used up per task | SaaS plans, tiered API access |
| **Escrow & milestone** | Funds are locked and released on proof of delivery | Custom datasets, research jobs |

## Pay per request, step by step

The simplest flow uses **x402**, where payment rides on the HTTP status code `402 Payment Required`:

1. The agent calls a paid API.
2. The merchant's server replies `402 Payment Required`, with the price, the token (e.g. USD8) and where to pay.
3. The agent checks the price against its spending session, signs a payment with its session key, and retries the request.
4. The merchant sends the signed payment to the **QDay Facilitator**, which checks the agent's QPass and session and settles on-chain.
5. The merchant returns the data.

## Who does what

| Party | Role |
|---|---|
| **Merchant** | Chooses the flow and adds the **QDay Merchant SDK** to its backend. The SDK issues the `402` challenge, telling the agent the scheme (`exact`, `upto`, `auth-capture`), price, token and order details. |
| **QDay** | Runs the identity registry, checks spending rules, and settles payments on-chain through the Facilitator. |
| **Agent** | Reads the challenge, checks it against its session limits, signs with its session key, and retries. |
