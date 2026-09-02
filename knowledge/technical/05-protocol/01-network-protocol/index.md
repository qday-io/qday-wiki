---
title: Network Protocol
draft: false
---

# Network Protocol

**Transport** — `cdk-erigon` uses the Ethereum DevP2P protocol for peer-to-peer communication between nodes. New blocks and transactions are propagated via Ethereum's standard gossip protocol (eth/66, eth/67).

**JSON-RPC** — QDAY2 exposes a fully Ethereum-compatible JSON-RPC interface (`eth_*`, `net_*`, `web3_*`). Any tool that can talk to an Ethereum node (MetaMask, ethers.js, viem, Foundry cast) connects to QDAY2 without modification.

**Sequencer API** — The Sequencer exposes an additional internal API used by the Sequence Sender (`cdk-node`) to sync newly produced blocks. This API is not public-facing.
