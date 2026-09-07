---
title: AI Agent Security
draft: false
---

# AI Agent Security

**Session key boundaries** — Every AI agent operates exclusively through a Session Key issued by the user's Smart Account. The Session Key specifies: allowed contract addresses, allowed function selectors, per-call value limit, cumulative spend limit, and expiry timestamp. The `EntryPoint` enforces these limits at verification time — the agent's own code cannot circumvent them.

**No privileged access** — Agents never hold the user's master signing key. If an agent is compromised, the attacker can only act within the Session Key's scope. Users can revoke a Session Key at any time by calling the `SessionKeyManager` on their Smart Account.

**Intent auditing** — All agent intents and the transactions they generate are recorded on-chain in the Intent Registry. Users can audit everything an agent has done, and the record is immutable.

**MCP authentication** — Connections from agents to MCP servers are authenticated using the on-chain agent identity. MCP requests outside the agent's authorized scope are rejected server-side.
