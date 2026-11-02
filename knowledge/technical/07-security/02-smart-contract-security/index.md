---
title: Smart Contract Security
draft: false
---

# Smart Contract Security

**Polygon CDK lineage** — The core Rollup and bridge contracts (`PolygonZkEVMBridge`, `PolygonRollupManager`, `GlobalExitRoot`) are forks of Polygon's CDK contracts, which have been independently audited by multiple security firms. The Rollup contracts run in the Abelian Plus Node's EVM environment. QDAY-specific modifications are minimal and concentrated in the Abelian Plus Node integration and the Committer.

**Timelock** — All privileged operations on `RollupManager` (contract upgrades, parameter changes, emergency pauses) are executed through a `Timelock` contract with a minimum 24-hour delay on mainnet. This gives the community time to review and, if necessary, veto a change before it takes effect.

**ProxyAdmin** — Upgradeable proxy contracts use a `ProxyAdmin` owned by the DAO Timelock. No single private key can unilaterally upgrade a core contract.
