---
title: Security Architecture
draft: false
---

# Security Architecture

- **Quantum-resistant ledger anchor**: All rollup state roots are committed to the Abelian Chain, which is secured by lattice-based cryptography (LWE / Ring-LWE). No quantum computer can forge these commitments.
- **Smart contract auditability**: All zkEVM contracts are forks of the Polygon CDK contracts, which have been audited by independent security firms.
- **Admin controls via Timelock**: Privileged operations on the `RollupManager` are gated behind a `Timelock` contract, giving the community time to review changes before they take effect.
- **Halt mechanism**: The QDAY DAO can vote to halt rollup execution if a quantum-capable attacker is detected. The halt is enforced through quantum-resistant signatures — an attacker cannot forge the halt revocation either.
