---
sidebar_position: 57
sidebar_label: Whitepaper
---
# QDay

## The trust layer behind every agentic transaction

**OCTOBER 2026**
**Version 2.3**

---

**Abstract:** QDay represents a groundbreaking advancement in blockchain infrastructure, offering the world's first quantum-resistant, EVM-compatible network designed specifically to secure digital assets and power the emerging agentic economy.

As automated machine traffic overtakes human web activity and quantum hardware advances accelerate past historical estimates, legacy blockchain rails face an existential cryptographic and operational bottleneck.

QDay solves both challenges in a single unified architecture. Built on a modular Polygon CDK stack, QDay provides sub-second transaction execution, sub-cent fees, high TPS throughput, gas abstraction via a paymaster engine, native ERC-4337 smart contract wallets, ERC-8004 on-chain agent identity, and x402 micropayment primitives denominated in a native, fiat-backed stablecoin. Long-term state settlement and finality are anchored in lattice-based post-quantum cryptography on the Abelian Layer 1, complemented by a progressive account migration path toward a native signature scheme that will be post-quantum and crypto-agile.

Adopting a comprehensive ecosystem approach, QDay includes core DeFi applications, cross-chain bridges, and enhanced payment capabilities, creating a complete quantum-resistant solution for the blockchain environment. The platform's token economic model ensures long-term sustainability and incentivizes broad network participation.

This paper establishes the comprehensive technical, economic, cryptographic, and operational specification for QDay.

---

## VERSION HISTORY

| Version | Date | Changes Made | Author |
|---|---|---|---|
| 1.0 | 29/07/2024 | Document Creation | Duncan W.<br />Danny L. |
| 1.1 | 14/01/2025 | Revisions to functions and roadmap | Danny L. |
| 1.2 | 24/09/2025 | Minor revisions | Vike S. |
| 2.0 | 05/02/2026 | Revisions to functions and roadmap | Danny L.<br />Pascal L. |
| 2.1 | 25/06/2026 | Minor revisions | Pascal L. |
| 2.2 | 24/09/2026 | Enhanced project focus and revisions to functions | Danny L.<br />Vike S. |
| 2.3 | 24/10/2026 | Updated QDay technical architecture | Vike S. |

---

## TABLE OF CONTENTS

