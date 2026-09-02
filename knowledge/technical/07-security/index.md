---
title: Security
draft: false
---

# Security

QDAY2's security model — from post-quantum cryptography to smart contract practices, AI agent authorization, and operational security.

## Security Overview

QDAY2's security design rests on three pillars:

**Quantum-resistant foundation** — All ledger finality is anchored to the Abelian Layer 1, which uses lattice-based cryptography (LWE / Ring-LWE) resistant to quantum computers. No quantum algorithm — including Shor's algorithm — is known to break these assumptions.

**Defense in depth** — Multiple independent security layers protect user funds: ZK proof integrity at the L2 layer, Timelock controls on privileged contract operations, a DAO-governed halt mechanism for emergency response, and ML-DSA-65 post-quantum signing for Phase 2 accounts.

**Minimal trust surface** — QDAY2 inherits the Polygon CDK's extensively audited contract codebase. QDAY-specific extensions (Committer, Record Contracts, Abelian Plus Node) are scoped narrowly and do not hold user funds.

## Smart Contract Security

**Polygon CDK lineage** — The core zkEVM contracts (`PolygonZkEVMBridge`, `PolygonRollupManager`, `GlobalExitRoot`, `Verifier`) are forks of Polygon's CDK contracts, which have been independently audited by multiple security firms. QDAY-specific modifications are minimal and concentrated in the Committer and Record Contracts.

**Timelock** — All privileged operations on `RollupManager` (contract upgrades, parameter changes, emergency pauses) are executed through a `Timelock` contract with a minimum 24-hour delay on mainnet. This gives the community time to review and, if necessary, veto a change before it takes effect.

**ProxyAdmin** — Upgradeable proxy contracts use a `ProxyAdmin` owned by the DAO Timelock. No single private key can unilaterally upgrade a core contract.

**Immutable Verifier** — The `Verifier` contract that checks ZK proofs is non-upgradeable. Replacing the verifier requires deploying a new `RollupManager` and migrating state — a process that requires full DAO approval.

## Bridge Security

**Merkle proof verification** — Bridge claims on the destination chain require a Merkle proof against the committed `GlobalExitRoot`. A claim without a valid proof is rejected. An attacker cannot fabricate a valid proof without breaking the hash function (SHA-256), which is quantum-safe.

**Double-spend protection** — The bridge tracks a `nullifier` for each bridge event. Once claimed, the nullifier is marked as spent and the same event cannot be claimed again.

**PQZK Bridge** — The QDAY2 ↔ Abelian bridge is anchored by the Committer's status root submissions to the Abelian Chain. Forging a status root submission would require breaking Abelian's lattice-based cryptography.

## Wallet Security

**EOA wallets** — Standard ECDSA wallets (MetaMask, hardware wallets) are fully supported in Phase 1. Users should follow standard Ethereum wallet security practices: hardware wallets for significant holdings, unique seed phrases stored offline.

**Smart Account wallets** — ERC-4337 Smart Accounts add security features not available to EOAs: multi-signature requirements, spending limits, session key expiry, and social recovery. Compromising a single EOA signer does not automatically compromise a Smart Account with a threshold-based ownership policy.

**Post-quantum wallets (Phase 2)** — In Phase 2, users can create ML-DSA-65 accounts that are not vulnerable to quantum attacks. A single BIP-39 mnemonic derives both an ECDSA account and an ML-DSA-65 account. Users should migrate holdings to the ML-DSA-65 account before Q-Day arrives.

## RPC Security

- Rate-limit public RPC endpoints to prevent DoS and transaction spam.
- Expose `eth_sendRawTransaction` only; consider restricting `debug_*` and `admin_*` endpoints on public nodes.
- Use TLS for all RPC connections. Never expose the internal Sequencer API to the public internet.
- Monitor for unusual transaction patterns (mempool flooding, abnormally large batches) and alert accordingly.

## Infrastructure Security

- Store all operator private keys in an HSM or cloud KMS. Rotate keys regularly.
- Run `cdk-erigon`, `cdk-node`, and the Prover in isolated containers with minimal Linux capabilities.
- Restrict network access: the Sequencer's block-production API should be reachable only from `cdk-node`; the Prover's gRPC endpoint only from the Aggregator.
- Enable PostgreSQL SSL and restrict database access to application containers only.
- Keep all software up to date; subscribe to security advisories for `reth`, `lighthouse`, and Go dependencies.

## Post-Quantum Security

