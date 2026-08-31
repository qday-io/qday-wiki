---
title: QDAY PQC Roadmap
---

# QDAY PQC Roadmap

## 1. Overall Strategy

QDAY’s PQC strategy should evolve from a simple “PQC-enabled EVM chain” into a:

> **Quantum-Ready EVM Network with Account-Level Migration**

The core principle is not to determine when ECDSA must be removed, but to establish a migration path that allows existing users, accounts, applications, and infrastructure to progressively adopt post-quantum security.

The recommended migration model is:

```
Existing QDAY Account
        │
        │ Upgrade
        ↓
Quantum-Ready Account
        │
        │ Optional Migration
        ↓
Hybrid Account
        │
        │ Future Upgrade
        ↓
PQC-Native Account
```

This approach addresses three objectives:

1. Preserve today’s EVM compatibility.
2. Provide a practical migration path to PQC.
3. Enable QDAY to eventually become a quantum-resistant network.

---

## 2. QDAY PQC Roadmap

The roadmap is divided into five phases:

| Phase | Target | Core Objective | Key Deliverables |
| --- | --- | --- | --- |
| **Phase 0** | 2026 H2 | PQC Foundation | Crypto Agility, ML-DSA-65, PQC SDK |
| **Phase 1** | 2026 H2 – 2027 H1 | PQC Execution Foundation | AA Smart Account, PQC Precompile, PQC Verification |
| **Phase 2** | 2027 H1 – H2 | Hybrid Security | ECDSA + ML-DSA, Hybrid Transaction, Hybrid AA |
| **Phase 3** | 2027 H2 – 2028 | PQC Migration & Infrastructure | PQC Credential, Account Migration, Bridge, Oracle, Governance |
| **Phase 4** | 2028+ | PQC-Native Network | PQC-Native Account, Validator, Sequencer, Full Migration |

The most important transition is:

```
ECDSA
   ↓
ECDSA + ML-DSA Hybrid
   ↓
PQC Native
```

The technical evolution is:

```
AA Smart Wallet
       ↓
PQC Credential Layer
       ↓
PQC Precompile
       ↓
PQC Infrastructure
       ↓
PQC-Native QDAY
```

---

## 3. Phase 0 — PQC Foundation

### Objective

Build the cryptographic foundation before changing QDAY’s user-facing transaction model.

```
                    QDAY PQC Foundation
                           │
            ┌──────────────┼──────────────┐
            │              │              │
       Crypto Agility   ML-DSA-65     PQC SDK
            │              │              │
            └──────────────┼──────────────┘
                           │
                     PQC Framework
```

### 3.1 ML-DSA-65

ML-DSA-65 should be the primary PQC signature scheme for the first QDAY implementation.

Key requirements:

- Standardized PQC signature algorithm.
- Native support in the QDAY cryptographic layer.
- Support for wallet signing and verification.
- Support for Smart Account verification.
- Support for future hybrid signatures.

The implementation should be abstracted behind a common signature interface:

```
SignatureScheme
    │
    ├── ECDSA
    ├── ML-DSA-65
    ├── Hybrid
    └── Future-PQC
```

### 3.2 Crypto Agility

QDAY should **not** hard-code ML-DSA-65 into the protocol architecture.

The design should allow future algorithms to be introduced without redesigning the account, transaction, or infrastructure model.

Recommended abstraction:

```
SignatureScheme

- ECDSA
- ML-DSA-65
- Hybrid
- Future-PQC
```

The strategic objective is:

> **QDAY should be PQC-ready, not ML-DSA-locked.**

### 3.3 PQC SDK

Provide a unified developer-facing PQC SDK for:

- Key generation
- Signing
- Verification
- Hybrid signing
- Hybrid verification
- PQC account creation
- Account upgrade
- Credential management

Example:

```
createPQCWallet()
createHybridWallet()
signWithMLDSA()
verifyMLDSA()
createHybridSignature()
upgradeToPQCAccount()
```

---

## 4. Phase 1 — PQC Execution Foundation

### Objective

Build and validate the core execution capabilities required for QDAY to support PQC verification before introducing account-level migration.

The priority is to prove that QDAY can reliably execute PQC verification through AA Smart Accounts and the PQC Precompile.

