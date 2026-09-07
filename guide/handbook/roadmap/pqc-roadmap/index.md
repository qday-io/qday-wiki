---
title: QDay PQC Roadmap
---

# QDay PQC Roadmap

## 1. Overall Strategy

QDay’s PQC strategy should evolve from a simple “PQC-enabled EVM chain” into a:

> **Quantum-Ready EVM Network with Account-Level Migration**

The core principle is not to determine when ECDSA must be removed, but to establish a migration path that allows existing users, accounts, applications, and infrastructure to progressively adopt post-quantum security.

The recommended migration model is:

```
Existing QDay Account
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
3. Enable QDay to eventually become a quantum-resistant network.

---



## 2. QDay PQC Roadmap

The roadmap is divided into six phases:


| Phase       | Target            | Core Objective                 | Key Deliverables                                                                  |
| ----------- | ----------------- | ------------------------------ | --------------------------------------------------------------------------------- |
| **Phase 0** | Existing          | Abelian Provides PQC           | L1 settlement & security anchor, quantum-resistant finality for state commitments |
| **Phase 1** | 2026 H2           | PQC Foundation                 | Crypto Agility, ML-DSA-65, PQC SDK                                                |
| **Phase 2** | 2026 H2 – 2027 H1 | PQC Execution Foundation       | AA Smart Account, PQC Precompile, PQC Verification                                |
| **Phase 3** | 2027 H1 – H2      | Hybrid Security                | ECDSA + PQC, Hybrid Transaction, Hybrid AA                                        |
| **Phase 4** | 2027 H2 – 2028    | PQC Migration & Infrastructure | PQC Credential, Account Migration, Bridge, Oracle, Governance                     |
| **Phase 5** | 2028+             | Full PQC-Native Network        | PQC-Native Account, Validator, Sequencer, Full Migration                          |


The most important transition is:

```
ECDSA
   ↓
ECDSA + PQC Hybrid
   ↓
PQC Native
```

The technical evolution is:

```
Abelian L1 PQC
       ↓
PQC Foundation
       ↓
AA Smart Wallet
       ↓
PQC Precompile
       ↓
Hybrid Security
       ↓
PQC Credential
       ↓
PQC Infrastructure
       ↓
PQC-Native
```

---



## 3. Phase 0 — Abelian Provides PQC



### Objective

Abelian serves as the L1 settlement and security anchor for QDay, providing a quantum-resistant finality layer for QDay state commitments.

Once a QDay state commitment is finalized on Abelian, the corresponding QDay history is cryptographically anchored to the L1 and cannot be altered without breaking the underlying cryptographic guarantees.

Abelian is the prerequisite for every later phase. Before QDay introduces EVM-layer PQC, confirmed state is already protected by this L1 finality path.

```
                    Abelian L1
                         │
            ┌────────────┼────────────┐
            │            │            │
     Settlement      Security     Quantum-resistant
       Anchor         Anchor         finality
            │            │            │
            └────────────┼────────────┘
                         │
              QDay State Commitment
                         │
              Cryptographically Anchored History
```



### 3.1 What Abelian Provides

- L1 settlement and security anchoring for QDay.
- A quantum-resistant finality layer for QDay state commitments.
- Cryptographic anchoring of QDay history after L1 finalization.
- Integrity of confirmed history: it cannot be altered without breaking the L1 cryptographic guarantees.
- The PQC primitives and operational experience that later QDay phases reuse.



### 3.2 Why This Is Phase 0

QDay should not treat PQC as an EVM-only upgrade. Even before accounts, precompiles, and credentials migrate, Abelian already gives QDay a quantum-resistant finality layer for state commitments.

The target is:

> **Abelian is QDay’s L1 settlement and security anchor. Finalized state commitments cannot be altered without breaking the underlying cryptographic guarantees.**

---



## 4. Phase 1 — PQC Foundation



### Objective

Build the cryptographic foundation before changing QDay’s user-facing transaction model.

```
                    QDay PQC Foundation
                           │
            ┌──────────────┼──────────────┐
            │              │              │
       Crypto Agility   ML-DSA-65     PQC SDK
            │              │              │
            └──────────────┼──────────────┘
                           │
                     PQC Framework
