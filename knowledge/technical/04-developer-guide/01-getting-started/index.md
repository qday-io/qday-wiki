---
title: Getting Started
draft: false
---

# Getting Started

:::note[Coming Q1 2027]
The QDay SDK (`@qday-io/sdk`) and CLI (`@qday-io/cli`) launch in Q1 2027 and are not yet published on npm. SDK snippets elsewhere in this guide show the planned API; the Quick Start below works today with Foundry alone.
:::

Build applications on QDay Aevum — from connecting your first wallet and deploying contracts today, to smart accounts and AI payment agents when they launch with QDay mainnet in Q1 2027.

## Start here

- **[Network Configuration](/Knowledge/technical/developer-guide/network-configuration)** — RPC, chain IDs, and how QDay and QDay Aevum fit together
- **[Wallet Integration](/Knowledge/technical/developer-guide/wallet-integration)** — EOA and Smart Accounts, `wallet_addEthereumChain`
- **[Smart Contract Development](/Knowledge/technical/developer-guide/smart-contract-development)** — Solidity, Hardhat, and a wagmi/viem dApp walkthrough

QDay Aevum is EVM-compatible. Any Ethereum developer tool you already use — Foundry, Hardhat, Remix, ethers.js, viem, wagmi — works without modification. The only change is pointing your tools at the QDay Aevum RPC endpoint.

**Prerequisites**

- A wallet with QDay Aevum network support (MetaMask or compatible)
- `node >= 18` for SDK / bundler usage (available Q1 2027)
- `foundry` or `hardhat` for contract development
- Testnet tQDAY for gas — from [faucet.qday.info](https://faucet.qday.info) or the [in-docs faucet](/guide/start/faucet)

**Quick Start**

```bash
# Deploy a contract with Foundry
forge create src/MyContract.sol:MyContract \
  --rpc-url https://rpc-test.qday.info \
  --private-key $PRIVATE_KEY \
  --broadcast
```

When the QDay SDK ships *(available Q1 2027)*, install it with:

```bash
# Available Q1 2027 — not yet published on npm
npm install @qday-io/sdk
```