```
                     QDAY PQC Execution
                           │
              ┌────────────┼────────────┐
              │            │            │
         AA Smart       PQC         PQC
          Account     Precompile  Verification
              │            │            │
              └────────────┼────────────┘
                           │
                    PQC Execution Layer
```

### 4.1 AA Smart Account Foundation

Account Abstraction should be introduced as the programmable account layer that can support multiple authentication mechanisms.

```
Smart Account
      │
      ├── ECDSA
      ├── ML-DSA
      ├── Hybrid
      └── Future PQC
```

At this stage, the objective is to establish the account architecture and verification interfaces. Full PQC account migration is intentionally deferred to Phase 3.

### 4.2 PQC Precompile

The PQC Precompile should provide efficient native verification for PQC signatures.

Potential functions include:

```
ML-DSA Verify
Hybrid Verify
```

Conceptually:

```
ML-DSA Verify

Input:
    publicKey
    message
    signature

Output:
    true / false
```

The precompile provides:

- Native execution.
- Lower verification cost than pure Solidity implementations.
- Better performance.
- Reusable verification for Smart Accounts.
- A common foundation for Bridge, Oracle, and Governance authorization.
- A common foundation for future PQC applications.

### 4.3 PQC Verification

Phase 1 should validate:

- ML-DSA-65 signature generation and verification.
- Smart Account integration.
- PQC Precompile correctness.
- Verification gas and execution performance.
- Compatibility with the zkEVM execution environment.

The target is:

> **QDAY can reliably execute and verify PQC signatures.**

### Phase 1 Deliverables

| Component | Target | Priority |
| --- | --- | --- |
| AA Smart Account | PQC-capable architecture | Critical |
| PQC Precompile | ML-DSA verification | Critical |
| PQC Verification | Production-ready verification path | Critical |
| zkEVM Integration | Compatibility validation | High |
| Performance Benchmark | Gas / CPU / latency testing | High |

### Phase 1 Completion Criteria

```
AA Smart Account
       +
PQC Precompile
       +
ML-DSA Verification
       ↓
PQC Execution Foundation
```

The target is:

> **QDAY has a production-ready foundation for executing PQC verification without requiring immediate account migration.**

---

## 5. QDAY Account Credential Model

PQC Credential is positioned as an **account migration mechanism**, not as the initial PQC execution foundation.

It is therefore introduced after Phase 1 has established PQC verification and after Phase 2 has validated hybrid transactions.

The migration path becomes:

```
Existing ECDSA Account
        │
        ↓
   Add PQC Credential
        │
        ↓
   Hybrid Account
        │
        ↓
   PQC-Native Account
```

### 5.1 Account Credentials

The QDAY Smart Account can support multiple authentication credentials:

```
QDAY Account
     │
     ├── ECDSA Credential
     │
     ├── ML-DSA Credential
     │
     └── Policy
```

For example:

```
Account #123

Credentials:

ECDSA:
    0x1234...

ML-DSA:
    ML-DSA public key...

Policy:

Mode = Hybrid
```

The account remains the primary identity, while its authentication credentials can evolve.

### 5.2 Why PQC Credential Is Introduced Later

PQC Credential should not be required before QDAY has validated:

```
ML-DSA
   ↓
PQC Verification
   ↓
AA Smart Account
   ↓
Hybrid Transaction
```

Once these capabilities are production-ready, PQC Credential provides a practical mechanism for existing accounts to adopt PQC without creating a completely new account and manually migrating all assets.

Instead of:

```
ECDSA Wallet
      ↓
Create New PQC Wallet
      ↓
Transfer Assets
```

QDAY supports:

```
Existing Account
      ↓
Add PQC Credential
      ↓
Quantum-Ready Account
```

### 5.3 Security Modes

### Classic

```
ECDSA
   ↓
Transaction
```

Used primarily for legacy EVM compatibility.

### PQC-Ready

```
ECDSA
  +
ML-DSA Credential
```

The account has a registered PQC credential but does not necessarily require every transaction to use both signatures.

### Hybrid

```
ECDSA Signature
      +
ML-DSA Signature
      ↓
Transaction Valid
```

This provides protection from both classical and quantum threats during the transition period.

### PQC-Native

```
ML-DSA Signature
      ↓
Transaction Valid
```