- [1. INTRODUCTION](#sec-1)
  - [1.1. The Synergy of Layer 2 and Quantum-Resistant Foundations](#sec-1-1)
  - [1.2. A Layered Architecture Built on CDK and Abelian PoW](#sec-1-2)
  - [1.3. QDay's Quantum-Resistant EVM-Compatible Layer 2: Core Advantages](#sec-1-3)
  - [1.4. The Road Ahead: Pioneering the Future of Quantum-Resistant Blockchain](#sec-1-4)
- [2. TECHNICAL OVERVIEW](#sec-2)
  - [2.1. Quantum-Resistant Cryptography in Abelian](#sec-2-1)
  - [2.2. Quantum-Resistant Cryptography in QDay-to-Abelian Rollups](#sec-2-2)
  - [2.3. Quantum-Resistant Accounts and Smart Contracts in QDay](#sec-2-3)
- [3. TOKENOMICS](#sec-3)
  - [3.1. Token Allocation & Vesting Schedule](#sec-3-1)
  - [3.2. Value Capture Loop & Economic Flywheel](#sec-3-2)
- [4. PHASE 1: L1-ASSISTED QUANTUM-RESISTANT ROLLUPS WITH EVM COMPATIBILITY](#sec-4)
  - [4.1. Introduction to Rollups](#sec-4-1)
  - [4.2. QDay's Adoption of Polygon CDK Technology](#sec-4-2)
  - [4.3. Benefits of Quantum-Resistant Rollups](#sec-4-3)
  - [4.4. Future Work: PQZK Bridge](#sec-4-4)
- [5. PHASE 2: QUANTUM-RESISTANT ACCOUNT WITH EVM COMPATIBILITY](#sec-5)
  - [5.1. Quantum-Resistant Account](#sec-5-1)
  - [5.2. Upgrade of QDay Nodes](#sec-5-2)
  - [5.3. Quantum-Resistant Wallet](#sec-5-3)
  - [5.4. Quantum-Resistant Contracts](#sec-5-4)
  - [5.5. Quantum-Resistant dApps](#sec-5-5)
  - [5.6. The Design Principles](#sec-5-6)
- [6. APPLICATION ECOSYSTEM](#sec-6)
  - [6.1. Category 1: Application related to Abelian](#sec-6-1)
  - [6.2. Category 2: EVM-compatible Applications](#sec-6-2)
  - [6.3. Category 3: Quantum-Resistant Applications](#sec-6-3)
- [7. A NEW EVOLUTION: QUANTUM-RESISTANT AGENTIC PAYMENT NETWORK (PHASE 1.5)](#sec-7)
  - [7.1. Vision: A Universal Platform for the Quantum Era](#sec-7-1)
  - [7.2. Convergence of Major Industry Trends](#sec-7-2)
  - [7.3. The Strategic Path Forward](#sec-7-3)
  - [7.4. The QDay Differentiator: Quantum-Secure Payments](#sec-7-4)
  - [7.5. Research and Development Focus Areas](#sec-7-5)
  - [7.6. Summary](#sec-7-6)
- [8. ROADMAP](#sec-8)
- [9. CONCLUSION](#sec-9)
- [10. REFERENCES](#sec-10)

---

<a id="sec-1"></a>
## 1. Introduction

In the dynamic evolution of digital finance and distributed systems, the relentless pursuit of security, scalability, interoperability, and practical usability is paramount. The global digital ecosystem is currently undergoing two simultaneous structural transformations that redefine the requirements for underlying blockchain infrastructure:

- **The Shift to Machine Dominance:** Automated traffic driven by autonomous AI agents, bots, and background microservices officially surpassed human traffic on the internet for the first time in history, reaching 57.4% of total global web requests in June 2026 per Cloudflare. Agentic AI traffic specifically, where autonomous software takes real-world financial and API actions on behalf of principals, surged 7,851% year-over-year.
- **The Acceleration of Quantum Threat Timelines:** Simultaneously, empirical quantum hardware advancements have drastically shortened the estimated timeline to break classical public-key cryptography. A landmark March 2026 paper published jointly by Google Quantum AI, the Ethereum Foundation, and Stanford reduced the estimated physical qubit requirement to crack 256-bit elliptic curve cryptography (ECDSA) by 40 times, from 20 million physical qubits down to fewer than 500,000 physical qubits.

Legacy blockchain infrastructure was never designed to address both challenges simultaneously. High-throughput EVM chains built for rapid execution rely almost exclusively on classical ECDSA signatures, leaving account balances, smart contract states, and transaction histories highly vulnerable to 'Harvest Now, Decrypt Later' (HNDL) quantum attacks. Conversely, purpose-built post-quantum blockchains have historically operated in isolation, lacking EVM compatibility, developer tooling, liquid stablecoins, and the high-frequency settlement primitives required by autonomous machines.

QDay solves this fundamental disconnect. Built as a Layer 2 atop the quantum-resistant, lattice-based Abelian Layer 1 blockchain, QDay is a specialized blockchain network that establishes a Quantum-Safe Agent Payment Layer. QDay combines 100% EVM compatibility, modular Polygon CDK rollup execution, liquid stablecoin settlement, native gas abstraction, session-policy smart contract wallets, and x402 HTTP micropayment protocol support with a dual post-quantum security protection.

<a id="sec-1-1"></a>
### 1.1. The Synergy of Layer 2 and Quantum-Resistant Foundations

The architectural pairing of Layer 2 rollup execution with a post-quantum Layer 1 foundation establishes an unprecedented security and throughput profile. By offloading state updates and execution off-chain while anchoring validity proofs directly to the post-quantum Abelian blockchain, QDay achieves three distinct technical synergies:

- **Inherited Post-Quantum Finality:** Every transaction processed within the QDay execution environment is verified and agreed upon by multiple independent nodes, and subsequently submitted to the Abelian Layer 1 for validation. Once committed, the immutability and finality of QDay's state are protected by lattice-based cryptography that is mathematically intractable to both classical and quantum computational adversaries.
- **High-Throughput Execution:** By executing state transitions within a dedicated Layer 2 environment, QDay eliminates the computational overhead and latency of Layer 1 proof-of-work consensus, achieving transaction confirmation latencies of under 1 second and throughput capacity capable of exceeding 4,000 transactions per second.
- **Sub-Cent Settlement Costs:** Processing transactions off-chain reduces gas costs by orders of magnitude compared to direct L1 execution, lowering average transaction fees to sub-cent levels and rendering high-frequency API micropayments economically viable.

<a id="sec-1-2"></a>
### 1.2. A Layered Architecture Built on CDK and Abelian PoW

QDay is an EVM-compatible Layer 2 built with Polygon CDK and integrated with the Abelian Layer 1 blockchain through Abelian Plus Node infrastructure. The architecture combines L2 execution, data availability infrastructure, and state commitment to the underlying PoW blockchain.

- **Abelian PoW Foundation:** Abelian L1 provides the underlying Proof-of-Work (PoW) blockchain infrastructure, incorporating quantum-resistant cryptographic protocols. It serves as the foundational blockchain layer for the QDay ecosystem.
- **CDK-Based L2 Execution:** QDay uses Polygon CDK to provide an EVM-compatible execution environment for smart contracts and decentralized applications.
- **Abelian Plus Node:** The Abelian Plus Node bridges QDay Rollup and the native Abelian blockchain. It consists of Reth and Lighthouse, which provide the EVM-compatible execution and consensus infrastructure, a Committer that submits finalized state roots to the Abelian network, and an Abelian Node that connects to the native blockchain.
- **Data Availability Node:** Abelian Plus Node integrates Reth and Lighthouse as the core components of its DA Node infrastructure, supporting the relevant data and node services required by the QDay architecture.
- **State Root Commitment:** The Committer component submits the final L2 state root to Abelian L1, anchoring QDay's state commitment to the underlying blockchain.
- **Layered Security Architecture:** By separating L2 execution, DA Node infrastructure, and state root commitment, QDay establishes a modular architecture that connects its EVM-compatible execution layer with Abelian's PoW foundation.

This strategic fusion ensures that QDay provides maximum cryptographic security at the settlement layer while offering the energy efficiency, speed, and scalability demanded by modern enterprise applications and autonomous AI agents.

<a id="sec-1-3"></a>
### 1.3. QDay's Quantum-Resistant EVM-Compatible Layer 2: Core Advantages

- **Quantum-Resistant Security:** Building on the quantum-resistant algorithms – first from the Abelian Blockchain with development upgrades to become native post-quantum – QDay introduces an additional layer of security, shielding the network against the quantum threat while maintaining the integrity and safety of user assets and data.
- **Enhanced Scalability:** QDay's Layer 2 solution leverages the robust foundation of Abelian to significantly advance transaction throughput, aiming to achieve over 4,000 TPS, thus ensuring a scalable network ready to accommodate the ever-growing demands of blockchain applications.
- **Cost-Effective Transactions:** By processing transactions off-chain and utilizing the POS consensus mechanism, QDay significantly reduces transaction fees, making blockchain technology more accessible and affordable for a diverse range of applications and users.
- **Accelerated Transaction Confirmations:** QDay's network is engineered for speed, providing near-instantaneous transaction finality, which is crucial for applications that depend on quick and reliable transaction processing.
- **A Developer's Playground:** With EVM compatibility at its core, developers can effortlessly transition to QDay using their preferred Ethereum-based development tools and languages, promoting innovation and streamlining the development process.
- **Interoperability as a Priority:** QDay is meticulously crafted to ensure seamless interaction with other blockchain networks, promoting cross-chain transactions and contributing to a more cohesive and versatile blockchain ecosystem.

<a id="sec-1-4"></a>
### 1.4. The Road Ahead: Pioneering the Future of Quantum-Resistant Blockchain

The development of quantum-resistant security in QDay will be conducted in two major phases, creating a two-level quantum protection for QDay, with a new middle phase in between for the added agentic payment capabilities.

#### Phase 1: Quantum-Resistant Rollups with EVM Compatibility (The Vault)

In this phase, QDay will introduce quantum-resistant ledger by leveraging Rollups to Abelian Blockchain while maintaining the EVM compatibility by inheriting the account model and smart contract capabilities of the Ethereum Virtual Machine. This will allow for a smooth transition for Ethereum developers and enable the use of existing Ethereum tools and languages. With such L1-assisted quantum-resistant rollups, QDay will be resistant to quantum attacks that target at modifying the ledger data such as transaction orders, amounts, and the structure of the state. In addition, when any attacks are detected, QDay will be able to prevent funds loss by temporarily halting the execution of rollups in a quantum-resistant manner, i.e., attackers cannot move forward once the rollups have been halted because they are not able to forge the quantum-resistant signatures generated by the rollup operators.

#### Phase 1.5: Agentic Payment Network (The Rail)

In this phase, QDay will expand the transition to modular Polygon CDK architecture, fast sub-second settlement, fiat-backed native stablecoin integration, paymaster gas abstraction, HTTP x402 payment headers for per-request API micropayments, ERC-4337 smart contract wallets with session-scoped spending caps, time-bounded expiration, contract whitelisting, and ERC-8004 on-chain agent identity.

#### Phase 2: Native Quantum-Resistant Accounts and Smart Contracts (The Shield)

In this phase, QDay will implement quantum-resistant accounts by adding new quantum-resistant keys to existing accounts and enabling operations requiring signatures from quantum-resistant keys. To this end, the EVM implementation of QDay will be updated to support the auxiliary post-quantum cryptographic keys and algorithms. On top of this quantum-resistant account model, QDay will support two types of smart contracts: traditional contract and quantum-resistant contract. Wallets that support EVM smart contracts can still interact with the traditional contracts while the quantum-resistant contracts will only be available to wallets that support quantum-resistant keys and algorithms built in QDay.

The above two quantum-resistant mechanisms are orthogonal. The former is a layer of defense against quantum attacks to the ledger data, while the latter is a layer of defense against quantum attacks to specific accounts. The combination of these two mechanisms will provide a dual-layer, comprehensive quantum-resistant security to any transactions and applications built on QDay. For example, even if an attacker manages to get the private keys of some accounts (by hacking the victim's computer or other means), it is still possible to prevent funds loss by halting the execution of the rollups, taking remedial measures such as freezing the affected accounts, and finally continuing the execution of the rollups. Note that all these actions will be conducted based on the consensus of the rollup operators, which is both decentralized and quantum-resistant by design.

---

<a id="sec-2"></a>
## 2. Technical Overview

<a id="sec-2-1"></a>
### 2.1. Quantum-Resistant Cryptography in Abelian

We can think of Abelian as the Phase 0 of the QDay infrastructure. Operating in live production for years, Abelian employs lattice-based cryptographic primitives derived from the Learning With Errors (LWE) and Ring-LWE mathematical problems. Unlike classical public-key cryptography such as RSA or ECDSA on secp256k1 curves, which relies on integer factorization or discrete logarithms that can be solved in polynomial time by Shor's algorithm on a quantum computer, lattice-based cryptography relies on finding shortest vectors in high-dimensional lattices—a problem that remains intractable for both classical and quantum hardware.

Abelian's cryptographic primitives align closely with standards finalized by the National Institute of Standards and Technology (NIST) Post-Quantum Cryptography (PQC) standardization project, specifically FIPS 203 (ML-KEM/Kyber) for key encapsulation and FIPS 204 (ML-DSA/Dilithium) for digital signatures. This provides an uncompromised cryptographic foundation for QDay's settlement layer.

<a id="sec-2-2"></a>
### 2.2. Quantum-Resistant Cryptography in QDay-to-Abelian Rollups

This was the Phase 1 of QDay implementation.

#### Architectural Overview

QDay adopts a layered blockchain architecture that combines an efficient execution environment with the security and quantum-resistant cryptographic foundations of the Abelian blockchain.

At the foundation, Abelian operates as a Proof-of-Work (PoW) blockchain, providing decentralized block production and underlying ledger security. QDay builds an EVM-compatible execution layer on top of this foundation, enabling smart contracts and decentralized applications to operate with greater flexibility and transaction-processing efficiency.

Rather than replacing Abelian's PoW consensus, QDay separates application execution, consensus-related processing, and state commitment into distinct architectural components. This separation allows QDay to optimize transaction execution while maintaining its connection to the underlying Abelian blockchain.

#### Core Architectural Components

1. **Abelian Layer 1 — PoW Security Foundation**

    Abelian provides the underlying blockchain infrastructure, including PoW-based block production and ledger security. Its quantum-resistant cryptographic design also contributes to QDay's long-term security objectives.

2. **QDay Execution Layer — EVM Compatibility and Transaction Processing**

    QDay provides an EVM-compatible environment for executing smart contracts and processing transactions. Its CDK-based architecture supports a modular design that separates execution, sequencing, proof generation, verification, and state publication responsibilities.

3. **Abelian Plus Node — Bridges QDay Rollup and the native Abelian blockchain**

    The Abelian Plus Node bridges QDay Rollup and the native Abelian blockchain. It consists of Reth and Lighthouse, which provide the EVM-compatible execution and consensus infrastructure, a Committer that submits finalized state roots to the Abelian network, and an Abelian Node that connects to the native blockchain. It enables Rollup contracts to execute in an EVM-compatible environment while leveraging Abelian as the underlying blockchain foundation.

4. **Reth and Lighthouse — Execution and Consensus Components**

    Reth and Lighthouse provide execution and consensus-related infrastructure within the QDay node architecture. Together with the surrounding rollup components, they support the processing and coordination of QDay chain operations.

5. **Committer — State Commitment to Abelian**

    The Committer is responsible for submitting QDay's finalized state root to the Abelian blockchain. This establishes a verifiable connection between QDay's execution state and its underlying Layer 1 infrastructure, according to the implemented commitment protocol.

#### Key Architectural Benefits

1. **Layered Security**

    QDay leverages Abelian's PoW-secured foundation while separating execution and state commitment into dedicated components. This layered approach combines underlying blockchain security with an independently optimized execution environment. The security guarantees depend on the complete protocol, including state commitments, proof verification, and the mechanisms used to finalize and recover the chain.

2. **Efficient Transaction Processing**

    By processing transactions within its execution layer rather than requiring every application-level operation to execute directly on Abelian L1, QDay can improve transaction throughput and reduce the burden on the underlying blockchain. Actual performance and fee reductions depend on the rollup configuration, data publication strategy, and network implementation.

3. **Modular Scalability**

    The separation of execution, consensus-related processing, proof generation, verification, and state commitment allows individual components to be optimized and upgraded independently. This modular architecture provides a foundation for scaling transaction processing and evolving the network over time.

4. **Clear Separation of Responsibilities**

    Abelian provides the underlying PoW blockchain, QDay processes application transactions, and the Committer publishes finalized state commitments to Layer 1. This separation clarifies the responsibilities of each component and supports a more maintainable blockchain architecture.

5. **Quantum-Resistant Security Roadmap**

    QDay is designed around a long-term objective of quantum-resistant infrastructure. Its security model builds on Abelian's cryptographic foundations while allowing QDay's execution-layer cryptography and account infrastructure to evolve toward stronger post-quantum protections.

QDay's architecture combines an EVM-compatible execution environment with an underlying PoW blockchain foundation. Its design separates transaction processing, consensus-related operations, and state commitment, enabling QDay to pursue scalability and execution efficiency without replacing Abelian's underlying PoW consensus.

The key architectural principle is efficient execution above a PoW-secured, quantum-resistant blockchain foundation, supported by modular rollup components and explicit state commitment to Layer 1.

#### Quantum-Resistant Rollups

The objective of quantum-resistant rollups is to ensure that no one can modify or forge the ledger data in QDay even with access to a quantum computer. This implies that the QDay Blockchain can halt the execution of the rollups in a quantum-resistant manner, i.e. attackers cannot move forward once the rollups have been halted because they are not able to forge the quantum-resistant signatures generated by the rollup operators. During the halt, the affected accounts can be frozen and the attackers can be reported to the authorities. The execution of the rollups can be resumed once the remedial measures have been applied. Note that existing Layer 2 solutions are incapable of implementing such quantum-resistant halt mechanism because they cannot prevent the quantum attackers from cracking the private keys of the rollup operators.

The implementation of quantum-resistant rollups in QDay is straightforward. Each rollups operator will be using an Abelian Blockchain account to run the rollups. The rollups data are signed by the quantum-resistant keys and algorithms built in Layer 1. Other than taking advantage of the existing quantum-resistant Layer 1, the rest of the rollup implementation could be exactly the same as any other Layer 2 solutions. In QDay, specifically, the Rollups are built to adapt to the features of the Abelian Blockchain. We will describe the technical details in the next section.

<a id="sec-2-3"></a>
### 2.3. Quantum-Resistant Accounts and Smart Contracts in QDay

This is the Phase 2 of QDay implementation.

The ultimate goal of QDay is to provide quantum-resistant security at the same level or even higher than the Layer 1, while maintaining the EVM compatibility with high transaction throughput and low transaction latency. To this end, QDay will implement quantum-resistant accounts and smart contracts independently from both the Layer 1 and the rollups. In this way, QDay will eventually be quantum-resistant on its own while still gaining the benefits of the quantum-resistant rollups.

**Table 2.1: Cryptographic Domain Trust Boundary & Status Matrix**

| Domain / Component | Signature Scheme | Current Status | Security Boundary Description |
|---|---|---|---|
| L1 Settlement Anchor | Ring-LWE / LWE | LIVE | Post-quantum secure on Abelian L1. Guarantees state immutability. |
| L2 Execution & Sequencer | ECDSA / POS | LIVE on Testnet | Fast execution finality. State transitions proven via validity proofs. |
| Agent Wallet / Session Keys | ECDSA / Passkey | LIVE on Testnet | ERC-4337 smart contract policy engine with spending caps and time locks. |
| Hybrid PQ Agent Keys | ECDSA + ML-DSA-65 | PLANNED<br />Q4 2026 | Dual-signing mode combining classical ECDSA with NIST ML-DSA-65. |
| Native PQ Accounts | Lattice / Dilithium | PLANNED<br />Q2 2027 | Fully native post-quantum accounts and EVM smart contract execution. |

However, the implementation of Phase 2 will be challenging. It requires a complete redesign of the EVM implementation in QDay validator nodes to support the quantum-resistant keys and algorithms while maintaining the back-compatibility with the existing (non-quantum-resistant) keys and smart contracts. To address this challenge, QDay will introduce dual transaction modes: legacy transaction and quantum-resistant transaction.

#### Legacy Transaction

Legacy transactions is just another name, to distinguish from the quantum-resistant transactions, of the transactions that are supported by the current EVM implementation in QDay validator nodes. Legacy transactions are supported by having accounts using the legacy keys to interact either with the legacy smart contracts, or with the quantum-resistant smart contracts with the fallback mechanism to support legacy keys.

Note that in the latter case, the account can be unaware of whether the smart contract supports the quantum-resistant keys and algorithms. The fallback mechanism is transparent to the users which implies that third-party wallets without quantum-resistant key support can also be used to interact with such quantum-resistant smart contracts.

However, it is a bit less meaningful to allow quantum-resistant keys to interact with legacy (non-quantum-resistant) smart contracts. This so-called backwardness does not seem to be recommended due to the security consideration.

#### Quantum-Resistant Transaction

Quantum-resistant transactions are processed by the EVM implementation in QDay validator nodes that are upgraded to support the quantum-resistant keys and algorithms. Such transactions are only supported when accounts use quantum-resistant keys to interact with the quantum-resistant smart contracts. In other words, quantum-resistant transactions have nothing to do with the legacy keys. Only the wallets that support the quantum-resistant keys and algorithms can be used to send such transactions. To complete Phase 2, a reference implementation of quantum-resistant wallets will be provided as a core component of QDay, of which the design and the implementation details will be published in a separate whitepaper.

---

<a id="sec-3"></a>
## 3. Tokenomics

<a id="sec-3-1"></a>
### 3.1. Token Allocation & Vesting Schedule

The total supply of $QDAY tokens is 22,517,998,100. All $QDAY tokens will be created at the TGE. The distribution of $QDAY is designed to ensure network security, incentivize participation, and foster community growth, and will be conducted according to the table below. The lock-up and vesting rules will be implemented by either smart contracts deployed on QDay or the supervision of the DAO.

| Category | Allocation (%) | Allocation (Token) | Strategic Purpose | Lock-up & Vesting |
|---|---:|---:|---|---|
| Staking Rewards | 35.00% | 7,881,299,335 | To reward protocol staking | Longer the lock-up, higher the rewards. |
| Investors & Backers | 20.00% | 4,503,599,620 | Private rounds to fund initial and ongoing development | 12-month cliff, then 3-year daily linear vesting |
| Team & Contributors | 15.00% | 3,377,699,715 | For the founding team and future hires | 3-Yr equal vesting (5% per year) |
| Protocol Treasury | 20.00% | 4,503,599,620 | Long-term reserves for future development and strategic partnerships. | 4-Yr equal vesting (5% per year) |
| Community / Ecosystem Growth / Initial Liquidity | 10.00% | 2,251,799,810 | Airdrops, Developer Grants, and Liquidity Provision. | None, 100% unlocked at TGE. |
| **TOTAL** | **100.00%** | **22,517,998,100** | | |

<a id="sec-3-2"></a>
### 3.2. Value Capture Loop & Economic Flywheel

A central question in payment network design is: if users and AI agents pay all transaction fees in stablecoins via gas abstraction, how does the $QDAY token capture value? QDay resolves this through a multi-tiered economic feedback loop:

- **Paymaster Fee Sink & Token Buybacks:** A fixed percentage of all stablecoin transaction surcharges collected by protocol paymasters automatically routes to an on-chain Fee Sink contract that executes programmatically scheduled open-market buybacks of $QDAY tokens.
- **Sequencer & Prover Staking Collateral:** Sequencer nodes and prover operators must stake significant $QDAY collateral to participate in block production and proof aggregation, locking token supply proportional to network demand.
- **Fee Discount Tiers & Governance:** Holding and staking $QDAY provides tiered discounts on paymaster surcharges for high-volume enterprise API facilitators and merchant gateways.
- **Token Migration Alignment:** Legacy token/point holders are aligned 1:1 with the new QDay chain architecture via structured migration vaults, preserving historical community equity.

---

<a id="sec-4"></a>
## 4. Phase 1: L1-Assisted Quantum-Resistant Rollups with EVM Compatibility

In Phase 1, QDay will introduce quantum-resistant ledger by leveraging Rollups to Abelian Blockchain while maintaining the EVM compatibility by inheriting the account model and smart contract capabilities of the Ethereum Virtual Machine. This will allow for a smooth transition for Ethereum developers and enable the use of existing Ethereum tools and languages. With such L1-assisted quantum-resistant rollups, QDay will be resistant to quantum attacks that target at modifying the ledger data such as transaction orders, amounts, and the structure of the state. In addition, when any attacks are detected, QDay will be able to prevent funds loss by temporarily halting the execution of rollups in a quantum-resistant manner, i.e., attackers cannot move forward once the rollups has been halted because they are not able to forge the quantum-resistant signatures generated by the rollup operators. This section will focus on the technical details of the quantum-resistant rollups in QDay.

<a id="sec-4-1"></a>
### 4.1. Introduction to Rollups

Rollups are Layer 2 scaling solutions designed to improve transaction throughput and reduce transaction costs by processing transactions in a separate execution environment and periodically committing state information to an underlying blockchain.

A Rollup processes transactions in batches, maintains its execution state, and uses verification mechanisms to establish the validity and consistency of state transitions. Depending on the architecture, verification may rely on cryptographic validity proofs, independent validators, fraud proofs, or a combination of these mechanisms.

QDay adopts a multi-validator verification architecture in which multiple independent validators verify batch data, compare Layer 1 Rollup contract records with Layer 2 transaction data, and check state roots after executing the corresponding state transitions. Validators reach agreement through an M-of-N mechanism, requiring a configured threshold of validator approvals.

This approach distributes verification responsibilities among multiple validators and establishes a structured process for validating batch data and state transitions. Its security depends on validator independence, the M-of-N threshold, data availability, and the rules governing state acceptance and finalization.

Unlike a conventional ZK Rollup that relies on cryptographic validity proofs as its primary verification mechanism, QDay's described architecture emphasizes independent validator verification and threshold-based consensus. Accordingly, its security properties should be explained in terms of its actual validation and state commitment mechanisms rather than assuming that transaction privacy or ZK-proof verification is inherently provided.

<a id="sec-4-2"></a>
### 4.2. QDay's Adoption of Polygon CDK Technology

QDay adopts a modular architecture based on Polygon Chain Development Kit (CDK) technology to provide an EVM-compatible execution environment and scalable transaction processing.

The architecture separates Layer 2 transaction execution, batch verification, validator consensus, and state commitment. Multiple independent validators verify batch data and state transitions, while an M-of-N mechanism determines whether the required validator approval threshold has been reached.

#### Abelian Plus Node

Because the native Abelian blockchain does not natively support smart contract execution, QDay introduces the Abelian Plus Node to bridge QDay Rollup and the native Abelian network. The Abelian Plus Node consists of:

- **Reth:** Provides EVM-compatible execution for Rollup contracts.
- **Lighthouse:** Provides consensus-client infrastructure for the EVM-compatible environment.
- **Committer:** Submits QDay's finalized state root to the native Abelian network.
- **Abelian Node:** Connects to and interacts with the native Abelian blockchain.

In this architecture, Rollup contracts execute within the EVM-compatible environment provided by the Abelian Plus Node, rather than directly on the native Abelian blockchain.

#### Multi-Validator Batch Verification

QDay uses multiple independent validators to verify Rollup batches through two primary checks.

- **Batch Data Consistency:** Validators compare the batch information recorded by the Rollup contract in the Abelian Plus Node's EVM-compatible environment with the corresponding Layer 2 transaction data. This helps identify inconsistencies between the recorded batch information and the transactions processed by QDay.
- **State Transition Verification:** Validators independently verify the relevant state transitions and compare the resulting state root with the expected state root. This provides a mechanism for checking whether the batch produces the expected execution state.

The correctness of these checks depends on validators using the same protocol rules, accessing the required transaction data, and correctly identifying the state commitment associated with each batch.

#### M-of-N Validator Consensus

QDay uses an M-of-N mechanism to establish agreement among validators. Here, N represents the total number of participating validators, while M represents the minimum number of approvals required to satisfy the configured threshold. A batch satisfies the validator approval requirement when the required number of validators agrees on its validity, subject to the protocol's acceptance and finalization rules.

This mechanism distributes verification responsibilities and reduces dependence on a single validator. Its security and availability depend on the validator set, the threshold configuration, and the protocol's handling of conflicting approvals or malicious behavior.

#### State Commitment to Abelian

After the applicable validation and finalization conditions are satisfied, the Committer submits QDay's finalized state root to the native Abelian blockchain. Abelian provides the underlying PoW blockchain foundation, while QDay's validators perform batch verification and reach agreement through the M-of-N mechanism.

The state-root submission records a commitment to QDay's execution state. However, submitting a state root does not by itself mean that the native Abelian blockchain independently verifies the validity of every Layer 2 transaction or enforces the validator approval threshold. Those guarantees depend on the protocol's implementation and state acceptance rules. This separation allows QDay to use Abelian as its underlying blockchain foundation while maintaining its own Layer 2 execution and verification processes.

#### Key Architectural Benefits

- **Scalability:** Processing transactions within the Layer 2 execution environment reduces the need to execute every application-level transaction directly on the underlying Abelian blockchain.
- **Independent Verification:** Multiple validators independently examine batch data and state transitions, helping detect inconsistencies and reducing reliance on a single verification operator.
- **Threshold-Based Agreement:** The M-of-N mechanism establishes a configurable validator approval threshold for batch validation.
- **Modular Architecture:** Separating execution, verification, consensus, and state commitment allows individual components to evolve independently.
- **Underlying Blockchain Security:** Abelian provides the PoW-based blockchain foundation, while QDay's end-to-end security additionally depends on validator assumptions, data availability, state commitment rules, and finalization mechanisms.
- **Quantum-Resistant Foundation:** QDay builds on Abelian's quantum-resistant infrastructure. End-to-end quantum resistance also depends on the cryptographic mechanisms used throughout QDay's execution, validation, account, and commitment systems.

QDay combines a Polygon CDK-based execution architecture with multi-validator batch verification, M-of-N consensus, and state commitment to the native Abelian blockchain. The Abelian Plus Node provides the EVM-compatible execution and integration environment for Rollup contracts. Independent validators verify batch data and state transitions, reach agreement through the M-of-N mechanism, and support the process leading to finalized state-root submission to Abelian. This architecture separates Layer 2 execution and verification from the underlying Abelian blockchain's PoW consensus, providing a modular foundation for scalable transaction processing and verifiable state commitment.

<a id="sec-4-3"></a>
### 4.3. Benefits of Quantum-Resistant Rollups

The main benefit of quantum-resistant rollups is that it promises that the data in the ledger are quantum-proof once the corresponding rollups have been confirmed by Abelian. It prevents the 51% attacks, even with the access to a quantum computer, on the ledger data. In particular, such prevention also applies to the pending data, i.e., the data that have been submitted to QDay but not yet confirmed by Abelian. This new feature enables QDay to halt the execution of the rollups in a quantum-resistant manner, i.e., attackers cannot move forward once the rollups has been halted because they are not able to forge the quantum-resistant signatures generated by the rollup operators. Note that such a halt mechanism runs on the rollup operators only, which does not affect the operation of the QDay Blockchain on its own.

As this is a new feature that is not supported by any existing Layer 2 solutions, we will illustrate how it works with a concrete example. The following events are assumed to happen in the timeline:

#### A Quantum-Resistant Emergency Halt Scenario Walkthrough

1. An attacker with access to a quantum computer exploits a vulnerability in a DeFi dApp on QDay and rug pulls all the funds from the pool.
2. The stolen funds are moved to a QDay account that is controlled by the attacker.
3. A user notices the rug pull and reports the incident to the dApp provider.
4. The dApp provider freezes the account and reports the incident to QDay DAO.
5. QDay DAO creates a vote proposal for halting the rollups execution for 12 hours.
6. All DAO members are called to vote for this proposal within 30 minutes.
7. The vote passes and the rollup's execution is halted immediately. From this point onwards, the attacker is unable to move the funds out of QDay because QDay Bridge does not process any transaction that is not rollups-confirmed.
8. The dApp provider will be notified that they have around 12 hours to do the necessary actions to protect the users' funds. If necessary, they can apply for more time by requesting the QDay DAO to extend the suspension period.
9. The dApp provider contacts the token issuer to freeze all the addresses that are controlled by the attacker. Note that the freeze operation is essentially a smart contract call on QDay, which is not affected by the rollups halt.
10. The token issuer requests solid evidence of the rug pull from the dApp provider. In this example, the dApp provider submits the evidence and passes the check conducted by the token issuer.
11. The token issuer freezes the attacker's addresses.
12. The rollups execution is resumed either: (1) after 12 hours, or (2) the dApp provider notifies the QDay DAO that all required actions have been taken and the rollups execution can be resumed. In the latter case, the QDay DAO will also vote for the proposal to resume the rollups execution.
13. The QDay Blockchain resumes normal operation. The dApp provider contacts the police or any other relevant authorities to report the rug pull. Further legal actions will be taken against the attacker.
14. If any further actions are needed, the QDay DAO will vote for the proposals accordingly. Usually, such actions should be proposed by the police or other relevant authorities.

It is worth noting that the above example assumes that the attacker has access to a quantum computer. Even so, the attacker is unable to move the funds out of QDay because the rollups process requires the quantum-resistant signatures generated by the rollup operators. This example illustrates that the quantum-resistant halt mechanism can enhance the overall security of any dApps deployed on QDay.

<a id="sec-4-4"></a>
### 4.4. Future Work: PQZK Bridge

#### What is PQZK Bridge?

The PQZK Bridge, or Post-Quantum Zero-Knowledge Bridge, is a cryptographic protocol designed to facilitate the secure and efficient transition of blockchain systems to post-quantum security standards. It combines the principles of zero-knowledge proofs with post-quantum cryptographic algorithms to create a robust framework that can withstand the capabilities of quantum computers.

Zero-knowledge proofs (ZKPs) allow one party to prove to another that a statement is true without revealing any specific information about the statement itself. In the context of blockchain, ZKPs enable the verification of transaction correctness while preserving privacy. Post-quantum cryptography, on the other hand, involves cryptographic algorithms that are resistant to attacks from quantum computers.

The PQZK Bridge integrates these two technologies by using post-quantum cryptographic primitives to construct zero-knowledge proofs. This ensures that the proofs remain secure even in the presence of quantum adversaries. The PQZK Bridge acts as a middleware layer that facilitates the deployment of PQZK Rollups on existing blockchain platforms, providing a seamless upgrade path to quantum security.

#### Implementing QDay's Rollups with PQZK Bridge

To implement PQZK Rollups, QDay will leverage the PQZK Bridge to transition from traditional ZK Rollups to a fully quantum-resistant solution.

The first step involves integrating post-quantum cryptographic primitives into the rollup framework. These primitives, such as lattice-based cryptography or hash-based signatures, replace the traditional cryptographic algorithms used in zero-knowledge proofs.

Using these post-quantum primitives, QDay will construct PQZK proofs. These proofs will maintain the zero-knowledge property, ensuring that transaction verification can be done without revealing any sensitive information, while also being resistant to quantum attacks.

The rollup protocols will then be modified to incorporate PQZK proofs. This includes adapting the proof generation, submission, and verification processes to handle the new post-quantum cryptographic constructs.

These modified rollup protocols, now incorporating PQZK proofs, will be deployed on the Abelian Layer 1 blockchain. Abelian's quantum-resistant properties will complement the PQZK Rollups, providing a robust, end-to-end quantum-resistant solution.

Finally, extensive testing will be conducted to ensure that the PQZK Rollups function correctly and efficiently. Optimization efforts will focus on minimizing the computational overhead associated with post-quantum cryptographic operations, ensuring that the rollup solution remains scalable and performant.

#### Extending PQZK Rollups to Other EVM-Compatible Chains

The benefits of PQZK Rollups are not limited to QDay and Abelian. The PQZK Bridge technology can be extended to other EVM-compatible chains, enabling them to achieve quantum security as well.

The PQZK Bridge can be adapted to work with the specific architectures and consensus mechanisms of EVM-compatible chains. This involves modifying the bridge protocols to ensure compatibility with the Ethereum Virtual Machine and other related technologies.

Once adapted, the PQZK Bridge can be used to deploy PQZK Rollups on various EVM-compatible chains. This enables these chains to process transactions off-chain in a quantum-resistant manner, enhancing their scalability and security.

By leveraging the interoperability features of the PQZK Bridge, different blockchain ecosystems can integrate PQZK Rollups seamlessly. This fosters a more secure and interconnected blockchain landscape, where multiple chains can benefit from quantum-resistant transaction processing.

To facilitate the adoption of PQZK Rollups, extensive documentation, developer tools, and community support will be provided. This ensures that blockchain developers can easily implement and deploy PQZK Rollups on their respective platforms, accelerating the transition to quantum-safe blockchain technology.

In conclusion, by adopting PQZK Rollups through the PQZK Bridge, QDay not only enhances its own security but also contributes to the broader blockchain ecosystem's resilience against quantum threats. This proactive approach ensures that as quantum computing technology evolves, blockchain systems remain secure, scalable, and efficient.

---

<a id="sec-5"></a>
## 5. Phase 2: Quantum-Resistant Account with EVM Compatibility

In Phase 2, QDay will introduce quantum-resistant account and legacy account and the following corresponding concepts:

- quantum-resistant wallets and legacy wallets;
- quantum-resistant contracts and legacy contracts;
- quantum-resistant dApps and legacy dApps.

Each mnemonic phrase of the legacy account can be used to derive the corresponding quantum-resistant account. This is to ensure a smooth transition from the legacy account to the quantum-resistant account. All QDay users can use the same mnemonic phrase to access both the quantum-resistant account and the legacy account. Specifically, all EVM-compatible wallets will continue to use the legacy account without any changes and be unaware of the existence of the quantum-resistant account while the quantum-resistant wallets will support both the quantum-resistant account and the legacy account for the same mnemonic phrase. A reference implementation of the quantum-resistant wallet will be provided by QDay and the corresponding source code will be open-sourced.

Other than the mnemonic phrase, the quantum-resistant account is completely independent from the legacy account. This is deliberately designed to ensure the post-quantum security of the new account. Specifically, the following objectives will be achieved in Phase 2:

- Legacy accounts can be used in the same way as before, i.e., supported by the legacy wallets and legacy smart contracts.
- Quantum-resistant accounts can be used with the quantum-resistant wallets. It is expected that no legacy wallets will support the quantum-resistant accounts.
- The reference implementation of the quantum-resistant wallet by the QDay team will support the legacy accounts. For the quantum-resistant wallets implemented by other parties, it is optional to support the legacy accounts.
- The quantum-resistant contracts will NOT support the legacy accounts. This is key to ensure that the post-quantum security will not be compromised by mixing the usage of non-quantum-resistant cryptographic primitives.
- The quantum-resistant contracts will be compatible with the legacy contracts in two ways: 1) the quantum-resistant contracts can contain the legacy functions that are not quantum-resistant; 2) the quantum-resistant functions can be called by the legacy wallets with the help of an external quantum-resistant signature generator.
- Some quantum-resistant dApps may support the legacy accounts by implementing both the quantum-resistant and legacy protocols.
- Quantum-resistant accounts can interact with the quantum-resistant smart contracts and dApps using the quantum-resistant wallets. They may also be able to interact with the legacy smart contracts and dApps in case that the quantum-resistant wallets support the fallback mechanism for such scenarios.
- The table below shows whether a quantum-resistant object can interact with or support a legacy object. Note that it is certain that a legacy object is not able to interact with a quantum-resistant object and therefore we don't show the corresponding table in the reverse direction.

| Object | Legacy Account | Legacy Wallet | Legacy Contract | Legacy dApp |
|---|---|---|---|---|
| **Quantum-Resistant Account** | may fallback to | cannot be used by | may interact with | may interact with |
| **Quantum-Resistant Wallet** | may support | same mnemonics | may support | may support |
| **Quantum-Resistant Contract** | not compatible | not compatible | not compatible | not compatible |
| **Quantum-Resistant dApp** | may support | may be used by | may support | may support |

To summarize, the objective of Phase 2 is to add the support for the quantum-resistant objects without compromising any post-quantum security features while maintaining the maximum backward compatibility with the legacy objects. In the rest of this section, we will describe the overall design of the core components in QDay Phase 2 followed by elaborating the principles and trade-offs of the design.

<a id="sec-5-1"></a>
### 5.1. Quantum-Resistant Account

The quantum-resistant account in QDay will use the same post-quantum cryptographic primitives as in Abelian Blockchain. It starts with the same mnemonic phrase as the legacy account but fully diverges from that point onwards.

The process of deriving the quantum-resistant account from a BIP-39 mnemonic phrase is defined in AIP-11 (Abelian Improvement Proposal 11). For the convenience of the readers, we will briefly describe the process here.

#### Step 1: From Mnemonic to Entropy-Seed

AIP-11 uses the same entropy-seed derivation process as in BIP-39. However, AIP-11 requires the entropy-seed to be 256 bits long which corresponds to 24 mnemonic words. To address this, for mnemonic phrases with less than 24 words, we will pad the mnemonic phrase with the word "abandon" (the first word in the BIP-39 wordlist) until it has 24 words while for mnemonic phrases with more than 24 words, we will truncate the mnemonic phrase to 24 words.

#### Step 2: From Entropy-Seed to Master-Seed

The entropy-seed is then used to derive the 512-bit master-seed using a deterministic key derivation function. The key derivation function is defined as follows:

```
MasterSeed = PRF(EntropySeed, 'AccountMasterSeed')
```

where PRF is a post-quantum key derivation function using KMAC256 as the underlying hash function, defined as follows:

```
PRF(key, input) := KMAC256(key, input, 512, 'ABELIANPRF')
```

#### Step 3: From Master-Seed to Account-Root-Seeds

In Abelian, each account consists of a set of root seeds, namely CoinSpKeyRootSeed, CoinSnKeyRootSeed, CoinDetectorRootKey and CoinVKRootSeed, collectively referred to as Account-Root-Seeds. All root seeds are 512 bits long, derived from the master-seed by using the following key derivation functions:

```
CoinSpKeyRootSeed   = PRF(MasterSeed, 'CoinSpendKeyRootSeed')
CoinSnKeyRootSeed   = PRF(MasterSeed, 'CoinSerialNumberKeyRootSeed')
CoinDetectorRootKey = PRF(MasterSeed, 'CoinDetectorRootKey')
CoinVKRootSeed      = PRF(Master-Seed, 'CoinValueKeyRootSeed')
```

Note that the PRF function is the same as the one used in the previous step.

#### Step 4: From Master-Seed to Public-Rands

In AIP-11, each set of root seeds can be used to derive multiple addresses corresponding to different values of public rand. In QDay, to conform to the convention of existing Hierarchical Deterministic Wallets (HDW), we will use the following deterministic function defined by AIP-11 to derive a public rand from the master-seed and a sequence number. Specifically, the public rand is derived as follows:

```
PublicRand(seqNo) = PRF(PublicRandRootSeed, seqNo)
```

where

```
PublicRandRootSeed = PRF(MasterSeed, 'PublicRandRootSeed')
```

#### Step 5: From Account-Root-Seeds and Public-Rand to Address and Private-Key

Once both the account-root-seeds and the public-rand are derived, the corresponding address and private-key can be derived deterministically. As this process is beyond the scope of AIP-11, we will use the same process implemented in the Abelian SDK v2 to gain more consistency with the ecosystem of the Layer 1 chain.

<a id="sec-5-2"></a>
### 5.2. Upgrade of QDay Nodes

To make sense of the quantum-resistant account, the blockchain must support the transfer of the native token $QDAY between the legacy account and the quantum-resistant account in the first place. Specifically, QDay nodes must be upgraded to be able to: 1) recognize the new type of address in the quantum-resistant account; 2) verify the signatures generated by the quantum-resistant account; 3) enable the transfer of the native token $QDAY between the legacy account and the quantum-resistant account. However, it is not straightforward to support the third requirement. This is because we need to maintain the backward compatibility for the legacy wallets to make such transfers without knowing the new type of address.

A key challenge here is that whether it is possible to support the transfer of the native token $QDAY between the legacy account and the quantum-resistant account without changing the legacy wallets. To address this challenge, we will develop a smart contract on the QDay blockchain to act as a bridge between the legacy account and the quantum-resistant account. The smart contract itself is a legacy one and can be used by the legacy wallets.

1. The legacy account invokes the `Send` function of the smart contract with the quantum-resistant account as the recipient and the amount of the native token $QDAY as the input.
2. The smart contract verifies the signature of the legacy account and the recipient address.
3. The smart contract receives $QDAY from the legacy account and sends it to the quantum-resistant account.

In the last step, the smart contract transfers $QDAY from its own legacy address to the recipient's quantum-resistant address. This is carried out by calling a new primitive function `legacy_to_quantum_resistant_transfer` implemented by QDay Node. The EVM implementation of QDay Node will be upgraded to support this primitive function along with another primitive function `quantum_resistant_to_legacy_transfer` which handles the reverse process.

Though the interface of the above two primitive functions looks simple, the implementation is non-trivial. It requires a comprehensive set of cryptographic operations involving both the legacy algorithms and the post-quantum ones. The technical details are beyond the scope of this whitepaper and will be elaborated when we open-source the QDay Node's implementation.

<a id="sec-5-3"></a>
### 5.3. Quantum-Resistant Wallet

It is obvious that all existing EVM-based wallets will not support the quantum-resistant account defined by QDay for that they are not supposed to support any post-quantum security features. Therefore, it is necessary to implement a new type of wallet to support QDay's quantum-resistant account. We will provide a reference implementation of such a wallet in QDay Phase 2. The code will be open-sourced to the public to help the community or any other parties to build compatible quantum-resistant wallets.

To create or import a quantum-resistant account, the user will use the same mnemonic phrase as the legacy account. The wallet will derive the quantum-resistant account from the mnemonic phrase and use it to transfer the native token $QDAY and interact with the quantum-resistant smart contracts and dApps.

To transfer $QDAY from a quantum-resistant account to a legacy account, the quantum-resistant wallet will directly submit a transaction to the blockchain nodes. This is different from transferring $QDAY from a legacy account to a quantum-resistant account in legacy wallets. As described in the previous section, QDay nodes will be able to directly process such transactions after the Phase 2 upgrade. Therefore, it's unnecessary to use the smart contract bridge in this case.

The main purpose of the quantum-resistant wallet is to interact with the quantum-resistant smart contracts and dApps. To understand how the quantum-resistant wallet interacts with the quantum-resistant smart contracts, we need to first understand how the quantum-resistant smart contracts are designed and implemented. Therefore, we leave this part to the next section where we describe the quantum-resistant smart contracts in detail.

In addition, a quantum-resistant wallet can also be used to interact with the legacy smart contracts and dApps, in case it is properly implemented. In the reference implementation, we will provide a fallback mechanism to support such scenarios. Specifically, to interact with a legacy smart contract, the wallet will use the corresponding legacy address to call the smart contract. The migration of assets will be handled automatically by the wallet. For example, to interact with a smart contract that swaps $QDAY for the chain's to-be-developed native stablecoin, the wallet will transfer the $QDAY to the legacy address before calling the smart contract and then transfer the stablecoin to the quantum-resistant address after the smart contract call.

<a id="sec-5-4"></a>
### 5.4. Quantum-Resistant Contracts

In QDay Phase 2, a quantum-resistant contract can be viewed as a legacy contract with an extra layer of post-quantum signature verification. From the perspective of the caller, the quantum-resistant contract is essentially the same as the legacy one. The only difference is that the caller needs to provide an extra quantum-resistant signature for every single call to contract methods that are supposed to be quantum-resistant. The quantum-resistant signature is passed by a normal parameter of a contract method and is verified by the contract itself.

Consider the transfer method in a quantum-resistant ERC20 contract. The legacy ERC20 method signature is as follows:

```solidity
function transfer(address to, uint256 value) external returns (bool);
```

The quantum-resistant version of the method is as follows:

```solidity
function pq_transfer(bytes pq_sig_data, address to, uint256 value) external returns (bool);
```

where `pq_sig_data` is the quantum-resistant signature.

As a convention defined by QDay, the function name must be prefixed with `pq_` and the signature is enforced to be the first parameter. This convention makes it easy to distinguish the quantum-resistant methods from the legacy ones. More importantly, with this convention, the QDay nodes can verify the quantum-resistant signatures automatically without extra codes in the contract. Specifically, as long as the signature data is generated in the standard way defined by QDay and passed as the first parameter to a function of which the name is prefixed with `pq_`, the QDay nodes will verify the signature using the built-in quantum-resistant signature verification mechanism.

Theoretically, the same mechanism can be implemented in a legacy contract on any EVM-compatible chain if the following issues can be addressed:

1. The quantum-resistant signature can be generated by either a quantum-resistant wallet or an external tool conforming to the standard defined by QDay.
2. The quantum-resistant signature can be verified within the contract function using the regular EVM instructions.

The first issue is straightforward to address though it may have unsatisfactory user experience when using legacy wallets companioned with an external tool. The second issue may be quite challenging to address as implementing the quantum-resistant cryptographic operations inside the contract function using the regular EVM instructions is non-trivial. Worse still, as the operations are resource-intensive, it may lead to unaffordable gas fees for the users.

Note that the second issue does not exist in QDay as the quantum-resistant signature verification is implemented as a built-in feature of QDay such that the computation is carried out natively on the operating system of the QDay nodes (i.e., not through the EVM) and therefore the computational cost will not be charged to the users in the form of gas fees.

<a id="sec-5-5"></a>
### 5.5. Quantum-Resistant dApps

We can see from the above that smart contracts must be upgraded to support quantum-resistant signatures. For the sake of smooth transition, dApps deployed in Phase 1 can keep the user interface of the dApp unchanged. Legacy wallets can interact with the dApp as before by first adding new quantum-resistant methods to the smart contracts used by the dApp, with all the existing legacy methods must be kept unchanged, and then upgrade the user interface of the dApp to add the support for the quantum-resistant wallets.

However, in some situations, it may be necessary to implement a separate quantum-resistant version of the dApp without the compatibility with the legacy wallets. This is to ensure that the quantum-resistant contracts will not be affected by the legacy ones. It is worth noting that QDay has no restriction on whether, when and how the dApps are upgraded to the quantum-resistant ones and the choice is left to the dApp developers.

<a id="sec-5-6"></a>
### 5.6. The Design Principles

The design of QDay Phase 2 follows these core principles:

1. **Backward Compatibility**
    - Legacy accounts and wallets continue to function without modification.
    - Legacy smart contracts remain fully operational.
    - Existing dApps can gradually transition to quantum-resistant versions.
2. **Security Isolation**
    - Quantum-resistant accounts are completely independent from legacy accounts (sharing only the mnemonic phrase).
    - Quantum-resistant smart contracts cannot be compromised by legacy cryptographic primitives.
    - Clear separation between quantum-resistant and legacy transaction types.
3. **Seamless User Experience**
    - Same mnemonic phrase can derive both legacy and quantum-resistant accounts.
    - Quantum-resistant wallets can optionally support legacy operations.
    - Automatic asset migration between legacy and quantum-resistant accounts when needed.
4. **Efficient Implementation**
    - Quantum-resistant signature verification is built into QDay nodes.
    - Additional gas costs for quantum-resistant operations.
    - Standardized prefix (`pq_`) for quantum-resistant contract methods.
5. **Flexible Adoption**
    - The developers of dApps can choose their own upgrade timeline.
    - Multiple implementational approaches available (gradual upgrade or complete replacement).
    - Optional fallback mechanisms for legacy compatibility.
6. **Clear Standards**
    - Consistent naming conventions for quantum-resistant methods.
    - Standardized signature data format.
    - Well-defined interfaces between legacy and quantum-resistant components.

These principles ensure that QDay can transition to quantum-resistant security while maintaining usability and allowing for organic ecosystem growth.

---

<a id="sec-6"></a>
## 6. Application Ecosystem

<a id="sec-6-1"></a>
### 6.1. Category 1: Application related to Abelian

Since Abelian is the solid foundation of the security of QDay, especially in Phase 1 where the post-quantum features of the L2 chain are completely gained from the rollups to the L1 chain, the applications related to Abelian will be the first to be launched on QDay. Such applications will be led by the QDay team with strategic and technical support from the Abelian team. Currently, the main applications fall in this category are Wrapped ABEL (WABEL) and Abelian Staking.

- **Wrapped ABEL (WABEL)** - WABEL is a QRC20 token on QDay that is 1:1 pegged to the ABEL coin on Abelian. It is used to bridge the ABEL token between the QDay Blockchain and the Abelian Blockchain. To mint WABEL, the user needs to lock the ABEL coin on Abelian and receive the corresponding amount of WABEL on QDay. To burn WABEL, the user needs to burn the WABEL on QDay and receive the corresponding amount of ABEL coin on Abelian. To support such operations, QDay team will implement an online service for the minting and burning of WABEL. The service will be operated by a union of institutions having Trust Service Provider (TSP) certification.
- **Abelian Staking** - Abelian Staking is a Phase 1 dApp that would allow users to stake ABEL on QDay to earn airdrop and staking rewards.

<a id="sec-6-2"></a>
### 6.2. Category 2: EVM-compatible Applications

These dApps will be EVM-compatible that shall work with legacy accounts and legacy wallets. To better support the dApps developed by the community, QDay team will implement a set of fundamental DeFi dApps and roll them out to the community as they become ready.

- **QDay Bridge:** a dApp to provide the cross-chain asset transfer functions. Different from WABEL, QDay Bridge will focus on bridging ERC20, TRC20 and QRC20 tokens between QDay and other EVM-compatible chains.
- **QDay Staking:** a dApp to provide the staking functions for $QDAY.
- **Q-Swap:** a decentralized exchange (DEX) dApp to provide the token swap functions. To help QDay go through the cold start period as smoothly as possible, the initial liquidity of $QDAY, WABEL and the chain's native stablecoins will be provided from the treasury of QDay and Abelian.
- **Q-Finance:** a consolidated dApp to integrate all the services above, where the users can easily manage their DeFi assets and participate in various DeFi dApps in a unified interface.
- **QLEAP (QDay Lending Ecosystem And Protocol):** a dApp to provide the lending and borrowing functions for QRC20 tokens. It's similar to the lending protocols on the existing EVM-compatible chains such as Aave and Compound.

<a id="sec-6-3"></a>
### 6.3. Category 3: Quantum-Resistant Applications

In QDay Phase 2, we will focus on providing quantum-resistant versions of the existing dApps. These dApps will serve as the reference implementations of the quantum-resistant contracts and dApps for the community. In addition, we will provide an external quantum-resistant signature generator for legacy wallets to interact with the quantum-resistant contracts and dApps. More details about the quantum-resistant applications will be provided in the future as they become ready.

---

<a id="sec-7"></a>
## 7. A New Evolution: Quantum-Resistant Agentic Payment Network (Phase 1.5)

<a id="sec-7-1"></a>
### 7.1. Vision: A Universal Platform for the Quantum Era

QDay was conceived as more than the world's first quantum-resistant EVM-compatible Layer 2. The long-term vision positions QDay as a universal application platform — one capable of hosting payments, decentralized finance, commerce, and AI-native services within a single, cohesive ecosystem.

All applications in this ecosystem share two foundational properties: the full expressive power of the Ethereum Virtual Machine, and the post-quantum security guarantees inherited from the Abelian blockchain at Layer 1.

Central to this vision is for the chain to have its own native stablecoin that is secured, compliant, and fiat-backed. Such stablecoin enables seamless, stable value exchange across all application categories — from consumer payments to autonomous agent commerce — without requiring users or agents to interact with volatile native tokens. In combination with QDay's quantum-resistant infrastructure, having this native stablecoin positions the platform as a credible, secure foundation for the global movement of digital money.

In summary, the team's mission for this phase of QDay development is:

> **To make QDay the world's first quantum-resistant payment blockchain with native agentic payment capabilities, powered by its own native stablecoin and secured by ZK proofs anchored on the Abelian Layer 1.**

<a id="sec-7-2"></a>
### 7.2. Convergence of Major Industry Trends

QDay's next strategic chapter is shaped by three industry trends that are simultaneously reinforcing each other and accelerating the demand for exactly the infrastructure that QDay is designed to provide (Datapoints provided in [Section 10](#sec-10)).

#### Trend 1 — The Rise of AI and Autonomous Agents

Artificial intelligence systems are no longer passive tools that respond to human queries. Modern AI agents plan, decide, and act autonomously on behalf of their users — scheduling meetings, executing trades, managing workflows, and increasingly, making purchases and financial transfers without human intervention at each step. The shift from AI as a software tool to AI as an economic actor is well underway.

This transformation has a direct consequence for blockchain infrastructure: AI agents require payment rails that operate at machine speed, with programmable rules, spending limits, and cryptographic identity. Traditional financial systems were not designed for this. Blockchain networks that provide programmable, low-cost, and identity-aware payment primitives are positioned to become the settlement layer for the agent economy. QDay, with its EVM programmability, stablecoin infrastructure, and forthcoming agent-specific capabilities, is designed to serve precisely this role.


#### Trend 2 — The Digitization of the US Dollar via Stablecoins

USD-pegged stablecoins — most prominently USDC and USDT — have achieved a combined market capitalization in the hundreds of billions and are processing trillions of dollars in annual settlement volume on public blockchains. Their regulatory trajectory has also shifted fundamentally: the United States has enacted legislative frameworks that formally recognize payment stablecoins. Same has happened in Europe and Hong Kong. Other major economies including the United Kingdom, the UAE, Singapore, and Japan are all pursuing equivalent frameworks.

Stablecoins now serve not merely as crypto-native instruments but as programmable dollar rails: they settle international B2B payments at a fraction of the cost and latency of correspondent banking, they enable creator monetization in emerging markets without local banking access, and they are being integrated directly into Visa's card settlement infrastructure. The US government has explicitly acknowledged stablecoins as a mechanism to extend the reach and demand for US dollar-denominated instruments globally.

QDay's own native stablecoin positions the platform at the intersection of this structural shift, where the entire QDay payment ecosystem is designed, enabling agents, users, and institutions to transact in digital dollars on a quantum-secure network.


#### Trend 3 — The Emergence of Agentic Payments

Payment infrastructure is undergoing a fundamental redesign in response to the agent economy. Stripe, Google, Coinbase, and a growing cohort of fintech companies have announced or deployed agent-specific payment primitives: APIs that allow AI agents to hold balances, initiate transfers, pay for API calls on a per-request basis, and receive value on behalf of their principals — all without requiring a human to authorize every transaction.

The HTTP 402 payment protocol ("x402") has emerged as a nascent standard for embedding stablecoin payments into ordinary web requests: an agent calls an API, the server responds with a payment request, the agent pays in USDC, and access is granted — all within a single HTTP exchange, with no API key management and no subscription overhead. Research from major cloud and payment providers indicates that a growing share of internet traffic is already generated by AI agents rather than humans, and that this share is increasing rapidly. The payment infrastructure to serve this traffic must be programmable, low-latency, and capable of operating at machine speed and machine scale. QDay is designed to participate natively in this emerging agentic payment landscape.


<a id="sec-7-3"></a>
### 7.3. The Strategic Path Forward

#### Migration to Polygon CDK

This is a strategic infrastructure decision with broad downstream consequences for QDay's performance and payment capabilities.

Polygon CDK is an open-source toolkit for deploying sovereign EVM-compatible blockchains as ZK rollups. A CDK chain retains full sovereignty — its own native token ($QDAY), its own validator set, its own governance — while connecting to a shared interoperability layer called AggLayer. The migration does not replace QDay's existing architecture; it upgrades the settlement and proof mechanisms with the capabilities described in this section.

Key characteristics of a CDK-based QDay chain:

- **High throughput:** ~2,000 transactions per second for the default CDK mode. Up to 20,000 TPS with optimized infrastructure.
- **Sub-cent transaction fees:** Average fees of a few cents per transaction, making microtransactions and agent micropayments economically viable at scale.
- **Sub-second payment settlement** on the QDay chain itself (excluding the proof submission to the L1 Abelian blockchain).
- **Validium mode:** Transaction data can be stored off-chain with only ZK proofs posted to the settlement layer, preserving privacy while maintaining cryptographic integrity.
- **EVM-compatible:** Full compatibility with the Ethereum development toolchain — all existing QDay smart contracts, dApps, and developer tooling migrate without modification.
- **ZK proof–based settlement:** Every batch of QDay transactions is accompanied by a zero-knowledge validity proof routed through a proof aggregation layer that submits consolidated proofs to the Abelian blockchain — preserving the quantum-resistant settlement guarantee that is central to QDay's security model.

#### Agentic Payment Capabilities

- **Wallet infrastructure:** Enterprise-grade smart contract wallets with embedded SDK, gas abstraction (users pay entirely in QDay's native stablecoin, never in native gas tokens), passkey-based authentication and spending controls. AI agents can be assigned session-scoped wallets with configurable spending limits and expiry windows.
- **Compliance and identity:** Onchain agent identity registration via ERC-8004, enabling agents to build portable reputation and be trusted by counterparties and services.
- **Settlement rails:** QDay's own chain provides fast, low-cost settlement — sub-second speed, sub-cent fees — as the base layer for all payment flows.
- **The x402 agentic payment protocol:** The HTTP 402 payment standard enables AI agents to pay per API request in QDay's native stablecoin via ordinary HTTP calls. An agent making a data request, an inference call, or a service invocation can pay for it in QDay's native stablecoin in real time without prior agreements, subscriptions, or API key management.

#### QDay's Native Stablecoin for the Agent Economy

QDay shall have its own native stablecoin that is US dollar-pegged as the primary unit of account for all payment activity on the platform. In the context of the agent economy, such stablecoin serves several distinct functions:

- **Gas abstraction:** The integration and usage of a paymaster infrastructure in QDay's will allow agents and users to pay transaction fees in the native stablecoin, eliminating the need to hold or manage the $QDAY native token for routine payment operations. From the agent's perspective, every interaction is calculated in stablecoin — there is no concept of gas tokens.
- **AI agent treasury:** Agents can hold stablecoin balances in their session-scoped wallets, spend within their configured limits, and receive stablecoins as payment for services rendered — constituting a complete economic lifecycle without human intervention.
- **Cross-border payments:** Stablecoin transfers on QDay settle in under a second at sub-cent fees, making it practical for cross-border B2B and consumer payment flows where traditional rails impose multi-day settlement windows and fees of 1-3%.
- **DeFi collateral:** Within QDay's DeFi ecosystem (Q-Swap, QLEAP, etc.), the native stablecoin shall serve as the primary stable collateral, enabling lending, borrowing, and liquidity provisioning in a dollar-denominated instrument that does not require exposure to crypto price volatility.

<a id="sec-7-4"></a>
### 7.4. The QDay Differentiator: Quantum-Secure Payments

The most significant strategic differentiation for QDay in the global payments landscape is one that no other payment blockchain currently possesses — post-quantum cryptographic security that is in Phase 1 anchored on a purpose-built quantum-resistant Layer 1 before becoming native post-quantum in Phase 2.

#### QDay's Unique Security Architecture

In Phase 1, QDay operates as an EVM Layer 2 chain whose final state is settled — through the PQZK Bridge — on the Abelian L1, where the L1 chain employs lattice-based cryptographic algorithms (LWE and Ring-LWE) that are classified as quantum-resistant by the National Institute of Standards and Technology (NIST) under the U.S. Department of Commerce.

The critical property is cross-chain finality backed by ZK proofs settled on Abelian L1. Once a batch of QDay transactions has been proven and committed to Abelian, the finality of that state is protected by quantum-resistant cryptography. An adversary with access to a quantum computer cannot forge the Abelian-layer signatures of the rollup operators, cannot produce a valid PQZK proof for an invalid state transition, and therefore cannot modify or reverse confirmed QDay transactions — even with quantum computational resources.

This property is unique to QDay in the current market. Competing payment blockchains and L2 solutions settle on Ethereum or alternative L1s whose cryptographic assumptions are classical and therefore vulnerable to a sufficiently capable quantum computer. QDay is the only EVM-compatible payment network that anchors its finality in post-quantum cryptography.

#### Quantum-Resistant Agentic Commerce

The convergence of AI agents and quantum-resistant payments is a particularly significant research direction. As AI agents become economic actors — holding balances, initiating payments, and managing financial positions — the security of the keys and wallets they use becomes critical. A quantum computer capable of breaking elliptic curve cryptography could, in principle, derive the private key of any standard EVM wallet from its public key. For an AI agent operating autonomously at scale, the consequences of such an attack would be severe and potentially irreversible.

QDay's roadmap addresses this directly. The Phase 2 quantum-resistant account model — which introduces post-quantum keys, quantum-resistant wallets, and quantum-resistant smart contracts — will be extended to cover agent wallet infrastructure. AI agents operating on QDay will be able to hold stablecoin balances in quantum-resistant accounts, with session-scoped spending limits enforced by quantum-resistant smart contracts. The private keys protecting these accounts are secured by lattice-based cryptography that remains intractable to both classical and quantum adversaries.

In combination with the DAO-based rollup halt mechanism described in Phase 1, QDay provides a complete response framework for quantum-level threats: detect, halt, freeze, remediate, and resume — all in a manner that a quantum computer cannot circumvent, because every step requires quantum-resistant signatures from the rollup operators.

<a id="sec-7-5"></a>
### 7.5. Research and Development Focus Areas

The following areas represent the team's active R&D directions as QDay evolves toward its full payment and agent-commerce vision:

1. **CDK migration** — Completion of the QDay blockchain migration to Polygon CDK and deployment of the PQZK Bridge to anchor ZK proofs on Abelian. This is the foundational infrastructure step to the subsequent agentic payment capabilities.
2. **Native stablecoin infrastructure** — Integration with the Open Money Stack (OMS) layer. Build a QDay's paymaster infrastructure for using the chain's stablecoin as a native gas token.
3. **Agentic wallet services** — Design and implementation of session-scoped, quantum-resistant agent wallets with configurable spending limits and time-bounded access windows. Integration with the x402 protocol for per-request stablecoin payments.
4. **Onchain agent identity (ERC-8004)** — Deployment of the ERC-8004 agent identity standard on QDay, enabling AI agents to register verifiable identities, build portable reputation, and be trusted by counterparties.
5. **Privacy layer for institutional payments** — Investigation of ZK shielded pool technologies to enable confidential institutional payment flows on QDay, where payment amounts and counterparty addresses are not disclosed to public observers while remaining verifiable to authorized auditors.

<a id="sec-7-6"></a>
### 7.6. Summary

QDay's next innovation chapter is defined by three converging forces — the AI agent economy, the global adoption of US dollar stablecoins, and the demand for quantum-secure financial infrastructure — and by a clear strategic response to each.

The migration to Polygon CDK unlocks the throughput and is the base for the agentic payment infrastructure. Having its own native stablecoin provides the stable, dollar-denominated monetary unit that agents, users, and institutions need to transact without volatility exposure. And the unique quantum-resistant security architecture — EVM Layer 2 execution with ZK proof finality anchored on the Abelian blockchain — provides a level of cryptographic assurance that no other payment network in the world currently offers.

QDay will be the world's first quantum-resistant payment blockchain with native agentic payment capabilities: a platform where AI agents pay for services in QDay's stablecoin, where cross-border settlements confirm in under two seconds at sub-cent cost, and where the finality of every transaction is ultimately guaranteed by post-quantum cryptography immune to the most powerful computational adversaries anticipated in the coming decade.

---

<a id="sec-8"></a>
## 8. Roadmap

| Target Date | Milestones / Release | Technical Deliverables & Scope |
|---|---|---|
| 2024 Q2 | Start Phase 1 Development | Initial ZK rollup adaptation over Abelian UTXO structure. |
| 2024 Q4 | Launch v1 of QDay Phase 1 Testnet | First public testnet featuring L1-assisted ZK rollups. |
| 2025 Q2 | Launch v2 of QDay Phase 1 Testnet | EVM compatibility refinement and developer tooling release. |
| 2025 Q4 | Launch QDay Phase 1 Mainnet | Mainnet launch featuring L1-assisted quantum-resistant ledger. |
| 2026 Q1 | Start Phase 1.5 Development | Development of agent payments, x402 integration & native stablecoin. |
| 2026 Q3 | Launch QDay Phase 1.5 Upgrade (Enhanced Payment) on Aevum Testnet | Modular Polygon CDK upgrade, x402 facilitator, stablecoin paymaster live. |
| 2026 Q4 | Start Phase 2 Development | Native post-quantum account models and ML-DSA-65 compiler work. |
| 2027 Q1 | Launch QDay Phase 1.5 Upgrade (Enhanced Payment) on Mainnet | Mainnet deployment of Enhanced Payment Network & native stablecoin. |
| 2027 Q2 | Launch QDay Phase 2 Upgrade (Native PQ) on Aevum Testnet | Testnet launch of native PQ accounts, contracts, and wallets. |
| 2027 Q4 | Launch QDay Phase 2 Upgrade (Native PQ) on Mainnet | Full Mainnet production launch of native post-quantum QDay |

---

<a id="sec-9"></a>
## 9. Conclusion

QDay represents a groundbreaking advancement in blockchain technology, offering the first quantum-resistant EVM-compatible Layer 2 solution that is scalable and high-performance. Through its pragmatic multi-phase implementation strategy, QDay addresses the critical challenge of quantum computing threats while maintaining the practical benefits of existing blockchain infrastructure.

Phase 1 establishes quantum-resistant ledger security through L1-assisted rollups, leveraging Abelian's quantum-resistant properties while preserving full EVM compatibility. The novel POS-over-POW consensus mechanism combines the security benefits of Proof of Work with the efficiency advantages of Proof of Stake, creating a unique and robust security model. The implementation of quantum-resistant rollups provides an additional layer of protection, allowing for secure transaction processing and the ability to halt operations if threats are detected.

Phase 2 advances quantum security to the account level, introducing quantum-resistant accounts, wallets, and smart contracts while maintaining backward compatibility with legacy systems. This careful balance between innovation and compatibility ensures a smooth transition for existing users and developers while providing enhanced security features for those who require them.

In between, a newly inserted Phase 1.5 addressed the growing need for a secure, high-performance payment rail in the face of growing AI demand and agentic payments and commerce.

QDay's comprehensive ecosystem approach, including essential DeFi applications and cross-chain bridges, creates a complete quantum-resistant blockchain environment. The platform's tokenomics model, with its balanced distribution strategy, ensures long-term sustainability and incentivizes broad participation across the network.

QDay's roadmap outlines a clear path toward full implementation, with careful attention to testing, gradual deployment, and ecosystem development. This methodical approach, combined with the platform's innovative technical features, positions QDay as a pioneer in quantum-resistant blockchain technology, ready to address both current needs and future challenges in the evolving blockchain landscape.

Beyond the immediate roadmap, the QDay team is actively pursuing a strategic research and development direction that extends the platform's quantum-resistant foundation into the emerging landscape of global stablecoin payments and AI-native commerce. The goal of this research direction is unambiguous — to establish QDay as the world's first quantum-resistant global payment network with native agentic payment capabilities, providing individuals, enterprises, and autonomous AI agents with a platform where digital commerce is fast, low-cost, and immune to the quantum threats that the broader financial and blockchain landscape has yet to address.

Through its combination of quantum resistance, scalability, and practical usability, QDay represents not just an incremental improvement but a fundamental advance in blockchain technology, paving the way for a more secure and sustainable future for decentralized applications and digital assets.

---

<a id="sec-10"></a>
## 10. References

1. QDay Official Website: https://www.qday.io/
2. QDay Documentation: https://community.qday.io/guide/
3. Fabian Vogelsteller, Vitalik Buterin, November 2015. ERC-20: Token Standard. https://eips.ethereum.org/EIPS/eip-20
4. Polygon zkRollup. https://docs.polygon.technology/cdk/concepts/zk-vs-optimistic/?h=polygon+zk+rollups#zero-knowledge-rollups

### Technical Papers

1. Abelian, May 2023, Post-Quantum Zero-Knowledge (PQZK) Bridge. https://download.pqabelian.io/release/docs/Abelian%20PQZK%20Bridge.pdf
2. Abelian, February 2022, Abelian Whitepaper. https://community.pqabelian.io/guide/abelwhitepaper.html
3. Abelian, February 2022 Abelian Improvement Proposal 0011: Mnemonic Codes for Generating Deterministic Accounts. https://github.com/pqabelian/aips/blob/master/aips/aip0011/aip0011_v005.md

### Data points for Section 7.2

1. Automated machine traffic reached 57.4% of global web requests in June 2026 (i.e. more than human traffic). Agentic AI spend is estimated to reach $201.9B in 2026. Autonomous software requires payment rails that settle at machine speed without manual human intervention. (Source: Cloudflare, Gartner)
2. Data points: Stablecoins settled $9 trillion in June 2026, with adjusted volume (for real economic usage) of $1.79 trillion and a market cap of over $310 billion. Total stablecoin market cap to reach $1.9 trillion by 2030 (Source: Visa, Citi)
3. Data points: Since launch in May 2025, agents, via x402 protocol, have settled over $73 million across 176 million transactions, with around 3,900 merchants now accepting payments through the standard. (Source: Coinbase)
