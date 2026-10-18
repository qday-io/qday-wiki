---
title: CLI Reference
draft: false
---

# CLI Reference

:::note[Coming Q1 2027]
The QDay SDK (`@qday-io/sdk`) and CLI (`@qday-io/cli`) launch in Q1 2027 and are not yet published on npm. Code on this page shows the planned API.
:::

Install:

```bash
# Available Q1 2027 — not yet published on npm
npm install -g @qday-io/cli
```

The `qday` CLI wraps the same features as `@qday-io/sdk`. Subcommands below match the SDK modules; flags and output JSON will be documented as the CLI ships.

| Command | Description |
|---------|-------------|
| `qday --help` | List commands |
| `qday account …` | Smart Account / session keys (`@qday-io/sdk/aa`) |
| `qday payment …` | Invoices, subscriptions, streams |
| `qday agent …` | Agent create / run / authorize |
| `qday rpc …` | JSON-RPC helpers (`eth_blockNumber`, `zkevm_verifiedBatchNumber`) |

RPC URL defaults to the chain in [Chain parameters](/Knowledge/reference/chains). Override with `--rpc-url`.
