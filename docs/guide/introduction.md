---
sidebar_position: 0
sidebar_label: QDay Introduction
---

# 1\.QDay Introduction

### **1.1 What is QDay**

QDay is an EVM-compatible Layer-2 network built on Abelian, a quantum-resistant Layer-1 blockchain that has run at mainnet for several years. Abelian secures itself with lattice-based cryptography — a class of encryption recognized by the U.S. National Institute of Standards and Technology (NIST) as resistant to attacks from quantum computers. Because QDay’s transactions rollup to Abelian, QDay inherits that quantum-resistant security, while remaining fully compatible with Ethereum’s smart contract language and developer tools.

QDay is being built in three stages:

1. **Quantum-resistant settlement.** Established first, using zero-knowledge rollup technology.

2. **Global payment network.** Built out around QDay’s own stablecoin, USD8, and designed for everyday commerce as well as payments initiated by AI agents.

3. **Native quantum-resistant accounts and wallets.** Brought directly into QDay itself, so users are no longer relying solely on rollup-level protection.

QDay is built for:

* Payment processors and merchants — from traditional storefronts to agent-driven commerce — that need low-cost, high-throughput settlement.

* Asset-tokenization platforms that need quantum-resistant settlement infrastructure.

* Developers building decentralized finance (DeFi) applications.

* Small teams and solo founders — including “one-person companies” that lean on AI agents to run much of the business.

QDay exists to address three problems that most blockchains weren’t built for:

* The long-term exposure of on-chain assets to future quantum computers.

* The lack of payment rails designed for AI agents transacting at machine speed.

* The cost and latency that make everyday payments and micropayments impractical on many general-purpose chains.
  
### **1.2 Vision**

QDay’s long-term goal is to be a single, unified platform for payments, decentralized finance, commerce, and AI-native services — all secured by quantum-resistant cryptography and built around QDay’s own stablecoin, USD8, as the primary way value moves through the ecosystem.

### **1.3 Why QDay**

QDay’s design responds to three shifts happening at once. AI agents are moving from passive tools to autonomous economic actors that plan, decide, and pay on a person’s behalf — which requires payment rails with programmable spending rules and verifiable identity, something most financial systems and blockchains weren’t built for. Stablecoins have become a mainstream way to move US dollars on-chain, settling trillions of dollars a year. And a new generation of “agentic payment” protocols is emerging — ways for AI agents to pay for API calls and services directly, without subscriptions or manual approval.

QDay is built at the intersection of these three shifts: an EVM-compatible chain whose settlement is secured by post-quantum cryptography, with a native stablecoin, USD8, and payment infrastructure designed specifically for AI agents as well as people. QDay treats speed and low cost as the starting point rather than the differentiator — quantum-resistant settlement and native agent payments are what set it apart.

**At a glance:**

| Quantum-ready | Settlement secured by Abelian’s quantum-resistant cryptography, with quantum-resistant accounts and wallets on the roadmap |
| :---- | :---- |
| **AI Native** | Onchain agent identity and per-request payments purpose-built for AI agents |
| **Payment Friendly** | USD8, QDay’s native USD-pegged stablecoin, as the primary way value moves on QDay |
| **zk Powered** | Zero-knowledge rollup technology for scaling and quantum-secure settlement |
| **Low Cost** | Transaction fees designed to be a small fraction of a cent to a few cents |
| **High Throughput** | Designed for thousands of transactions per second, scaling toward tens of thousands as the network matures |

---

## **2\. Why QDay**

### **2.1 QDay vs Ethereum**

|  | Ethereum | QDay |
| :---- | :---- | :---- |
| Speed | \~15–30 transactions per second at the base layer | Thousands of transactions per second today, designed to scale toward tens of thousands |
| Fees | Can rise sharply when the network is busy | Designed to stay low and predictable — a fraction of a cent to a few cents per transaction |
| Finality | \~12–15 minutes for full settlement | Under a second on QDay itself, with settlement anchored to Abelian shortly after |
| Smart accounts | Optional add-on most wallets don’t use by default | Smart contract wallets with gas paid in QDAY (USD8 for agent-initiated payments), passkey login, and spending limits built in |
| Quantum security | Relies on cryptography that isn’t designed to resist quantum computers | Settlement secured by quantum-resistant cryptography from the start |
| AI agents | No native support | Built-in identity and payment infrastructure for AI agents |
| Payments | Workable, but cost and speed limit frequent or small payments | Built around USD8, a native stablecoin designed for everyday and machine-speed payments |
| Everyday experience | Mnemonic phrases and manual fee management | Simpler by design: predictable QDAY gas fees, passkey login |