This is the long-term target.

---

## 6. AA Smart Wallet as the PQC Migration Layer

Account Abstraction should not be treated merely as a wallet feature.

For QDAY, **AA Smart Wallet can become the primary PQC migration layer**.

Traditional EOA architecture:

```
EOA
 │
 └── ECDSA
       │
       └── Ethereum Transaction Model
```

AA-based architecture:

```
Smart Account
      │
      ├── ECDSA
      ├── ML-DSA
      ├── Hybrid
      ├── Multisig
      └── Future PQC
```

This allows QDAY to introduce new signature schemes without forcing the entire ecosystem to immediately abandon EVM compatibility.

The recommended model is:

```
                    QDAY Account
                         │
                 Smart Account
                         │
          ┌──────────────┼──────────────┐
          │              │              │
        ECDSA          Hybrid          PQC
          │              │              │
       Legacy        Migration       Future
                         │
                         ↓
                  PQC Credentials
```

Therefore:

> **AA + PQC = QDAY Quantum-Ready Account Architecture**

---

## 7. Phase 2 — Hybrid Security

After the PQC execution foundation has been established, QDAY can introduce a formal hybrid security model.

### Objective

Validate ECDSA + ML-DSA as a production-ready transition mechanism before beginning broad account migration.

```
ECDSA
   +
ML-DSA
   ↓
Hybrid Transaction
```

### Security Levels

```
Level 0
ECDSA Only

Level 1
PQC-Capable Account

Level 2
ECDSA + ML-DSA Signature

Level 3
ML-DSA Only
```

### Level 0 — ECDSA

```
ECDSA
```

Purpose:

- Maximum EVM compatibility.
- Support existing wallets and applications.
- Legacy mode.

### Level 1 — PQC Capable

```
Smart Account
+
PQC Verification Capability
```

The account architecture can execute PQC verification, but PQC Credential-based migration is not yet required.

### Level 2 — Hybrid

```
ECDSA Signature
        +
ML-DSA Signature
        ↓
Transaction Valid
```

This should become the **recommended transition security mode** for QDAY.

### Level 3 — PQC Native

```
ML-DSA
   ↓
PQC-Native Account
```

This is the long-term target.

### Phase 2 Deliverables

- Hybrid transaction format.
- Hybrid AA verification.
- ECDSA + ML-DSA signature validation.
- Wallet support for hybrid signing.
- Gas and performance benchmarking.
- Compatibility testing with existing EVM applications.

The target is:

> **QDAY can safely operate with ECDSA + ML-DSA hybrid security in production.**

---

## 8. Phase 3 — PQC Migration & Infrastructure

### Objective

Phase 3 is the **PQC migration and infrastructure phase**.

After QDAY has established PQC execution in Phase 1 and validated hybrid security in Phase 2, Phase 3 introduces PQC Credential-based account migration and progressively protects QDAY’s **critical protocol infrastructure**.

The objective is to protect the components that can control, authorize, or influence high-value assets and protocol state.

The migration priority is:

```
Smart Account
      ↓
Bridge
      ↓
Oracle
      ↓
Governance
      ↓
Treasury / Admin
      ↓
Sequencer
      ↓
Validator
```

The principle is:

> **Protect the highest-value authorization paths first, then progressively extend PQC protection to consensus infrastructure.**

### 8.1 PQC Credential & Account Migration

PQC Credential becomes a production migration mechanism in Phase 3.

### Migration Model

```
Existing ECDSA Account
        ↓
Register ML-DSA Credential
        ↓
Quantum-Ready Account
        ↓
Enable Hybrid Policy
        ↓
Hybrid Account
        ↓
Future Upgrade
        ↓
PQC-Native Account
```

The migration should support:

- ML-DSA public-key registration.
- Credential ownership verification.
- Credential rotation.
- Credential revocation.
- Account policy updates.
- Hybrid authorization.
- Recovery mechanisms.
- Backward compatibility with ECDSA.

The key objective is:

> **Existing users can progressively adopt PQC without requiring disruptive asset migration.**

### Phase 3 Credential Deliverables

