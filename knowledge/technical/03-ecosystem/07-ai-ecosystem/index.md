---
title: AI Ecosystem
draft: false
---

# AI Ecosystem

**Agent SDK** — `@qday-io/sdk/agent` provides primitives for creating, deploying, and managing on-chain AI agents. Agents operate through ERC-4337 Smart Accounts using session keys for authorization.

**MCP Servers** — QDAY2 AI agents connect to external AI inference through MCP (Model Context Protocol) servers. Any MCP-compatible AI provider can be plugged in as the agent's reasoning backend.

**Intent Registry** — An on-chain registry where users declare high-level intents (goals + constraints). The Intent Engine interprets intents and translates them into concrete transaction sequences.

**Agent Marketplace** — *(Coming in Phase 2)* A curated marketplace of pre-built agent strategies (yield optimization, automated rebalancing, subscription management, DeFi arbitrage) that users can deploy to their Smart Accounts.
