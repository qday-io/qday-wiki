---
title: AI Agent Protocol
draft: false
---

# AI Agent Protocol

The AI Agent Protocol defines how autonomous agents interact with QDAY2 contracts and external AI inference.

**Intent Declaration** — Users declare an intent by submitting a signed `Intent` struct: goal description (UTF-8), trigger conditions, authorized actions (encoded as contract call selectors), resource limits, and expiry. Intents are stored on-chain in the Intent Registry contract.

**On-chain Authorization** — Each agent is associated with a Smart Account Session Key that scopes what contracts and functions the agent can call, and what value it can move. The Session Key is the authorization boundary — the agent cannot exceed it regardless of what its AI model suggests.

**Tool Call Execution** — When an agent decides to invoke a contract function, it constructs a `UserOperation` targeting the desired contract. The Alto bundler validates the UserOperation (checking session key scope and gas limits) and submits it to the EntryPoint. The result (return value or revert reason) is fed back to the agent's context.

**MCP Integration** — Agents connect to MCP (Model Context Protocol) servers to access AI inference, real-time price data, and off-chain APIs. MCP requests carry a session token that maps back to the on-chain agent identity, enabling auditable AI-driven actions.

**Result Attestation** — After an agent completes a multi-step action, it can commit a result hash to the Agent Registry contract. This creates an immutable, timestamped audit trail of the agent's decisions and actions.
