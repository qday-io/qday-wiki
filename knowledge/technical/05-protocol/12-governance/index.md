---
title: Governance
draft: false
---

# Governance

**QDAY DAO** — Protocol parameter changes, contract upgrades, and emergency actions require DAO approval. Voting power is proportional to staked QDAY.

**Timelock** — All privileged operations on the `RollupManager` are executed through a `Timelock` contract with a minimum delay. This gives the community time to review and veto changes.

**Quantum-Threat Halt** — If a credible quantum threat is detected, the DAO can vote to halt rollup execution. The halt is enforced by the `RollupManager` contract. Because the halt itself is gated by quantum-resistant Abelian L1 signatures, an attacker with a quantum computer cannot force a rollup un-halt or forge a halt revocation.
