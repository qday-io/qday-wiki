---
title: CLI Reference
draft: false
---

# CLI Reference

Install:

```bash
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
