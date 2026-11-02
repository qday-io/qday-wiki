---
title: Governance
draft: false
---

# Governance

:::note[Protocol-level staking]
Staked-QDAY voting refers to protocol-level staking planned for the upgraded network. It is separate from the QDAY/ABEL user staking programs, which ended on 15 Oct 2026.
:::

**QDAY DAO** — Protocol parameter changes, contract upgrades, and emergency actions require DAO approval. Voting power is proportional to staked QDAY.

**Timelock** — All privileged operations on the `RollupManager` are executed through a `Timelock` contract with a minimum delay. This gives the community time to review and veto changes.

**Quantum-Threat Halt** — If a credible quantum threat is detected, the DAO can vote to halt rollup execution. Each rollup operator runs the rollups with an Abelian account, and rollup data is signed with Abelian's quantum-resistant keys and algorithms. An attacker with a quantum computer cannot forge the rollup operators' signatures, so cannot move forward once rollups are halted. The halt applies to the rollup operators only; smart contract calls on QDay (such as a token issuer freezing addresses) still work. Execution resumes after the halt period or a DAO vote to resume.