| Component | Target | Priority |
| --- | --- | --- |
| PQC Credential | Production-ready ML-DSA credential | Critical |
| Account Upgrade | Existing account migration | Critical |
| Credential Rotation | Secure key rotation | High |
| Credential Recovery | Recovery / emergency mechanism | High |
| Hybrid Policy | ECDSA + ML-DSA policy | Critical |

### 8.2 PQC Bridge

The Bridge should be one of the highest-priority PQC components because bridge authorization keys can control large amounts of cross-chain assets.

### Current Model

```
Withdrawal Request
       ↓
Relayer
       ↓
ECDSA Signature
       ↓
Bridge Authorization
```

### Hybrid Model

```
Withdrawal Request
       ↓
Relayer
       │
       ├── ECDSA Signature
       └── ML-DSA Signature
              ↓
       Hybrid Authorization
              ↓
           Bridge
```

### Target Model

```
PQC Relayer
      ↓
ML-DSA Authorization
      ↓
Bridge
```

Bridge PQC migration should cover:

- Relayer authorization
- Withdrawal authorization
- Admin authorization
- Emergency controls
- Bridge configuration changes
- Signer rotation
- Key recovery

The bridge should also support credential rotation so that PQC keys can be introduced without redesigning the entire bridge protocol.

### 8.3 PQC Oracle

QDAY Price Oracle should progressively protect price-signing and administrative authorization paths.

### Current Architecture

```
OracleDataNode
       ↓
OracleValidatorNode
       ↓
Price Proof
       ↓
FeedPriceContract
```

### Hybrid Architecture

```
OracleDataNode
       ↓
OracleValidatorNode
       │
       ├── ECDSA
       └── ML-DSA
              ↓
       Hybrid Price Proof
              ↓
       FeedPriceContract
```

PQC protection should cover:

- Oracle validator signatures
- Price signer
- PriceProof authorization
- Manual Override
- Admin controls
- Signer rotation

The goal is to prevent a compromised classical signing key from becoming a single point of failure for price manipulation.

### 8.4 PQC Governance

Governance controls protocol-level permissions and upgrades, so it should progressively adopt the same hybrid authorization model.

```
Governance Proposal
        ↓
ECDSA + ML-DSA
        ↓
Governance Verification
        ↓
Timelock / Execution
        ↓
Protocol Change
```

Priority governance operations include:

- Protocol upgrades
- Validator management
- Bridge configuration
- Treasury management
- Emergency administration
- Consensus parameter changes

### 8.5 PQC Treasury and Admin

High-value treasury and privileged administrator accounts should migrate before general infrastructure.

Recommended model:

```
Treasury / Admin
       │
       ├── ECDSA
       ├── ML-DSA
       └── Multisig Policy
```

A stronger configuration can require:

```
ECDSA + ML-DSA
        +
     Multisig
```

This provides defense in depth during the transition period.

### 8.6 PQC Sequencer

After Bridge, Oracle, Governance, and Treasury have PQC protection, QDAY should evaluate PQC signatures for Sequencer-level authorization.

Potential model:

```
Sequencer
    ↓
Block / Batch
    ↓
ECDSA + ML-DSA
    ↓
Sequencer Authorization
```

Before production rollout, QDAY should benchmark:

- Signature generation latency
- Signature verification latency
- CPU consumption
- Network bandwidth
- Batch / block size impact
- Storage overhead

### 8.7 PQC Validator

Validator signatures and attestations should eventually support PQC.

```
Validator
    ↓
Attestation
    ↓
ML-DSA / Hybrid Signature
    ↓
Consensus
```

Because PQC signatures are significantly larger than ECDSA signatures, validator migration should be introduced only after performance and network-impact testing.

### Phase 3 Deliverables

| Component | Target | Priority |
| --- | --- | --- |
| Bridge | Hybrid → PQC | Critical |
| Oracle | Hybrid → PQC | Critical |
| Governance | Hybrid → PQC | High |
| Treasury / Admin | Hybrid → PQC | High |
| Sequencer | PQC research → Hybrid | Medium |
| Validator | PQC research → Hybrid | Medium |

### Phase 3 Completion Criteria

```
                QDAY Infrastructure
                       │
        ┌──────────────┼──────────────┐
        │              │              │
      Bridge         Oracle       Governance
        │              │              │
        └──────────────┼──────────────┘
                       │
                 PQC Security
                       │
                Critical Paths
```

The target is:

