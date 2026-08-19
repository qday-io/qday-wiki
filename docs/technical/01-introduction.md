---
sidebar_position: 1
title: Introduction
draft: false
---

# Introduction

QDAY's positioning, vision, and technical direction.

:::info Draft
This page is scaffolded — the structure is in place and the content is being written.
:::

**Highlights:** zk Proof, ML-DSA-65, ERC-4337, AI Agent, Payment

## What is QDAY

QDAY is a quantum-resistant, EVM-compatible Layer 2 network built on top of Abelian, the world's first quantum-resistant blockchain. It is designed for a single, uncompromising goal: to keep on-chain value and identity secure on the day large-scale quantum computers arrive — the moment the industry calls "Q-Day."

As a Layer 2, QDAY brings familiar EVM smart-contract execution and improved transaction throughput to users and developers, while inheriting its security from the quantum-resistant cryptography already operating on Abelian's Layer 1.

Nearly every blockchain in use today relies on elliptic-curve cryptography (ECDSA) to protect wallets and sign transactions. That math is efficient and battle-tested, but it is also known to be breakable by a sufficiently powerful quantum computer running Shor's algorithm. The assets and identities secured by those signatures are, in effect, borrowing against a deadline.

QDAY is built to remove that deadline. Rather than relying on ECDSA, it inherits Abelian's lattice-based cryptography (built on Learning-With-Errors and Ring-LWE hardness assumptions) and layers Zero-Knowledge Rollups, a novel PoS-over-PoW consensus design, and a two-phase quantum-resistant account model on top.

In short: QDAY is where you can transact and build today with cryptography and an architecture designed to remain secure after Q-Day.

## Vision & Mission

Vision. 
A digital economy whose foundations do not expire — where value and identity remain trustworthy across the transition to the quantum era.

Mission. 
To deliver a quantum-resistant Layer 2 that developers and users can adopt without friction, by pairing Abelian's post-quantum cryptographic foundation with the developer ergonomics of the EVM.

The guiding principle is simple: security that arrives after an asset is compromised is worthless. Migration to quantum-safe cryptography must happen before Q-Day, not after — and QDAY exists to make that migration practical now.

## Why QDAY

The threat is not hypothetical. 
"Harvest now, decrypt later" attacks are a documented concern in the security industry: adversaries can record encrypted data and signed transactions today, intending to break them once quantum hardware matures. On a public blockchain, every signature is permanently visible, which makes chains an especially exposed target.

Retrofitting is hard. 
Building quantum-resistant from the base is better. QDAY doesn't bolt post-quantum security onto an existing chain after the fact — it inherits quantum resistance directly from Abelian's Layer 1 via quantum-resistant rollups, and is extending that resistance down to the account and smart-contract level in a second development phase.

You shouldn't have to trade security for usability.
QDAY adapts Polygon's ZK Rollup technology (adapted to work with Abelian's UTXO-based Layer 1, rather than the account-based Layer 1s ZK Rollups are normally built on) to keep the network scalable, while preserving full EVM compatibility for developers.

EVM-compatible, so you don't start over.
As an EVM-compatible Layer 2, QDAY lets existing Solidity tooling, wallets, and mental models carry over. Developers get the ecosystem they already know, backed by Abelian's quantum-resistant foundation.

## Key Features

Quantum-resistant by inheritance. 
QDAY's ledger security is anchored to Abelian's lattice-based cryptographic keys and algorithms (LWE / Ring-LWE hardness assumptions), rather than to a bolt-on module.

Quantum-resistant ZK Rollups. 
QDAY adapts Polygon's Zero-Knowledge Rollup technology to Abelian's UTXO-based Layer 1. If an attack is detected, rollup execution can be halted in a quantum-resistant way — attackers cannot forge the signatures needed to keep moving funds once a halt is in effect.

PoS-over-PoW consensus. 
QDAY layers a Proof-of-Stake validator system on top of Abelian's Proof-of-Work Layer 1 — a hybrid design intended to combine PoW's security guarantees with PoS's efficiency and scalability.

EVM-compatible Layer 2. 
Full support for existing Solidity contracts and Ethereum tooling.

Two-phase quantum-resistant account model. 
Phase 1 secures ledger data via L1-assisted rollups. 
Phase 2 (in development) introduces dedicated quantum-resistant accounts, wallets, and smart contracts — derived from the same mnemonic phrase as a user's existing account, but cryptographically independent from it for security isolation.

Cost-effective, fast settlement. 
Off-chain transaction processing plus the PoS layer are designed to lower fees and speed up confirmation relative to Abelian's Layer 1 alone.

## Core Capabilities

Post-quantum ledger security 
Once a rollup is confirmed by Abelian, the underlying ledger data — including pending, not-yet-finalized transactions — is protected against quantum-computer-assisted attacks, including 51% attacks.

Quantum-resistant halt mechanism 
If a quantum-capable attacker exploits a vulnerability, QDAY's DAO can vote to halt rollup execution, freeze affected activity, and coordinate a response — a safeguard the whitepaper notes isn't available on comparable Layer 2 networks today.

Backward-compatible account model 
Phase 2's quantum-resistant accounts are designed so a single mnemonic phrase can derive both a legacy (EVM-standard) account and a quantum-resistant one, easing the migration path for existing users and wallets.

Account Abstraction
Through robust support for ERC-4337, QDAY enables advanced account abstraction (utilizing typed bundlers like Alto). This provides users with gasless transactions, batch processing, and vastly improved UX.

Advanced Application Ecosystem
QDAY's infrastructure supports seamless cross-chain interoperability, decentralized exchanges (QDay Swap), and robust, high-speed Payment capabilities tailored for scalable DeFi solutions.

Automated & Intelligent Interactions
Designed to handle high-frequency interactions, QDAY's low-latency environment is perfectly suited for on-chain automation, where an AI Agent can autonomously manage intent-based transactions, execute smart contract interactions, and optimize trading strategies on decentralized exchanges.

## Technology Stack

QDAY's sophisticated modular architecture leverages the best of modern blockchain technology:

Layer 1 Foundation
The Abelian blockchain (Lattice-based post-quantum cryptography).

Execution & Proving
Forked instances of Polygon CDK, PolygonZKEVM contracts, and a highly performant Rust EVM implementation (qday-revm).

Data Availability & Consensus
Integrates CometBFT for distributed state machine replication and DA nodes forking Ethermint.

Smart Wallets & Bundlers
TypeScript-based ERC-4337 bundlers and highly optimized indexers for seamless cross-chain bridging operations.

## Network Roadmap

Phase 1: L1-Assisted Quantum-Resistant Rollups with EVM Compatibility. 
Integration of ZK Rollups with Abelian to create a quantum-resistant ledger while maintaining standard EVM account models. If malicious quantum anomalies are detected, consensus operators can execute a decentralized "halt," freezing rollups to prevent the loss of funds while retaining data integrity.

Phase 2: L2-Native Quantum-Resistant Accounts & Smart Contracts. 
Full implementation of quantum-resistant cryptographic keys directly into user accounts. The EVM will be natively upgraded to process post-quantum algorithms, seamlessly supporting both traditional contracts (for backward compatibility) and highly secure quantum-resistant contracts.

## Release Lifecycle

_Coming soon._