```



### 4.1 ML-DSA-65

ML-DSA-65 should be the primary PQC signature scheme for the first QDay implementation.

Key requirements:

- Standardized PQC signature algorithm.
- Native support in the QDay cryptographic layer.
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



### 4.2 Crypto Agility

QDay should **not** hard-code ML-DSA-65 into the protocol architecture.

The design should allow future algorithms to be introduced without redesigning the account, transaction, or infrastructure model.

Recommended abstraction:

```
SignatureScheme

- ECDSA
- ML-DSA-65/SLH-DSA/FN-DSA
- Hybrid
- Future-PQC
```

The strategic objective is:

> **QDay should be PQC-ready, not ML-DSA-locked.**



### 4.3 PQC SDK

Provide a unified developer-facing PQC SDK for cryptographic primitives:

- Key generation
- Signing
- Verification
- Hybrid signing
- Hybrid verification

PQC account creation, account upgrade, and credential management are **Phase 4** APIs. The Phase 1 SDK should expose the cryptographic primitives those later APIs will call, but it should not ship account-migration workflows yet.

Example:

```
createPQCWallet()
createHybridWallet()
signWithMLDSA()
verifyMLDSA()
createHybridSignature()
```

---



## 5. Phase 2 — PQC Execution Foundation



### Objective

Build and validate the core execution capabilities required for QDay to support PQC verification before introducing account-level migration.

The priority is to prove that QDay can reliably execute PQC verification through AA Smart Accounts and the PQC Precompile.

```
                     QDay PQC Execution
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



### 5.1 AA Smart Account Foundation

Account Abstraction should be introduced as the programmable account layer that can support multiple authentication mechanisms.

```
Smart Account
      │
      ├── ECDSA
      ├── ML-DSA
      ├── Hybrid
      └── Future PQC
```

At this stage, the objective is to establish the account architecture and verification interfaces. PQC Credential registration and full PQC account migration are intentionally deferred to Phase 4.

### 5.2 PQC Precompile

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



### 5.3 PQC Verification

Phase 2 should validate:

- ML-DSA-65 signature generation and verification.
- Smart Account integration.
- PQC Precompile correctness.
- Verification gas and execution performance.
- Compatibility with the zkEVM execution environment.

The target is:

> **QDay can reliably execute and verify PQC signatures.**



### Phase 2 Deliverables


| Component             | Target                                                                | Priority |
| --------------------- | --------------------------------------------------------------------- | -------- |
| AA Smart Account      | PQC-capable architecture                                              | Critical |
| PQC Precompile        | ML-DSA verification                                                   | Critical |
| PQC Verification      | Production-ready verification path                                    | Critical |
| zkEVM Integration     | Compatibility validation                                              | High     |
| Performance Benchmark | Gas / CPU / latency testing (example value via testing after Phase 1) | High     |




### Phase 2 Completion Criteria

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

> **QDay has a production-ready foundation for executing PQC verification without requiring immediate account migration.**

---



## 6. QDay Account Credential Model

PQC Credential is a **Phase 4** account migration mechanism. It is not part of the Phase 1 SDK, and it is not required by the Phase 2 execution foundation or Phase 3 hybrid transactions.

Phase 2 and Phase 3 should leave the account architecture open for this model. Users should not be required to register a PQC credential until Phase 4.

The Phase 4 migration path is:

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



### 6.1 Account Credentials

The QDay Smart Account can support multiple authentication credentials:

```
QDay Account
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

### 6.2 Why PQC Credential Is Introduced in Phase 4

PQC Credential should not be required before QDay has validated:

```
ML-DSA
   ↓
PQC Verification
   ↓
AA Smart Account
   ↓
Hybrid Transaction
```

Once these capabilities are production-ready, Phase 4 uses PQC Credential as the practical mechanism for existing accounts to adopt PQC without creating a completely new account and manually migrating all assets.

Instead of:

```
ECDSA Wallet
      ↓
Create New PQC Wallet
      ↓
Transfer Assets
```

QDay supports:

```
Existing Account
      ↓
Add PQC Credential
      ↓
Quantum-Ready Account
```



### 6.3 Security Modes

These modes describe the account’s authentication policy. Classic compatibility exists from Phase 2. Hybrid transaction signatures are validated in Phase 3. **PQC-Ready** (registered ML-DSA credential) and credential-based policy changes are Phase 4. PQC-Native is the Phase 5 target.

### Classic

```
ECDSA
   ↓
Transaction
```

Used primarily for legacy EVM compatibility.

### PQC-Ready (Phase 4)

```
ECDSA
  +