> **All critical authorization paths in QDAY have a production-ready PQC or hybrid security option.**

---

## 9. Phase 4 — PQC-Native Network

### Objective

Phase 4 is the long-term target in which PQC becomes a first-class security primitive across QDAY’s account, protocol, and infrastructure layers.

The objective is not necessarily to remove ECDSA immediately. Instead, QDAY should reach a state where PQC is the **default security path**, while ECDSA remains available as a compatibility mechanism where appropriate.

```
PQC-Ready
    ↓
Hybrid
    ↓
PQC-Native
```

### 9.1 PQC-Native Account

The target account model is:

```
PQC Smart Account
       │
       └── ML-DSA Credential
```

However, QDAY should continue supporting:

```
Legacy ECDSA Account
Hybrid Account
PQC-Native Account
```

This creates a long-term compatibility model:

```
Legacy
   ↓
Hybrid
   ↓
PQC Native
```

### 9.2 PQC-Native Infrastructure

The target state is to protect the complete critical infrastructure stack:

```
                 QDAY
                  │
       ┌──────────┼──────────┐
       │          │          │
    Account     Bridge     Oracle
       │          │          │
       └──────────┼──────────┘
                  │
             Governance
                  │
             Treasury
                  │
             Sequencer
                  │
             Validator
```

Each component should support PQC credentials, key rotation, and cryptographic agility.

### 9.3 PQC as the Default Security Model

The long-term user experience should evolve toward:

```
New Account
     ↓
PQC-Native Smart Account
     ↓
ML-DSA
```

Hybrid mode remains available for applications that require classical cryptographic compatibility.

Recommended default hierarchy:

```
PQC Native     ← Default for new accounts
Hybrid         ← Recommended compatibility mode
ECDSA          ← Legacy compatibility
```

### 9.4 zkEVM and PQC

QDAY is a zkEVM network, so PQC integration should remain separated from the ZK circuit unless there is a clear performance and proving benefit.

### Initial Model

```
Transaction
     ↓
PQC Precompile
     ↓
Execution
     ↓
State Transition
     ↓
zk Proof
```

This avoids making ML-DSA verification a mandatory part of the initial ZK circuit.

### Long-Term Research

```
ML-DSA
   ↓
ZK-Friendly Verification
   ↓
ZK Circuit
   ↓
Succinct PQ Proof
```

This should remain a research and optimization direction rather than a prerequisite for QDAY’s initial PQC deployment.

### 9.5 Long-Term Crypto Agility

Even in the PQC-Native phase, QDAY should not define itself as an ML-DSA-only network.

```
                QDAY PQC Framework
                       │
          ┌────────────┼────────────┐
          │            │            │
       ML-DSA       Hybrid      Future PQC
          │            │            │
          └────────────┼────────────┘
                       │
                 Crypto Agility
```

Future PQC algorithms should be introducible through protocol upgrades without requiring a fundamental redesign of the account or infrastructure architecture.

### 9.6 Phase 4 Completion Criteria

QDAY reaches the PQC-Native stage when:

- PQC-native accounts are production-ready.
- PQC is the default security option for new accounts.
- Critical infrastructure supports PQC authorization.
- Bridge and Oracle have PQC-native security.
- Governance and Treasury support PQC-native control.
- Sequencer and Validator PQC support has been production-validated where required.
- ECDSA remains available only where compatibility requires it.
- Crypto Agility allows future PQC algorithm upgrades.

The final state is:

```
PQC-Native Account
        +
PQC-Native Infrastructure
        +
Crypto Agility
        +
EVM Compatibility
        +
zkEVM
        ↓
Quantum-Resistant QDAY
```

---

## 10. Final QDAY PQC Architecture

The target architecture should combine EVM compatibility, account-level migration, PQC execution capabilities, and progressive infrastructure migration.

