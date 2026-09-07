---
title: Getting Started
draft: false
---

# Getting Started

Build applications on QDAY2 — from connecting your first wallet to deploying quantum-resistant smart accounts and AI payment agents.

## Start here

- **[Network Configuration](/Knowledge/technical/developer-guide/network-configuration)** — RPC, chain IDs, and how QDay and QDay2 fit together
- **[Wallet Integration](/Knowledge/technical/developer-guide/wallet-integration)** — EOA and Smart Accounts, `wallet_addEthereumChain`
- **[Smart Contract Development](/Knowledge/technical/developer-guide/smart-contract-development)** — Solidity, Hardhat, and a wagmi/viem dApp walkthrough

QDAY2 is EVM-compatible. Any Ethereum developer tool you already use — Foundry, Hardhat, Remix, ethers.js, viem, wagmi — works without modification. The only change is pointing your tools at the QDAY2 RPC endpoint.

**Prerequisites**

- A wallet with QDAY2 network support (MetaMask or compatible)
- `node >= 18` for SDK / bundler usage
- `foundry` or `hardhat` for contract development

**Quick Start**

```bash
# Install the QDAY SDK
npm install @qday-io/sdk

# Deploy a contract with Foundry
forge create src/MyContract.sol:MyContract \
  --rpc-url https://rpc.qday.io \
  --private-key $PRIVATE_KEY
```