ML-DSA Credential
```

The account has a registered PQC credential but does not necessarily require every transaction to use both signatures. This state is created by Phase 4 credential registration, not by Phase 2 or Phase 3.

### Hybrid

```
ECDSA Signature
      +
ML-DSA Signature
      ↓
Transaction Valid
```

Phase 3 validates this as a production transaction format. Phase 4 can attach the same hybrid policy to an account that has registered a PQC credential.

### PQC-Native (Phase 5)

```
ML-DSA Signature
      ↓
Transaction Valid
```

This is the long-term target.

---



## 7. AA Smart Wallet as the PQC Migration Layer

Account Abstraction should not be treated merely as a wallet feature.

For QDay, **AA Smart Wallet can become the primary PQC migration layer**.

AA is introduced in Phase 2 as the programmable account layer. PQC Credentials are attached to that layer in Phase 4.

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

This allows QDay to introduce new signature schemes without forcing the entire ecosystem to immediately abandon EVM compatibility.

The recommended model is:

```
                    QDay Account
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

The Smart Account is the Phase 2 architecture. PQC Credentials are the Phase 4 migration mechanism that attaches to it.

Therefore:

> **AA + PQC = QDay Quantum-Ready Account Architecture**

---



## 8. Phase 3 — Hybrid Security

After the PQC execution foundation has been established, QDay can introduce a formal hybrid security model.

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

The account architecture can execute PQC verification, but PQC Credential registration and credential-based account migration are Phase 4 work and are not required in Phase 3.

### Level 2 — Hybrid

```
ECDSA Signature
        +
ML-DSA Signature
        ↓
Transaction Valid
```

This should become the **recommended transition security mode** for QDay.

### Level 3 — PQC Native

```
ML-DSA
   ↓
PQC-Native Account
```

This is the long-term target.

### Phase 3 Deliverables

- Hybrid transaction format.
- Hybrid AA verification.
- ECDSA + ML-DSA signature validation.
- Wallet support for hybrid signing.
- Gas and performance benchmarking.
- Compatibility testing with existing EVM applications.

The target is:

> **QDay can safely operate with ECDSA + ML-DSA hybrid security in production.**

---



## 9. Phase 4 — PQC Migration & Infrastructure



### Objective

Phase 4 is the **PQC migration and infrastructure phase**.

After QDay has established PQC execution in Phase 2 and validated hybrid security in Phase 3, Phase 4 introduces PQC Credential-based account migration and progressively protects QDay’s **critical protocol infrastructure**.

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



### 9.1 PQC Credential & Account Migration

PQC Credential becomes a production migration mechanism in Phase 4.

This is where account-level PQC adoption actually happens: existing accounts register an ML-DSA credential, optionally enable a hybrid policy, and can later upgrade to a PQC-native account. Phase 2 only proved that verification works. Phase 3 only proved that hybrid signatures work. Phase 4 is the first phase that changes the user’s account credentials.

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

Phase 4 SDK / account APIs include:

```
registerPQCCredential()
upgradeToPQCAccount()
rotatePQCCredential()
revokePQCCredential()
setAccountPolicy()
```

The key objective is:

> **Existing users can progressively adopt PQC without requiring disruptive asset migration.**



### Phase 4 Credential Deliverables


| Component           | Target                             | Priority |
| ------------------- | ---------------------------------- | -------- |
| PQC Credential      | Production-ready ML-DSA credential | Critical |
| Account Upgrade     | Existing account migration         | Critical |
| Credential Rotation | Secure key rotation                | High     |
| Credential Recovery | Recovery / emergency mechanism     | High     |
| Hybrid Policy       | ECDSA + ML-DSA policy              | Critical |




### 9.2 PQC QDay Bridge

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

### 9.3 PQC Oracle

QDay Price Oracle should progressively protect price-signing and administrative authorization paths.

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

### 9.4 PQC Governance

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



### 9.5 PQC Treasury and Admin

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

### 9.6 PQC Sequencer

After Bridge, Oracle, Governance, and Treasury have PQC protection, QDay should evaluate PQC signatures for Sequencer-level authorization.

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

Before production rollout, QDay should benchmark:

- Signature generation latency
- Signature verification latency
- CPU consumption
- Network bandwidth
- Batch / block size impact
- Storage overhead



### 9.7 PQC Validator

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

### Phase 4 Deliverables