```
                         QDAY
                          │
              Quantum-Ready EVM
                          │
          ┌───────────────┴────────────────┐
          │                                │
     EVM Compatibility               PQC Framework
          │                                │
     ECDSA / Legacy                Crypto Agility
                                           │
                         ┌─────────────────┼─────────────────┐
                         │                 │                 │
                      ML-DSA            Hybrid          Future PQC
                         │                 │                 │
                         └─────────────────┼─────────────────┘
                                           │
                                    AA Smart Account
                                           │
                              ┌────────────┴────────────┐
                              │                         │
                       PQC Credential             PQC Precompile
                              │                         │
                              └────────────┬────────────┘
                                           │
                    ┌──────────────────────┼──────────────────────┐
                    │                      │                      │
                 Wallet                  Bridge                 Oracle
                    │                      │                      │
                    └──────────────────────┼──────────────────────┘
                                           │
                                      Governance
                                           │
                                      Sequencer
                                           │
                                      Validator
                                           │
                                         zkEVM
                                           │
                                      Abelian L1
```

The architecture has four major layers:

### Layer 1 — Compatibility

```
ECDSA
EVM
Existing DApps
Existing Wallets
```

### Layer 2 — Account Migration

```
AA Smart Account
PQC Credential
Hybrid Account
PQC Account
```

### Layer 3 — PQC Execution

```
PQC Precompile
ML-DSA Verification
Hybrid Verification
```

### Layer 4 — PQC Infrastructure

```
Bridge
Oracle
Governance
Treasury
Sequencer
Validator
```

The migration direction is:

```
ECDSA Compatibility
        ↓
PQC-Ready Account
        ↓
Hybrid Security
        ↓
PQC Infrastructure
        ↓
PQC-Native QDAY
```

---

## 11. Recommended Timeline

### 2026 H2 — Prepare

Focus on building the foundation:

```
Crypto Agility
      +
ML-DSA-65
      +
PQC SDK
      +
AA Architecture
      +
PQC Verification
```

Target:

> **QDAY establishes its PQC foundation.**

---

### 2027 H1 — Enable

Establish production PQC execution:

```
AA Smart Account
       +
PQC Precompile
       +
ML-DSA Verification
```

Deliverables:

- PQC Smart Account architecture
- PQC Precompile
- ML-DSA verification
- PQC execution benchmarks
- zkEVM compatibility validation

Target:

> **QDAY can execute PQC verification in production.**

---

### 2027 H2 — Hybrid

Introduce hybrid transaction security:

```
ECDSA
   +
ML-DSA
   ↓
Hybrid Transaction
```

Deliverables:

- Hybrid Wallet
- Hybrid AA
- Hybrid Account
- Hybrid Transaction
- Hybrid Bridge
- Hybrid Oracle

Target:

> **Hybrid becomes the recommended transition security mode.**

---

### 2028 — PQC Migration & Infrastructure

First enable account-level PQC migration, then progressively protect critical infrastructure:

```
PQC Credential / Account Migration
 ↓
Bridge
 ↓
Oracle
 ↓
Governance
 ↓
Treasury
 ↓
Sequencer
 ↓
Validator
```

Target:

> **Critical QDAY infrastructure becomes quantum-resistant.**

---

### 2028+ — PQC Native

Final architecture:

```
PQC-Native Account
        +
PQC-Native Infrastructure
        +
Crypto Agility
        +
EVM Compatibility
```

Target:

> **Quantum-Resistant QDAY Network**

---

## 12. Strategic Positioning

The final QDAY PQC strategy can be summarized as:

```
Prepare
   ↓
Upgrade
   ↓
Hybridize
   ↓
Protect Infrastructure
   ↓
Go PQC Native
```

Or, more specifically:

```
Crypto Agility
      ↓
PQC Execution
      ↓
ECDSA + ML-DSA
      ↓
PQC Credential
      ↓
Account Migration
      ↓
PQC Wallet / Bridge / Oracle
      ↓
PQC Infrastructure
      ↓
PQC-Native QDAY
```

### Migration Sequencing Principle

```
Phase 0: Prepare
        ↓
Phase 1: Enable
        ↓
Phase 2: Hybridize
        ↓
Phase 3: Migrate & Protect
        ↓
Phase 4: PQC Native
```

PQC Credential is deliberately introduced in Phase 3 because it is an **account migration mechanism**, while AA, PQC Precompile, and PQC verification are execution capabilities that must be established earlier.

### Core Principle

> **QDAY should not simply replace ECDSA with ML-DSA. It should build an upgradeable cryptographic architecture that allows existing accounts and infrastructure to progressively transition from classical cryptography to hybrid and finally post-quantum security.**
