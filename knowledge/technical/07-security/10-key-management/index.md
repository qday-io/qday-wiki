---
title: Key Management
draft: false
---

# Key Management

**Operator keys** — Sequencer, Aggregator, and Committer operator keys should be stored in an HSM or cloud KMS (AWS KMS, GCP Cloud HSM, HashiCorp Vault). Use separate keys for each service. Rotate keys at least quarterly.

**Mnemonic storage** — User wallets derive all keys from a BIP-39 mnemonic. Store mnemonics offline (paper, metal backup, or hardware wallet). In Phase 2, the same mnemonic derives both ECDSA and ML-DSA-65 keys — protecting the mnemonic protects both.

**Session key lifecycle** — Issue Session Keys with the shortest expiry that is practical for the use case. Revoke session keys immediately if suspicious agent activity is detected.
