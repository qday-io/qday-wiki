---
title: Smart Contract Security
draft: false
---

# Smart Contract Security

**Polygon CDK lineage** — The core zkEVM contracts (`PolygonZkEVMBridge`, `PolygonRollupManager`, `GlobalExitRoot`, `Verifier`) are forks of Polygon's CDK contracts, which have been independently audited by multiple security firms. QDAY-specific modifications are minimal and concentrated in the Committer and Record Contracts.

**Timelock** — All privileged operations on `RollupManager` (contract upgrades, parameter changes, emergency pauses) are executed through a `Timelock` contract with a minimum 24-hour delay on mainnet. This gives the community time to review and, if necessary, veto a change before it takes effect.

**ProxyAdmin** — Upgradeable proxy contracts use a `ProxyAdmin` owned by the DAO Timelock. No single private key can unilaterally upgrade a core contract.

**Immutable Verifier** — The `Verifier` contract that checks ZK proofs is non-upgradeable. Replacing the verifier requires deploying a new `RollupManager` and migrating state — a process that requires full DAO approval.
