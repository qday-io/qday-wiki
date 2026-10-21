---
sidebar_position: 2
title: Identity model
---

# Identity model

:::info[In development]
QPass is being built. This page describes the planned design.
:::

QPass uses a **three-layer identity model** so an AI agent can spend and act on its own without ever exposing your main wallet or private keys. Authority flows one way — from you, to your agent, to a short-lived session — and each layer can do less than the one above it.

| Layer | Who | Authority | What it does |
|---|---|---|---|
| **User** | You (a person or a company) | Root | Owns the funds and signs off on permissions. Never signs payments directly. |
| **Agent** | One AI worker, e.g. a trading or shopping agent | Delegated | Holds its own identity and reputation, and requests spending sessions within your limits. |
| **Session** | One task, e.g. "buy this cart" | Ephemeral | A random, single-purpose key that signs payments and expires after a set time or number of actions. |

## User — root authority

Your identity is a decentralized identifier (DID) such as `did:qday:alice.eth` or `did:qday:<address>`, created when you sign up in the wallet. Your main wallet key stays on your device. Its only job is to approve permissions and create the keys below it; it never takes part in an agent's payment.

## Agent — delegated authority

Each agent you register gets its own identity under yours, for example `did:qday:alice.eth/chatgpt/trading-agent-v1`. Anyone can verify that the agent belongs to you, but the agent cannot recover your private key. It can only operate inside the smart-contract limits you set, such as a maximum budget.

## Session — ephemeral authority

When an agent needs to pay, it opens a **spending session** with a budget, a per-transaction limit and an expiry. The session key is random, scoped to that task, and authorized by the agent layer. If a session key leaks, the damage is capped by that session's budget and lifetime.

## One QPass, many agents

A QPass belongs to you, not to a single agent. It is an account-abstraction (smart contract) wallet, so spending limits and session permissions are enforced on-chain rather than on trust.

To run two agents with separate budgets at the same time — say, one shopping and one buying API data — register **two agents under the same QPass**. Each gets its own identity, reputation and sessions. You can also create more than one QPass, each with its own spending wallet, to keep different uses apart.
