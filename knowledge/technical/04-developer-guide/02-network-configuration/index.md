---
title: Network Configuration
draft: false
---

# Network Configuration

QDay is a quantum-safe, EVM-compatible Layer 2. These docs target the public **QDay Aevum testnet**. The upcoming **QDay mainnet** is in development; its parameters will be published at launch. Live IDs, RPCs, and explorers: [Chain parameters](/Knowledge/reference/chains).

| | QDay Aevum (testnet) | QDay mainnet |
|---|---|---|
| Status | Live — use for development | In development |
| Chain ID | `44005` (`0xABE5`) | `44002` |
| RPC | `https://rpc-test.qday.info` | Published at launch |
| WebSocket | `wss://rpc-test.qday.info` | Published at launch |
| Explorer | `https://explorer-test.qday.info` | Published at launch |
| Verifier API | `https://explorer-test.qday.info/api` | Published at launch |
| Native currency (gas) | tQDAY (18 decimals) | QDAY (18 decimals) |
| Stablecoin | tUSD8 (`0x456569838f1d43009A91ebA4263147Afd7233483`, 6 decimals) | USD8 (6 decimals) |

:::warning[Testnet vs mainnet]
**44005 is the current public Aevum testnet** — all code samples in these docs default to it. QDay mainnet (`44002`) parameters will be published at launch. Always verify RPC, chain ID, and addresses against [Chain parameters](/Knowledge/reference/chains).
:::

:::info[Gas and fee tokens]
Through paymaster gas abstraction, users and AI agents can pay transaction fees in QDay's native stablecoin (USD8) instead of holding $QDAY; the stablecoin paymaster is live on the QDay Aevum testnet for ERC-4337 smart accounts. Regular EOA transactions (MetaMask, Foundry, Hardhat) still pay gas in the native token — tQDAY on testnet, from the faucet. Individual apps may charge fees in a different token — for example, the Agent Payment app charges fees in USD8.
:::

Test tokens: get tQDAY from [faucet.qday.info](https://faucet.qday.info) or the [in-docs faucet](/guide/start/faucet).

## Quick check

```bash title="Latest block via curl"
curl -s https://rpc-test.qday.info \
  -X POST -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"eth_blockNumber","params":[]}'
```

Add the chain in a wallet: [Wallet Integration](/Knowledge/technical/developer-guide/wallet-integration). Then [build a first contract](/Knowledge/technical/developer-guide/smart-contract-development).
