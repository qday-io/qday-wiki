---
sidebar_position: 7
title: FAQ
---

# QDay FAQ

:::tip[Already used QDay before Aevum?]
QDay has undergone a major architectural upgrade. If you are coming from the previous QDay network, start with **[Section 2 — I used the old QDay](#2-i-used-the-old-qday)** to understand what changed, what stays the same, and what you need to do with your existing wallet, assets and applications.
:::

## Quick reference — QDay Aevum Testnet

| Field | Value |
|---|---|
| Network name | QDay Aevum |
| Chain ID | `44005` (`0xABE5`) |
| RPC URL | `https://rpc-test.qday.info` |
| WebSocket | `wss://rpc-test.qday.info` |
| Explorer | [https://explorer-test.qday.info](https://explorer-test.qday.info) |
| Currency symbol | tQDAY (native testnet QDAY, 18 decimals) |
| Faucet | [Get testnet tokens](/guide/start/faucet) |
| One-click setup | [Add QDay to your wallet](/guide/start/add-network) |

Full parameters for all networks (Origin mainnet `44001`, Origin testnet `44003`, Aevum testnet `44005`): [Chain parameters](/Knowledge/reference/chains).

## Contents

1. [New to QDay](#1-new-to-qday)
2. [I used the old QDay](#2-i-used-the-old-qday)
3. [I'm using Aevum](#3-im-using-aevum)
4. [I'm a developer](#4-im-a-developer)
5. [Payments & AI agents](#5-payments--ai-agents)
6. [$QDAY token & staking](#6-qday-token--staking)
7. [Security](#7-security)
8. [Glossary](#8-glossary)

---

## 1. New to QDay

### 1.1 What is QDay?

QDay is a post-quantum, EVM-compatible Layer 2 network built for tomorrow. Designed for agents, payments and decentralized applications, QDay delivers sub-second settlement at scale. With a native stablecoin and the x402 standard integrated, QDay is the foundational blockchain for the agent-led economy.

QDay is currently live on testnet (**QDay Aevum**), with the upgraded mainnet scheduled for Q1 2027.

### 1.2 Why does QDay exist?

QDay addresses two challenges facing the next generation of blockchain applications: the need for scalable, fast and usable blockchain infrastructure, and the need to prepare blockchain security for future quantum-computing threats.

### 1.3 What makes QDay different?

QDay combines EVM compatibility with a dual quantum-resistant security architecture — a post-quantum cryptographic signature plus a post-quantum vault in Abelian. Its latest architecture also focuses on high-performance payments, stablecoins and machine-to-machine / AI-agent transactions.

### 1.4 What is Abelian?

Abelian is a quantum-resistant Layer 1 blockchain that powers a privacy-focused network. Cryptographically proven to withstand attacks from quantum computers, it uses NIST-approved lattice-based linkable ring signature schemes to keep wallet addresses and transaction amounts untraceable and hidden. Abelian is the settlement layer QDay anchors to.

### 1.5 What is Aevum?

Aevum — from the Latin root for "eternity" — is the name of QDay's new testnet, launched as part of a major architectural upgrade. It represents the transition from the earlier QDay architecture (now called **QDay Origin**) to the new-generation architecture described in QDay's latest technical direction.

### 1.6 How does QDay settle to Abelian?

QDay bundles off-chain transaction batches into zero-knowledge validity proofs and submits them to the Abelian L1 via a quantum-resistant rollup bridge. Rollup operators sign these state transitions with Abelian's native lattice-based keys, anchoring finality directly to L1. Once transactions are confirmed on Abelian, the ledger state becomes permanently immutable and resistant to quantum attacks.

### 1.7 What does quantum-resistant mean?

Quantum-resistant means using cryptography designed to remain secure even against sufficiently powerful quantum computers. Traditional cryptography could potentially be broken by future quantum computers. QDay's current architecture provides quantum-resistant protection for the ledger and settlement layer; the ongoing upgrade extends this protection to accounts and smart contracts.

### 1.8 Why does blockchain need quantum resistance?

Many blockchains rely on public-key cryptography such as ECDSA. A sufficiently powerful quantum computer running Shor's algorithm could potentially break those assumptions and recover private keys from public information. Quantum-resistant cryptography is intended to address this future threat.

### 1.9 What is $QDAY?

$QDAY is QDay's native token. It is the gas and governance token of the QDay ecosystem, including network transactions and staking-related functions. See [Section 6](#6-qday-token--staking).

### 1.10 What is USD8?

USD8 is the native post-quantum stablecoin of the QDay ecosystem — a fully collateralized, fiat-referenced stablecoin with a strict 1:1 peg to the US Dollar. Every circulating token is backed by 100% reserves held in liquid, money-like instruments, verified through transparent attestation and automated mechanisms.

### 1.11 Why is QDay building for AI agents?

AI agents need payment infrastructure that supports machine-to-machine transactions, programmable spending, identity and rapid settlement. QDay's architecture combines these capabilities with EVM smart contracts, stablecoins and x402 payments.

### 1.12 What is x402?

x402 is a payment standard built around HTTP's `402 Payment Required` status. It lets a client or agent pay for an API, service or resource as part of an HTTP request, instead of relying on subscriptions, invoices or API-key-based billing.

### 1.13 What can I build on QDay?

EVM-compatible smart contracts and dApps, including DeFi, payment and stablecoin applications, and infrastructure for AI-agent transactions. QDay's architecture is specifically being developed toward agent wallets, programmable payments and x402-based transactions. Start at [Build on QDay](/guide/handbook/build-on-qday).

### 1.14 Where can I find the security documentation?

All security documentation lives in the Technical Knowledge Base under **[Security](/Knowledge/technical/security)**. It covers the security overview, post-quantum security, smart-contract, wallet, bridge, RPC, payment and AI-agent security, key management, audit reports, the bug bounty and responsible disclosure. The underlying design is described in the [QDay Whitepaper](/guide/handbook/qday-whitepaper). See also [Section 7](#7-security).

---

## 2. I used the old QDay

### 2.1 What changed from the previous QDay architecture?

The earlier QDay architecture (**QDay Origin**) focused on proving the concept of a quantum-resistant, EVM-compatible blockchain layer with Abelian as the quantum-resistant foundation.

The upgraded architecture (now live on the **QDay Aevum** testnet) expands this into a higher-performance execution and settlement platform, with a stronger focus on payments, stablecoins, AI agents, x402 and future native quantum-resistant accounts and smart contracts.

### 2.2 Is Aevum replacing the old QDay?

No. Aevum is the testnet for the upgraded QDay architecture. The existing QDay (Origin) is fully functional and continues to run. After the upgraded mainnet launches, existing users will migrate their assets during a dedicated migration window — see [2.3](#23-what-is-the-migration-roadmap).

### 2.3 What is the migration roadmap?

| Step | Timing |
|---|---|
| Existing QDay (Origin) keeps running | Now |
| Aevum testnet for the upgraded architecture | Live now |
| Upgraded QDay mainnet launch | Scheduled for Q1 2027 |
| Migration window for existing users | 6–12 months after mainnet launch |

### 2.4 Do I need to migrate?

Yes. After the upgraded QDay mainnet launches, there will be a 6–12 month migration period for existing users to move their assets from the old QDay to the new one.

### 2.5 How do I migrate assets and staking?

Staking-migration and asset-migration bridge tools are being deployed. A step-by-step migration guide will be published once the migration bridges are active. Until then:

- Adding Aevum to your wallet does **not** move your balances — tokens stay on the chain where they were issued.
- Only use migration contract addresses published on [Official contract addresses](/Knowledge/reference/contracts) and the official [QDay Portal](https://portal.qday.io). Ignore DMs, airdrop sites and unofficial "migration" pages.

### 2.6 Do I need a new wallet?

No. The upgraded QDay works with established EVM wallets such as MetaMask, just like the old QDay — you only need to add the Aevum network ([Section 3](#3-im-using-aevum)). QDay will also offer its own **Trellis Wallet** with enhanced functions and a better user experience.

### 2.7 Is there a new token?

Yes. The upgraded QDay will have its own token, also named **$QDAY**. Existing QDAY tokens are now called **QDAY Points ($QDAYp)** and can be swapped 1:1 for the new $QDAY after the mainnet Token Generation Event (TGE).

### 2.8 What happens to my staking?

Existing QDay staking positions will be unstaked from the old QDay chain and returned as $QDAYp. You can then swap $QDAYp for $QDAY 1:1 on the upgraded QDay chain.

### 2.9 What happens to WQDAY or WABEL?

All wrapped assets on the old QDay will be unwrapped, with the original assets returned to their rightful owners.

### 2.10 Are old contracts still valid?

Yes, on the chain where they were deployed. The old QDay (Origin) keeps running, so contracts deployed there continue to work.

However, Aevum is a separate network with a new chain ID, RPC and explorer — contracts are **not** copied over automatically. To use a contract on Aevum, redeploy it there. Because Aevum is EVM-compatible, existing Solidity contracts can generally be redeployed without code changes. Do not reuse Origin contract addresses on Aevum.

### 2.11 Are old dApps still valid?

Old dApps continue to work on QDay Origin. On the new testnet, the core dApps — QDay Portal, Staking, QDay Swap, QDay Bridge and the ABEL/WABEL Bridge — are being redeployed and integrated on the new Aevum cluster. Third-party dApps need to add the Aevum network and redeploy their contracts; they do not automatically follow the upgrade.

---

## 3. I'm using Aevum

### 3.1 Which wallets support Aevum?

QDay Aevum is EVM-compatible and supports MetaMask, WalletConnect, Rainbow and other wallets that allow custom EVM networks. See the [MetaMask guide](/guide/handbook/user-guide/metamask) and [Abelian Mobile Wallet guide](/guide/handbook/user-guide/abelian-mobile-wallet).

### 3.2 How do I add Aevum to MetaMask?

**Option 1 — one click:** use the **Add QDay Aevum** button on [Add QDay to your wallet](/guide/start/add-network). MetaMask shows the exact parameters for you to approve.

**Option 2 — manually:** MetaMask → Networks → *Add a network manually*, then enter the values from the [Quick reference](#quick-reference--qday-aevum-testnet) table above.

### 3.3 What is the RPC?

`https://rpc-test.qday.info` (WebSocket: `wss://rpc-test.qday.info`).

### 3.4 What is the Chain ID?

`44005` (hex `0xABE5`).

:::warning[Don't mix up chain IDs]
`44001` is QDay Origin **mainnet**, `44003` is QDay Origin **testnet**, and `44005` is the current public **Aevum testnet**. Always verify against [Chain parameters](/Knowledge/reference/chains), not a chat message or a random dApp banner.
:::

### 3.5 Where is the Explorer?

[https://explorer-test.qday.info](https://explorer-test.qday.info). Paste a transaction hash, wallet address or contract address to see status, confirmations, gas fees, token transfers and verified source code.

### 3.6 Where is the faucet?

The faucet is built into the docs: [Get testnet tokens](/guide/start/faucet). Connect your wallet and claim testnet QDAY for gas. The faucet enforces an on-chain per-address cooldown; if you claimed recently, it shows when you can claim again.

### 3.7 How do I pay gas?

Gas on Aevum is paid in native (testnet) QDAY, claimed from the faucet. Aevum uses an Ethereum-compatible EIP-1559 gas model (base fee + priority fee).

### 3.8 Which tokens are available on Aevum?

In addition to native QDAY (gas), the following ERC-20 tokens are deployed on QDay Aevum (`44005`):

| Token | Contract address | Decimals |
|---|---|---|
| WABEL | `0x4668107253E28C2b569E76Edb14B1E88c3b93de1` | 18 |
| WQDAY | `0x915E807e7EC1665889172902781FB851202A54dF` | 18 |
| USD8 | `0x533b4B34ACd1021B156881a7c72dfe0665D97dB4` | 6 |

To see a token in MetaMask, switch to QDay Aevum, choose *Import tokens*, and paste the contract address. Always verify addresses on the [Explorer](https://explorer-test.qday.info) — do not reuse QDay Origin (`44003`) token addresses on Aevum.

---

## 4. I'm a developer

### 4.1 What language can I use to build on Aevum?

**Solidity** — Aevum is fully EVM- and Solidity-compatible, so any language that compiles to EVM bytecode (e.g. Vyper) works as well. Standard Ethereum tooling works without modification: Foundry, Hardhat, Remix, ethers.js, viem and wagmi. The only change is pointing your tools at the Aevum RPC.

### 4.2 How do I deploy a contract?

Point your toolchain at the Aevum RPC and deploy as you would on Ethereum. You need a wallet funded with testnet QDAY from the [faucet](/guide/start/faucet).

**Foundry**

```bash
forge create src/MyContract.sol:MyContract \
  --rpc-url https://rpc-test.qday.info \
  --private-key $PRIVATE_KEY
```

**Hardhat**

```javascript
// hardhat.config.js
module.exports = {
  networks: {
    aevum: {
      url: "https://rpc-test.qday.info",
      chainId: 44005,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
```

```bash
npx hardhat run scripts/deploy.js --network aevum
```

Full walkthrough: [Smart Contract Development](/Knowledge/technical/developer-guide/smart-contract-development).

### 4.3 How do I verify a contract?

The explorer uses the standard Blockscout verification flow:

```bash
forge verify-contract \
  --chain-id 44005 \
  --verifier blockscout \
  --verifier-url https://explorer-test.qday.info/api \
  <CONTRACT_ADDRESS> \
  src/MyContract.sol:MyContract
```

See [Contract Verification](/Knowledge/technical/developer-guide/contract-verification).

### 4.4 Can I deploy an existing Ethereum contract?

Yes. QDay Aevum is EVM-compatible, so existing Ethereum contracts can be deployed on it.

### 4.5 Is there an SDK?

The official QDay SDK will launch in Q1 2027. Please check back at launch time — all documentation, tools and examples will be published then, and you can start testing from there. In the meantime, because Aevum is EVM-compatible, you can use standard Ethereum libraries such as ethers.js, viem and wagmi.

---

## 5. Payments & AI agents

### 5.1 How do I test stablecoin payments?

The USD8 token is already deployed on Aevum (see [3.8](#38-which-tokens-are-available-on-aevum)). Stablecoin payment features will launch in Q1 2027. Please check back at launch time — all documentation, tools and examples will be published then, and you can start testing from there.

### 5.2 How do I test x402?

This will launch in Q1 2027. Please check back at launch time — all documentation, tools and examples will be published then, and you can start testing from there.

### 5.3 How do I build an agent wallet?

This will launch in Q1 2027. Please check back at launch time — all documentation, tools and examples will be published then, and you can start testing from there.

### 5.4 How do I register an agent?

This will launch in Q1 2027. Please check back at launch time — all documentation, tools and examples will be published then, and you can start testing from there.

### 5.5 Are you envisioning a protocol layer for autonomous micropayment channels, or a gas-abstraction model, for agent-to-agent transactions?

A protocol layer plus autonomous micropayment channels — i.e., a dedicated, independent payment protocol and channels designed specifically for small-value, high-frequency, automated transactions between AI agents (similar to the Lightning Network approach).

---

## 6. $QDAY token & staking

### 6.1 What is the total supply and allocation of $QDAY?

Total supply is **22,517,998,100 QDAY**, created at the Token Generation Event.

| Category | Share | Vesting |
|---|---|---|
| Staking Rewards | 35% (7,881,299,335) | Longer lock-up, higher reward |
| Investors & Backers | 20% | 12-month cliff, then 3-year linear |
| Protocol Treasury | 20% | 4-year equal vesting |
| Team & Contributors | 15% | 3-year equal vesting |
| Community & Ecosystem | 10% | Fully unlocked at launch |

Details: [Tokenomics](/guide/handbook/tokenomics).

### 6.2 How can I obtain QDAY or WQDAY for staking?

1. Stake ABEL to earn QDAY rewards ([ABEL Staking guide](/guide/handbook/user-guide/abel-staking)), or
2. Acquire USD8 via QDay Bridge / the Abelian mobile app and swap USD8 for QDAY on QDay Swap ([Swap guide](/guide/handbook/user-guide/swap)).

### 6.3 What is the minimum staking amount for WABEL?

1,000 WABEL.

### 6.4 How are QDAY staking rewards calculated and distributed?

35% of the total supply (7,881,299,335 QDAY) is allocated to Staking Rewards, as specified in [Tokenomics](/guide/handbook/tokenomics). Distribution works as follows:

- Each day, **1/1000 of the remaining reward pool** is distributed to stakers, so daily payouts decrease gradually over time.
- Your portion is based on your **Share = Amount staked × Remaining lock-up days**. Longer lock-ups (up to 1,460 days) earn a larger share.
- Rewards accumulate daily and can be claimed and withdrawn at any time; staked principal can only be unstaked after the lock-up expires.

Rewards are not fixed or guaranteed. See the [QDAY Staking guide](/guide/handbook/user-guide/qday-staking).

---

## 7. Security

### 7.1 Is QDay already fully post-quantum?

Not in the sense of every account, transaction and smart contract natively using post-quantum cryptography. QDay is implemented in phases:

| Phase | Scope | Status |
|---|---|---|
| Phase 1 | Quantum-resistant ledger/settlement via Abelian-assisted ZK rollups; accounts remain ECDSA | Completed and live since Q4 2025 |
| Phase 1.5 | Payment network: USD8, invoices, merchants, agent payments | In development — launching in Q1 2027 |
| Phase 2 | Native quantum-resistant (ML-DSA) accounts and smart contracts, coexisting with legacy accounts | In development — live on Aevum testnet before Q1 2027 |

See the [QDAY Roadmap](/guide/handbook/roadmap/qday-roadmap).

### 7.2 What is ML-DSA?

ML-DSA is a lattice-based digital-signature algorithm standardized by NIST (FIPS 204) as part of its post-quantum cryptography standards. It is designed to provide signatures that remain secure against both classical and quantum attacks under its underlying security assumptions. QDay uses ML-DSA-65 for Phase 2 native accounts.

### 7.3 What happens if a quantum computer becomes capable of attacking ECDSA?

An attacker could potentially derive private keys from exposed public keys and authorize transactions from affected accounts. Before that happens, QDay's architecture is designed to already provide a separate quantum-resistant layer protecting the ledger and settlement process, plus native quantum-resistant account security that addresses the account-key problem directly. If an attack on the ledger is detected, rollups can also be halted in a quantum-resistant way, since attackers cannot forge the operators' post-quantum signatures.

### 7.4 What does it not protect against?

Quantum-resistant infrastructure does not automatically protect users against compromised devices, stolen private keys, phishing, malicious smart contracts, application vulnerabilities, compromised bridges or other operational/security failures. Quantum resistance is a cryptographic security property, not a guarantee that every component of an application or user environment is secure.

### 7.5 Has QDay been audited?

Security audits of the QDay network and dApps are progressing step by step. Reports will be published on the [Audit Reports](/Knowledge/technical/security/audit-reports) page as they are completed.

### 7.6 How do I report a bug?

Please report it in the [official QDay Telegram group](https://web.telegram.org/k/#@qday_official_group). The team will respond and follow up promptly.

:::danger[Stay safe]
QDay will never DM you first, ask for your seed phrase, or run a "support" account that requests private keys. Only use the official links on the [Community](/guide/handbook/community) page.
:::

---

## 8. Glossary

| Term | Definition |
|---|---|
| **QDay** | Post-quantum, EVM-compatible Layer 2 network settling to Abelian. |
| **QDay Origin** | The previous-generation QDay network. Mainnet `44001`, testnet `44003`. Continues to run. |
| **QDay Aevum** | The testnet for the upgraded QDay architecture (chain ID `44005`). The upgraded mainnet is scheduled for Q1 2027. |
| **Abelian** | Quantum-resistant, privacy-focused Layer 1 that QDay settles to. |
| **$QDAY** | Native gas and governance token of the upgraded QDay. |
| **$QDAYp (QDAY Points)** | The new name for QDAY on the old QDay; swappable 1:1 for $QDAY after TGE. |
| **tQDAY** | Native testnet QDAY on Aevum, claimed from the faucet; no real value. |
| **USD8** | QDay's native post-quantum stablecoin, 1:1 USD-pegged and 100% reserve-backed. |
| **WQDAY** | Wrapped (ERC-20) QDAY, available on QDay Origin and QDay Aevum. |
| **WABEL** | Wrapped ABEL on QDay, bridged from Abelian. |
| **Phase 1 / 1.5 / 2** | Ledger-level quantum resistance → payment network → native quantum-resistant accounts and contracts. |
| **Quantum-resistant** | Cryptography designed to remain secure against quantum-computer attacks. |
| **Native post-quantum** | Accounts and contracts that themselves use post-quantum signatures (e.g. ML-DSA), not just the settlement layer. |
| **ML-DSA** | NIST-standardized (FIPS 204) lattice-based post-quantum signature algorithm. |
| **CDK** | Polygon Chain Development Kit, the ZK-rollup stack QDay builds on. |
| **x402** | HTTP 402-based standard for paying for APIs/resources inside an HTTP request. |
| **ERC-4337** | Account-abstraction standard: smart accounts, bundlers, paymasters, session keys. |
| **ERC-8004** | On-chain AI-agent identity and reputation standard. |
| **Trellis Wallet** | QDay's own wallet with enhanced functions for the upgraded network. |
