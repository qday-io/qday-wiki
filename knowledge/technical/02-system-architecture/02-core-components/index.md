---
title: Core Components
draft: false
---

# Core Components

| Component | Implementation | Primary Role |
|-----------|---------------|--------------|
| User / Wallet | MetaMask, SDK, RPC client | Submit transactions |
| QDAY Node | `cdk-erigon` | Sequencer — execute transactions, produce L2 blocks, maintain state |
| Sequence Sender | `cdk-node` | Collect blocks, create batches, submit them to the Rollup contracts |
| Rollup contracts | Solidity contracts in the Abelian Plus Node's EVM environment | Record batch information |
| Validators | Multiple independent validators | Verify batch data consistency and state transitions; agree via an M-of-N threshold |
| DA Node | `reth` + `lighthouse` (Abelian Plus Node) | Data availability — EVM execution for Rollup contracts, consensus client |
| Committer | `qday-anchor-relay` (Abelian Plus Node) | Submit the finalized state root to the Abelian Chain |
| Abelian Node | Abelian Plus Node | Connect to and interact with the native Abelian chain |
| Abelian Chain | Abelian L1 (PoW) | Store the committed L2 state root |

**Source repositories:**

| Repository | Branch / Tag |
|------------|-------------|
| [qday-cdk](https://github.com/qday-io/qday-cdk) | `qday-v0.5.4/qday` |
| [qday-agglayer-contracts](https://github.com/qday-io/qday-agglayer-contracts) | `qday-v10.1.0-rc.5/qday` |
| [qday-cdk-erigon](https://github.com/qday-io/qday-cdk-erigon) | `qday-v2.61.19-validium/qday` |
| [qday-abelian-plus-node](https://github.com/qday-io/qday-abelian-plus-node) | main |
| [qday-anchor-relay](https://github.com/qday-io/qday-anchor-relay) | main |
