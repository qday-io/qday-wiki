---
title: Core Components
draft: false
---

# Core Components

| Component | Implementation | Primary Role |
|-----------|---------------|--------------|
| User / Wallet | MetaMask, SDK, RPC client | Submit transactions |
| QDAY Node | `cdk-erigon` | Sequencer — execute transactions, produce L2 blocks, maintain state |
| Sequence Sender | `cdk-node` | Collect blocks, create batches, submit to `zkRollupManager` |
| zkRollupManager | Solidity contract (DA Layer) | Accept batches, verify ZK proofs, finalize state |
| Aggregator | `cdk-node` | Fetch batch info, coordinate ZK Prover, submit proofs |
| zk Prover | QDAY prover service | Generate validity proofs for batches |
| DA Node | `reth` + `lighthouse` | Data availability — host zkEVM contracts, store rollup data |
| Committer | `qday-anchor-relay` | Listen to rollup events, sync status root to Abelian Chain |
| Abelian Chain | Abelian L1 | Store batch status root, rollup summary, final records |
| Record Contracts | Solidity on DA Layer | Persist batch metadata, status roots, commit results |

**Source repositories:**

| Repository | Branch / Tag |
|------------|-------------|
| [qday-cdk](https://github.com/qday-io/qday-cdk) | `qday-v0.5.4/qday` |
| [qday-agglayer-contracts](https://github.com/qday-io/qday-agglayer-contracts) | `qday-v10.1.0-rc.5/qday` |
| [qday-cdk-erigon](https://github.com/qday-io/qday-cdk-erigon) | `qday-v2.61.19-validium/qday` |
| [qday-abelian-plus-node](https://github.com/qday-io/qday-abelian-plus-node) | main |
| [qday-anchor-relay](https://github.com/qday-io/qday-anchor-relay) | main |
