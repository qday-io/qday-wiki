---
title: Developer Tools
draft: false
---

# Developer Tools

:::note[Coming Q1 2027]
The QDay SDK (`@qday-io/sdk`) and CLI (`@qday-io/cli`) launch in Q1 2027 and are not yet published on npm.
:::

**Foundry** — Full Foundry compatibility. Use `forge`, `cast`, and `anvil` with the `--rpc-url https://rpc-test.qday.info` flag (QDay Aevum testnet).

**Hardhat** — Add QDay Aevum as a network in `hardhat.config.js` (see [Developer Guide](/Knowledge/technical/developer-guide/getting-started)). All Hardhat plugins that work with Ethereum mainnet work on QDay Aevum.

**Remix** — Connect Remix IDE to QDay Aevum via the "External HTTP Provider" option with the QDay Aevum RPC URL.

**SDK** *(available Q1 2027)* — The `@qday-io/sdk` npm package will provide TypeScript-first clients for Smart Accounts, ERC-4337 bundler interaction, payment creation, and AI agent management.

**CLI** *(available Q1 2027)* — The `qday` CLI will provide command-line access to all SDK features, installed via `npm install -g @qday-io/cli`.
