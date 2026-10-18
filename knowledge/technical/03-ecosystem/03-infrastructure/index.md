---
title: Infrastructure
draft: false
---

# Infrastructure

**RPC** — Public JSON-RPC endpoints (`https://rpc-test.qday.info` and `wss://rpc-test.qday.info` for the QDay Aevum testnet; QDay mainnet endpoints will be published at launch) expose the full Ethereum JSON-RPC API. Developers can connect MetaMask, Foundry, Hardhat, and any other EVM tool directly.

**Explorer** — The QDay Aevum testnet block explorer (`https://explorer-test.qday.info`, verifier API `https://explorer-test.qday.info/api`) provides transaction search, address views, contract verification, and token tracking. Built on Blockscout, it supports the same verification workflow as Ethereum mainnet explorers.

**Indexer** — A high-performance event indexer tracks token transfers, DEX trades, payment events, and agent actions. Applications can query indexed data via a GraphQL API instead of replaying chain history.

**Faucet** — The testnet faucet (`https://faucet.qday.info`) distributes tQDAY, the QDay Aevum testnet gas token, for development and testing. You can also claim from the [in-docs faucet](/guide/start/faucet).