| Component        | Target                | Priority |
| ---------------- | --------------------- | -------- |
| Bridge           | Hybrid → PQC          | Critical |
| Oracle           | Hybrid → PQC          | Critical |
| Governance       | Hybrid → PQC          | High     |
| Treasury / Admin | Hybrid → PQC          | High     |
| Sequencer        | PQC research → Hybrid | Medium   |
| Validator        | PQC research → Hybrid | Medium   |




### Phase 4 Completion Criteria

```
                QDay Infrastructure
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

> **All critical authorization paths in QDay have a production-ready PQC or hybrid security option.**

---



## 10. Phase 5 — Full PQC-Native Network



### Objective

Phase 5 is the long-term target in which PQC becomes a first-class security primitive across QDay’s account, protocol, and infrastructure layers.

The objective is not necessarily to remove ECDSA immediately. Instead, QDay should reach a state where PQC is the **default security path**, while ECDSA remains available as a compatibility mechanism where appropriate.

```
PQC-Ready
    ↓
Hybrid
    ↓
PQC-Native
```



### 10.1 PQC-Native Account

The target account model is:

```
PQC Smart Account
       │
       └── ML-DSA Credential
```

However, QDay should continue supporting:

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



### 10.2 PQC-Native Infrastructure

The target state is to protect the complete critical infrastructure stack:

```
                 QDay
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

### 10.3 PQC as the Default Security Model

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



### 10.4 zkEVM and PQC

QDay is a zkEVM network, so PQC integration should remain separated from the ZK circuit unless there is a clear performance and proving benefit.

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

This should remain a research and optimization direction rather than a prerequisite for QDay’s initial PQC deployment.

### 10.5 Long-Term Crypto Agility

Even in the PQC-Native phase, QDay should not define itself as an ML-DSA-only network.

```
                QDay PQC Framework
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

### 10.6 Phase 5 Completion Criteria

QDay reaches the PQC-Native stage when:

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
Quantum-Resistant QDay
```

---



## 11. Final QDay PQC Architecture

The target architecture should combine EVM compatibility, account-level migration, PQC execution capabilities, and progressive infrastructure migration.

```
                         QDay
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
                    PQC Precompile (Phase 2)   PQC Credential (Phase 4)
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



### Layer 2 — PQC Execution (Phase 2)

```
AA Smart Account
PQC Precompile
ML-DSA Verification
Hybrid Verification
```



### Layer 3 — Account Migration (Phase 4)

```
PQC Credential
Hybrid Account
PQC Account
```



### Layer 4 — PQC Infrastructure (Phase 4–5)

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
PQC Execution (AA + Precompile)
        ↓
Hybrid Security
        ↓
PQC Credential / Account Migration
        ↓
PQC Infrastructure
        ↓
PQC-Native QDay
```

---



## 12. Recommended Timeline



### Existing — Abelian Provides PQC

Abelian serves as the L1 settlement and security anchor for QDay, providing a quantum-resistant finality layer for QDay state commitments.

```
Abelian L1
     +
Settlement & security anchor
     +
Quantum-resistant finality
```

Target:

> **Once a QDay state commitment is finalized on Abelian, the corresponding history cannot be altered without breaking the underlying cryptographic guarantees.**

---



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

> **QDay establishes its PQC foundation.**

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

> **QDay can execute PQC verification in production.**

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

> **Critical QDay infrastructure becomes quantum-resistant.**

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

> **Quantum-Resistant QDay Network**

---



## 13. Strategic Positioning

The final QDay PQC strategy can be summarized as:

```
Inherit
   ↓
Prepare
   ↓
Upgrade
   ↓
Hybridize
   ↓
Migrate & Protect
   ↓
Go PQC Native
```

Or, more specifically:

```
Abelian PQC Finality
      ↓
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
PQC-Native QDay
```



### Migration Sequencing Principle

```
Phase 0: Inherit (PQC Finality)
        ↓
Phase 1: Prepare
        ↓
Phase 2: Enable
        ↓
Phase 3: Hybridize
        ↓
Phase 4: Migrate & Protect
        ↓
Phase 5: PQC Native
```

PQC Credential is deliberately introduced in Phase 4 because it is an **account migration mechanism**. AA, PQC Precompile, and PQC verification are Phase 2 execution capabilities. Hybrid signatures are a Phase 3 transition mechanism. None of those earlier phases should require users to register a PQC credential.

### Core Principle

> **QDay should not simply replace ECDSA with ML-DSA. It should build an upgradeable cryptographic architecture that allows existing accounts and infrastructure to progressively transition from classical cryptography to hybrid and finally post-quantum security.**