### **2.2 QDay vs Generic EVM Chains**

Polygon, BNB Chain, Arbitrum, Optimism, Base, and Avalanche are all widely used EVM-compatible chains, and most of them compete on the same thing: being a faster, cheaper alternative to Ethereum, while relying on the same account security and offering nothing built specifically for AI agents.

QDay’s difference is combining four things these chains don’t offer together: native infrastructure for AI agents, a payment system built around USD8, its native stablecoin, rather than a volatile native token, settlement secured by quantum-resistant cryptography, and full EVM compatibility. Being fast and cheap is the baseline QDay starts from — not the pitch.

### **2.3 Core Features**

#### *zk Proof*

QDay uses zero-knowledge rollup technology to bundle transactions and prove their validity without revealing the underlying data, then settles that proof to Abelian. This keeps transactions fast and cheap while giving them the same quantum-resistant guarantee as Abelian itself — the proofs are constructed so that even an attacker with a quantum computer cannot forge them.

#### *Post-Quantum Security*

Abelian, the Layer-1 chain QDay settles to, uses lattice-based cryptography — specifically the Learning-With-Errors (LWE) and Ring-LWE problems — a mathematical approach recognized by NIST as resistant to quantum attacks, instead of the elliptic-curve cryptography most blockchains use today. QDay is also building quantum-resistant accounts directly into its own layer: a new account type, generated from the same mnemonic phrase as a user’s existing account, that uses quantum-resistant keys independently of the standard account. The two can coexist, and value can move between them, so adopting quantum-resistant security doesn’t require abandoning an existing wallet.

If a dApp on QDay is ever exploited, the affected account can be frozen and the network can pause processing for the rollup involved while the incident is resolved — and because that pause relies on quantum-resistant signatures, an attacker cannot force it open even with access to a quantum computer.

#### *Smart Wallets*

QDay wallets are smart contracts rather than simple key pairs: fees can be paid in USD8 instead of a separate gas token, login can use a device passkey instead of a mnemonic phrase, and AI agents can be given their own wallets with configurable spending limits and expiration windows.

#### *AI Agent*

QDay gives AI agents a direct, native way to transact: an onchain identity standard so an agent can build a verifiable reputation, and a payment protocol that lets an agent pay for an API call or service in a single request — in USD8, with no subscription or manual approval needed.

#### *Payment*

USD8, QDay’s native stablecoin pegged to the US dollar, is the primary way value moves across the network — for consumer payments, merchant settlement, and machine-speed agent payments alike. Fees are paid in USD8 rather than a volatile native token, and cross-border transfers are designed to settle in under a couple of seconds, well below the cost and delay of traditional banking rails.

---

## **3\. Ecosystem**

### **3.1 Overview**

QDay’s ecosystem is built in layers: a core protocol connecting QDay to Abelian for security and settlement, a set of DeFi and bridging applications, and an agent-and-payments layer built around USD8, QDay’s native stablecoin.

### **3.2 DApps & DeFi**

QDay’s ecosystem applications include:

* **ABEL Staking** — stake ABEL on QDay to earn staking and airdrop rewards.

* **QDay Bridge** — moves ERC20, TRC20, and QRC20 tokens between QDay and other EVM-compatible chains.

* **QDay Staking** — stake QDAY to support the network and earn rewards.

* **Q-Swap** — QDay’s decentralized exchange for swapping tokens.

* \[Placeholder\] A prediction market is planned.

* \[Placeholder\] An oracle service is planned.

* \[Placeholder\] An onchain identity product is planned.

Together, these form QDay’s DeFi layer: Q-Swap handles token swaps, and staking is available for both QDAY and ABEL. The design intent is for USD8, QDay’s native stablecoin, to serve as the primary collateral and settlement asset across all of them, so DeFi activity on QDay isn’t exposed to native-token price swings.

### **3.3 AI Ecosystem**

AI agents on QDay hold their own wallets, register a verifiable onchain identity, and pay for services directly in USD8 — a single API call can be paid for in real time, without a subscription or a human approving each transaction.

### **3.4 Abelian Partnership**

Abelian is the Layer-1 blockchain underneath QDay. It has operated at mainnet for several years, using proof-of-work consensus and lattice-based cryptography that predates and underlies QDay’s own quantum-resistant design. Abelian provides the settlement layer QDay’s transactions ultimately anchor to, the quantum-resistant signatures behind QDay’s security features, and the account-derivation standard QDay’s own quantum-resistant accounts are built on.

---

Welcome to participate in the QDay! This beginner's guide will help you get started quickly and step-by-step experience the various features and services of the QDay.
