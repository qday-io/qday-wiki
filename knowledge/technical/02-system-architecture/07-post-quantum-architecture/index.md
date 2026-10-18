---
title: Post-Quantum Architecture
draft: false
---

# Post-Quantum Architecture

QDay's post-quantum account layer arrives in **Phase 2** and is built on **ML-DSA-65** (Module Lattice-based Digital Signature Algorithm, standardized as FIPS 204 by NIST). Today (Phase 1), accounts use ECDSA; quantum resistance comes from settlement on Abelian.

**ML-DSA-65** — The primary post-quantum signature scheme. ML-DSA-65 is based on Module Learning With Errors (MLWE) hardness assumptions. It produces ~1.9 KB public keys and ~3.3 KB signatures — larger than ECDSA but computationally infeasible to break with a quantum computer running Shor's algorithm.

**Hybrid Signature** — In Phase 2, during the transition period, QDay will support hybrid signatures that combine an ML-DSA-65 signature with a standard ECDSA signature. Both must be valid for a transaction to be accepted. This ensures backward compatibility with existing tooling while layering in quantum resistance.

**Key Rotation** — In Phase 2, keys can be rotated on-chain without requiring users to move funds. The rotation process links the old public key to the new one via a signed update, preserving account history.

**Migration** — Phase 2 will introduce quantum-resistant accounts where a single BIP-39 mnemonic phrase derives both a legacy EVM (ECDSA) account and a new ML-DSA-65 account. Users will be able to migrate funds from the ECDSA account to the quantum-resistant account without creating a new mnemonic.
