---
title: Security Overview
draft: false
---

# Security Overview

QDay Aevum's security design rests on three pillars:

**Quantum-resistant foundation** — The Committer submits QDay's finalized state root to the Abelian Layer 1 (PoW), which uses lattice-based cryptography (LWE / Ring-LWE) resistant to quantum computers. No quantum algorithm — including Shor's algorithm — is known to break these assumptions.

**Defense in depth** — Multiple independent security layers protect user funds: multi-validator batch verification with an M-of-N threshold, Timelock controls on privileged contract operations, a DAO-governed, quantum-resistant halt mechanism for emergency response, and ML-DSA-65 post-quantum signing for Phase 2 accounts.

**Minimal trust surface** — QDay Aevum inherits the Polygon CDK's extensively audited contract codebase. QDAY-specific extensions (Abelian Plus Node, Committer) are scoped narrowly and do not hold user funds. End-to-end security also depends on validator independence, the threshold configuration, data availability, and the finalization rules.
