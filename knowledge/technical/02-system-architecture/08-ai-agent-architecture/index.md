---
title: AI Agent Architecture
draft: false
---

# AI Agent Architecture

QDAY2 provides a native runtime environment for on-chain AI agents.

**Agent Runtime** — A sandboxed execution environment where agents operate. The runtime manages agent lifecycle, resource limits, and interaction with on-chain contracts.

**MCP (Model Context Protocol)** — Agents communicate with external AI models via MCP servers. This standardized protocol allows agents to call AI inference endpoints, retrieve on-chain data, and compose complex multi-step actions.

**Intent Engine** — Users declare high-level intents (e.g., "rebalance my portfolio to 60% QDAY / 40% ABEL whenever the price diverges by more than 5%"). The Intent Engine translates intents into concrete transaction sequences and submits them through the Smart Account stack.

**Tool Calling** — Agents interact with smart contracts via a typed tool-calling interface. Each contract function is exposed as a typed tool that the agent can invoke, inspect return values, and chain into subsequent decisions.

**Memory** — Persistent agent memory stores conversation context, historical transaction data, and learned preferences. Memory is stored off-chain with an on-chain commitment hash for integrity verification.