**ML-DSA-65 (FIPS 204)** — QDAY2 Phase 2 uses Module Lattice-based Digital Signature Algorithm at security level 3 (equivalent to 192-bit classical security). ML-DSA-65 is standardized by NIST as FIPS 204 (August 2024). Its security is based on the hardness of the Module Learning With Errors (MLWE) problem, which no known quantum algorithm can solve efficiently.

**Why ECDSA is insufficient** — ECDSA signatures rely on the elliptic-curve discrete logarithm problem. Shor's algorithm running on a sufficiently large quantum computer can solve this in polynomial time. A quantum computer with ~4,000 logical qubits could break a 256-bit ECDSA key. "Harvest now, decrypt later" attacks mean adversaries may be collecting signed transactions today with the intent to break them when quantum hardware matures.

**Hybrid signatures** — During the Phase 1 → Phase 2 transition, QDAY2 accepts hybrid signatures containing both an ML-DSA-65 signature and an ECDSA signature. Both must be valid. This ensures backward compatibility while adding quantum resistance immediately. As tooling matures, the ECDSA requirement can be dropped by governance vote.

**Key isolation** — The ML-DSA-65 account key and the ECDSA account key are derived independently from the same mnemonic. Compromise of the ECDSA key does not expose the ML-DSA-65 key.

## AI Agent Security

**Session key boundaries** — Every AI agent operates exclusively through a Session Key issued by the user's Smart Account. The Session Key specifies: allowed contract addresses, allowed function selectors, per-call value limit, cumulative spend limit, and expiry timestamp. The `EntryPoint` enforces these limits at verification time — the agent's own code cannot circumvent them.

**No privileged access** — Agents never hold the user's master signing key. If an agent is compromised, the attacker can only act within the Session Key's scope. Users can revoke a Session Key at any time by calling the `SessionKeyManager` on their Smart Account.

**Intent auditing** — All agent intents and the transactions they generate are recorded on-chain in the Intent Registry. Users can audit everything an agent has done, and the record is immutable.

**MCP authentication** — Connections from agents to MCP servers are authenticated using the on-chain agent identity. MCP requests outside the agent's authorized scope are rejected server-side.

## Payment Security

**On-chain enforcement** — Payment amounts, recipient whitelists, and expiry are enforced by the Payment contract on-chain. Neither the Payment Service (off-chain API) nor the merchant can alter payment terms after the payer has committed.

**Agent payment limits** — Session Keys for AI payment agents carry strict spend limits. An agent cannot initiate a payment larger than its `maxSinglePayment` or exceed its `maxDailySpend`, regardless of what external instructions it receives.

**Webhook signature verification** — Payment Service webhooks are signed with HMAC-SHA256. Merchants must verify the signature before acting on webhook data to prevent replay and spoofing attacks.

**Subscription cancellation** — Subscriptions are implemented as revocable Session Keys. The subscriber can revoke the merchant's payment authorization at any time by calling `SessionKeyManager.revokeSessionKey()`.

## Key Management

**Operator keys** — Sequencer, Aggregator, and Committer operator keys should be stored in an HSM or cloud KMS (AWS KMS, GCP Cloud HSM, HashiCorp Vault). Use separate keys for each service. Rotate keys at least quarterly.

**Mnemonic storage** — User wallets derive all keys from a BIP-39 mnemonic. Store mnemonics offline (paper, metal backup, or hardware wallet). In Phase 2, the same mnemonic derives both ECDSA and ML-DSA-65 keys — protecting the mnemonic protects both.

**Session key lifecycle** — Issue Session Keys with the shortest expiry that is practical for the use case. Revoke session keys immediately if suspicious agent activity is detected.

## Audit Reports

_Audit reports will be published here as they are completed. Core Polygon CDK contracts have been audited by independent firms; QDAY2-specific extensions are undergoing audit._

## Bug Bounty

QDAY2 operates a bug bounty program for responsible disclosure of security vulnerabilities. Rewards are proportional to severity (Critical / High / Medium / Low).

_Details and scope will be published at the launch of the bug bounty program._

## Responsible Disclosure

If you discover a security vulnerability in QDAY2, please disclose it responsibly:

1. **Do not** publish the vulnerability publicly until a fix is deployed.
2. Email the QDAY2 security team at the address listed on the official website.
3. Include a clear description of the vulnerability, reproduction steps, and your estimated impact.
4. Allow a minimum of 90 days for the team to investigate and deploy a fix before public disclosure.

The QDAY2 team commits to: acknowledging receipt within 48 hours, providing a remediation timeline within 14 days, and crediting the researcher (with permission) in the release notes.
