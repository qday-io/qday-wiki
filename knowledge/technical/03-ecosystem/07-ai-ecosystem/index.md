---
title: AI Ecosystem
draft: false
---

# AI Ecosystem

:::note[Planned — Q1 2027]
The AI agent stack and the QDay SDK (`@qday-io/sdk`) / CLI (`@qday-io/cli`) launch with QDay mainnet in Q1 2027 and are not live today; the SDK is not yet published on npm.
:::

**Agent SDK** — `@qday-io/sdk/agent` will provide primitives for creating, deploying, and managing on-chain AI agents. Agents will operate through ERC-4337 Smart Accounts using session keys for authorization.

**MCP Servers** — QDay AI agents will connect to external AI inference through MCP (Model Context Protocol) servers. Any MCP-compatible AI provider will be pluggable as the agent's reasoning backend.

**Intent Registry** — A planned on-chain registry where users declare high-level intents (goals + constraints). The Intent Engine interprets intents and translates them into concrete transaction sequences.

**Agent Marketplace** — *(Coming in Phase 2)* A curated marketplace of pre-built agent strategies (yield optimization, automated rebalancing, subscription management, DeFi arbitrage) that users can deploy to their Smart Accounts.
