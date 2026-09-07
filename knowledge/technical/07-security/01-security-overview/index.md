---
title: Security Overview
draft: false
---

# Security Overview

QDAY2's security design rests on three pillars:

**Quantum-resistant foundation** — All ledger finality is anchored to the Abelian Layer 1, which uses lattice-based cryptography (LWE / Ring-LWE) resistant to quantum computers. No quantum algorithm — including Shor's algorithm — is known to break these assumptions.

**Defense in depth** — Multiple independent security layers protect user funds: ZK proof integrity at the L2 layer, Timelock controls on privileged contract operations, a DAO-governed halt mechanism for emergency response, and ML-DSA-65 post-quantum signing for Phase 2 accounts.

**Minimal trust surface** — QDAY2 inherits the Polygon CDK's extensively audited contract codebase. QDAY-specific extensions (Committer, Record Contracts, Abelian Plus Node) are scoped narrowly and do not hold user funds.
