---
title: Security Architecture
draft: false
---

# Security Architecture

- **Quantum-resistant ledger anchor**: The Committer submits QDay's finalized state root to the Abelian Chain, which is secured by PoW and lattice-based cryptography (LWE / Ring-LWE). Abelian records this commitment; it does not itself re-verify every L2 transaction or enforce the validator threshold.
- **Multi-validator verification**: Multiple independent validators check batch data consistency and state transitions, and a batch needs M-of-N approvals. This reduces reliance on any single verifier. Security depends on validator independence, the threshold configuration, data availability, and the finalization rules.
- **Smart contract auditability**: The Rollup contracts are forks of the Polygon CDK contracts, which have been audited by independent security firms.
- **Admin controls via Timelock**: Privileged operations on the `RollupManager` are gated behind a `Timelock` contract, giving the community time to review changes before they take effect.
- **Halt mechanism**: The QDAY DAO can vote to halt rollup execution if a quantum-capable attacker is detected. Rollup data is signed with the rollup operators' quantum-resistant Abelian keys, so an attacker cannot forge those signatures to move forward once rollups are halted.
