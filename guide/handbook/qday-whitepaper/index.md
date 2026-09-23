---
sidebar_position: 57
sidebar_label: Whitepaper
---
# QDay: The World's First Quantum-Resistant EVM-Compatible Layer 2

FEBRUARY 2026

Version 2.1

Abstract: QDay is the world's first quantum-resistant, EVM-compatible Layer 2 network, designed to enhance blockchain security with quantum-resistant algorithms while maintaining compatibility with the Ethereum Virtual Machine (EVM).

QDay represents a groundbreaking advancement in blockchain technology, offering the first quantum-resistant, EVM-compatible Layer 2 solution. Through its innovative multi-phase implementation strategy, QDay addresses the critical challenge of quantum computing threats while preserving the practical advantages of existing blockchain infrastructure.

Adopting a comprehensive ecosystem approach, QDay includes core DeFi applications, cross- chain bridges, and enhanced payment capabilities, creating a complete quantum-resistant solution for the blockchain environment. The platform's token economic model ensures long- term sustainability and incentivizes broad network participation.

QDay's roadmap provides a clear path for full implementation, integrating the platform's innovative technological features, positioning QDay as a pioneer in quantum-resistant blockchain technology.


## Version History

| Version | Date | Changes Made | Author |
| --- | --- | --- | --- |
| 1.0 | 29/07/2024 | Document Creation | Duncan W. Danny L. |
| 1.1 | 14/01/2025 | Revisions to functions and roadmap | Danny L. |
| 1.2 | 24/09/2025 | Minor revisions | Vike S. |
| 2.0 | 05/02/2026 | Revisions to functions and roadmap | Danny L. Pascal L. |
| 2.1 | 25/06/2026 | Minor revisions | Pascal L. |

## 1. Introduction

In the dynamic realm of blockchain technology, the persistent pursuit of enhanced security, scalability, and interoperability is paramount. The rise of quantum computing presents an existential threat to the cryptographic bedrock of current blockchain infrastructures. In response to this impending quantum revolution, we proudly present QDay, the first-of-its-kind post- quantum EVM-compatible Layer 2 network, built atop the pioneering quantum-resistant Abelian Blockchain (Layer 1). QDay is a testament to our commitment to fortify blockchain against quantum threats while elevating its performance and functionality.

## 1.1. The Synergy of Layer 2 and Quantum-Resistant Foundations

By leveraging the quantum-resistant algorithms already operational on Abelian, QDay fortifies the security measures to an unprecedented level. As a Layer 2 solution, it streamlines transaction processing, reducing costs, and accelerating confirmation times—all while inheriting the quantum-resistant properties of its Layer 1 counterpart.

## 1.2. Innovating with a POS-over-POW Model

Breaking new ground, QDay introduces an innovative consensus mechanism strategy by implementing a Proof of Stake (POS) model over the Abelian Blockchain's Proof of Work (POW) system. This novel POS-over-POW relationship is a first in the industry, offering the combined benefits of both systems: the robust security and decentralization of POW with the energy efficiency and scalability of POS. This strategic fusion ensures that QDay is not only quantum-resistant but also environmentally sustainable and poised for future growth.

## 1.3. QDay's Quantum-Resistant EVM-Compatible Layer 2: Core Advantages

- Quantum-Resistant Security: Building on the quantum-resistant algorithms – first from the Abelian Blockchain with development upgrades to become native post-quantum – QDay introduces an additional layer of security, shielding the network against the quantum threat while maintaining the integrity and safety of user assets and data.

- Enhanced Scalability: QDay's Layer 2 solution leverages the robust foundation of Abelian to significantly advance transaction throughput, aiming to achieve over 4,000 TPS, thus ensuring a scalable network ready to accommodate the ever-growing demands of blockchain applications.

- Cost-Effective Transactions: By processing transactions off-chain and utilizing the POS consensus mechanism, QDay significantly reduces transaction fees, making blockchain technology more accessible and affordable for a diverse range of applications and users.


- Accelerated Transaction Confirmations: QDay's network is engineered for speed, providing near-instantaneous transaction finality, which is crucial for applications that depend on quick and reliable transaction processing.

- A Developer's Playground: With EVM compatibility at its core, developers can effortlessly transition to QDay using their preferred Ethereum-based development tools and languages, promoting innovation and streamlining the development process.

- Interoperability as a Priority: QDay is meticulously crafted to ensure seamless interaction with other blockchain networks, promoting cross-chain transactions and contributing to a more cohesive and versatile blockchain ecosystem.

## 1.4. The Road Ahead: Pioneering the Future of Quantum-Resistant Blockchain

The development of quantum-resistant security in QDay will be conducted in two major phases:

## Phase 1: L1-Assisted Quantum-Resistant Rollups with EVM Compatibility

In this phase, QDay will introduce quantum-resistant ledger by leveraging ZK Rollups to Abelian Blockchain while maintaining the EVM compatibility by inheriting the account model and smart contract capabilities of the Ethereum Virtual Machine (EVM). This will allow for a smooth transition for Ethereum developers and enable the use of existing Ethereum tools and languages. With such L1-assisted quantum-resistant rollups, QDay will be resistant to quantum attacks that target at modifying the ledger data such as transaction orders, amounts, and the structure of the state. In addition, when any attacks are detected, QDay will be able to prevent funds loss by temporarily halting the execution of rollups in a quantum-resistant manner, i.e., attackers cannot move forward once the rollups have been halted because they are not able to forge the quantum-resistant signatures generated by the rollup operators.

## Phase 2: L2-Native Quantum-Resistant Accounts and Smart Contracts

In this phase, QDay will implement quantum-resistant accounts by adding new quantum- resistant keys to existing accounts and enabling operations requiring signatures from quantum- resistant keys. To this end, the EVM implementation of QDay will be updated to support the auxiliary post-quantum cryptographic keys and algorithms. On top of this quantum-resistant account model, QDay will support two types of smart contracts: traditional contract and quantum-resistant contract. Wallets that support EVM smart contracts can still interact with the traditional contracts while the quantum-resistant contracts will only be available to wallets that support quantum-resistant keys and algorithms built in QDay.


The above two quantum-resistant mechanisms are orthogonal. The former is a layer of defense against quantum attacks to the ledger data, while the latter is a layer of defense against quantum attacks to specific accounts. The combination of these two mechanisms will provide a comprehensive quantum-resistant security to QDay. For example, even if an attacker manages to get the private keys of some accounts (by hacking the victim's computer or other means), it is still possible to prevent funds loss by halting the execution of the rollups, taking remedial measures such as freezing the affected accounts, and finally continuing the execution of the rollups. Note that all these actions will be conducted based on the consensus of the rollup operators, which is both decentralized and quantum-resistant by design.

## 2. Technical Overview

## 2.1. Quantum-Resistant Cryptography in Abelian (Layer 1)

We can think of Abelian as the Phase 0 of QDay implementation. It has already been running successfully for years which lays a solid foundation for QDay. The Abelian blockchain employs quantum-resistant keys and algorithms to ensure the system's security against the advent of quantum computers. Specifically, Abelian uses lattice-based cryptographic techniques, such as the Learning With Errors (LWE) problem and Ring-LWE, which are believed to be secure against quantum attacks.

These algorithms provide a robust foundation for the blockchain, ensuring that transactions and user data remain secure even in the face of future quantum computing advancements.

- Security: Lattice-based cryptography offers enhanced security by being resistant to both classical and quantum attacks. This ensures that the Abelian blockchain can withstand potential threats from future quantum computers, maintaining the integrity and confidentiality of user data and transactions.

- Efficiency: These algorithms are optimized for performance, allowing for secure and efficient transaction processing. By leveraging lattice-based cryptographic techniques, Abelian ensures that the network can handle a high volume of transactions without compromising speed or security.

- Scalability: The scalability of lattice-based techniques ensures that the network can grow without compromising security or efficiency. This makes Abelian well-suited for supporting a large and expanding user base, facilitating widespread adoption and usage.

- Future-Proofing: Abelian is committed to continuous research and development in quantum-resistant technologies. The network will regularly update its cryptographic algorithms to enhance security and performance, ensuring that it remains at the forefront of quantum-resistant blockchain technology.

## 2.2. Quantum-Resistant Cryptography in QDay-to-Abelian Rollups (L2 to L1)

This is the Phase 1 of QDay implementation.

## Innovative POS-over-POW Consensus Integration

POS-over-POW is an innovative consensus mechanism that combines the strengths of both Proof of Stake and Proof of Work to create a more secure and efficient blockchain network. This hybrid approach leverages the established security of POW while introducing the energy efficiency and scalability of POS.

In a POS-over-POW system, the underlying blockchain operates on a POW consensus mechanism, which is known for its robustness and security. POW involves miners competing to solve complex mathematical puzzles, thereby validating transactions and securing the network. This process is computationally intensive and energy-consuming but provides a high degree of security due to the significant amount of computational power required to attack the network.

On top of this POW foundation, a POS layer is implemented. In POS, validators are chosen to create new blocks and validate transactions based on the number of coins they hold and are willing to "stake" as collateral. This process is much less energy-intensive compared to POW because it does not involve solving complex puzzles. Instead, it relies on economic incentives to ensure that validators act honestly.

The POS-over-POW consensus mechanism offers several advantages over a pure POS-over-POS system:

1\) Enhanced Security:

- o POW Foundation: Provides strong security through computational difficulty, making attacks costly and challenging.

- o Synergistic Security: Combines the strengths of POS and POS, enhancing overall network security.

2\) Energy Efficiency:

- o Reduced Energy Consumption: POS layer significantly lowers energy use compared to POW alone.

- o Optimized Resource Usage: Balances security and energy efficiency by leveraging POW for security and POS for validation.

3\) Scalability:


- o Improved Throughput: POS layer processes transactions more efficiently, enhancing scalability.

- o Layered Architecture: Allows modular upgrades, enabling continuous scalability improvements.

4\) Economic Incentives:

- o Balanced Incentive Structure: Rewards both miners and validators, promoting active participation through POS incentives.

- o Stakeholder Engagement: Involves a broad range of participants, enhancing decentralization and resilience.

5\) Resistance to Centralization:

- o Distributed Security: POW layer ensures decentralization by distributing security across many miners.

- o Mitigation of Centralization Risks: Reduces the risk of centralization seen in pure POS systems by requiring both computational resources and staked coins.

QDay's implementation of POS-over-POW leverages the robust security of the Abelian blockchain's POW foundation while introducing a POS layer to enhance scalability and efficiency.

## Quantum-Resistant Rollups

The objective of quantum-resistant rollups is to ensure that no one can modify or forge the ledger data in QDay even with access to a quantum computer. This implies that the QDay Blockchain can halt the execution of the rollups in a quantum-resistant manner, i.e., attackers cannot move forward once the rollups have been halted because they are not able to forge the quantum-resistant signatures generated by the rollup operators. During the halt, the affected accounts can be frozen and the attackers can be reported to the authorities. The execution of the rollups can be resumed once the remedial measures have been applied. Note that existing Layer 2 solutions are incapable of implementing such quantum-resistant halt mechanism because they cannot prevent the quantum attackers from cracking the private keys of the rollup operators.

The implementation of quantum-resistant rollups in QDay is straightforward. Each rollups operator will be using an Abelian Blockchain account to run the rollups. The rollups data are signed by the quantum-resistant keys and algorithms built in Layer 1. Other than taking advantage of the existing quantum-resistant Layer 1, the rest of the rollup implementation could be exactly the same as any other Layer 2 solutions. In QDay, specifically, the ZK Rollups are built to adapt to the features of the Abelian Blockchain. We will describe the technical details in the next section.

## 2.3. Quantum-Resistant Accounts and Smart Contracts in QDay (Layer 2)

This is the Phase 2 of QDay implementation.

The ultimate goal of QDay is to provide quantum-resistant security at the same level or even higher than the Layer 1, while maintaining the EVM compatibility with high transaction throughput and low transaction latency. To this end, QDay will implement quantum-resistant accounts and smart contracts independently from both the Layer 1 and the rollups. In this way, QDay will eventually be quantum-resistant on its own while still gaining the benefits of the quantum-resistant rollups.

However, the implementation of Phase 2 will be challenging. It requires a complete redesign of the EVM implementation in QDay validator nodes to support the quantum-resistant keys and algorithms while maintaining the back-compatibility with the existing (non-quantum-resistant) keys and smart contracts. To address this challenge, QDay will introduce two modes of transactions: legacy transaction and quantum-resistant transaction.

## Legacy Transaction

Legacy transactions is just another name, to distinguish from the quantum-resistant transactions, of the transactions that are supported by the current EVM implementation in QDay validator nodes. Legacy transactions are supported by having accounts using the legacy keys to interact either with the legacy smart contracts, or with the quantum-resistant smart contracts with the fallback mechanism to support legacy keys.

Note that in the latter case, the account can be unaware of whether the smart contract supports the quantum-resistant keys and algorithms. The fallback mechanism is transparent to the users which implies that third-party wallets without quantum-resistant key support can also be used to interact with such quantum-resistant smart contracts.

However, it is a bit less meaningful to allow quantum-resistant keys to interact with legacy (non-quantum-resistant) smart contracts. This so-called backwardness does not seem to be recommended due to the security consideration.

## Quantum-Resistant Transaction

Quantum-resistant transactions are processed by the EVM implementation in QDay validator nodes that are upgraded to support the quantum-resistant keys and algorithms. Such transactions are only supported when accounts use quantum-resistant keys to interact with the quantum- resistant smart contracts. In other words, quantum-resistant transactions have nothing to do with the legacy keys. Only the wallets that support the quantum-resistant keys and algorithms can be used to send such transactions. To complete Phase 2, a reference implementation of quantum- resistant wallets will be provided as a core component of QDay, of which the design and the implementation details will be published in a separate whitepaper.

## 3. Tokenomics

The total supply of \$QDAY tokens is 22,517,998,100. All \$QDAY tokens will be created at the TGE. The distribution of \$QDAY is designed to ensure network security, incentivize participation, and foster community growth, and will be conducted according to the table below. The lock-up and vesting rules will be implemented by either smart contracts deployed on QDay or the supervision of the DAO.

| Category | Allocation (%) | Allocation (Token) | Strategic Purpose | Lock-up & Vesting |
| --- | --- | --- | --- | --- |
| Staking Rewards | 35.00% | 7,881,299,335 | To reward protocol staking | Longer the lock-up, higher the rewards. |
| Investors & Backers | 20.00% | 4,503,599,620 | Private rounds to fund initial and ongoing development | 12-month cliff, then 3-year daily linear vesting |
| Team & Contributors | 15.00% | 3,377,699,715 | For the founding team and future hires | 3-Yr equal vesting (5% per year) |
| Protocol Treasury | 20.00% | 4,503,599,620 | Long-term reserves for future development and strategic partnerships. | 4-Yr equal vesting (5% per year) |
| Community / Ecosystem Growth / Initial Liquidity | 10.00% | 2,251,799,810 | Airdrops, Developer Grants, and Liquidity Provision. | None, 100% unlocked at TGE. |
| TOTAL | 100.00% | 22,517,998,100 |   |   |


## 4. Phase 1: L1-Assisted Quantum-Resistant Rollups with EVM Compatibility

In Phase 1, QDay will introduce quantum-resistant ledger by leveraging ZK Rollups to Abelian Blockchain while maintaining the EVM compatibility by inheriting the account model and smart contract capabilities of the Ethereum Virtual Machine. This will allow for a smooth transition for Ethereum developers and enable the use of existing Ethereum tools and languages. With such L1-assisted quantum-resistant rollups, QDay will be resistant to quantum attacks that target at modifying the ledger data such as transaction orders, amounts, and the structure of the state. In addition, when any attacks are detected, QDay will be able to prevent funds loss by temporarily halting the execution of rollups in a quantum-resistant manner, i.e., attackers cannot move forward once the rollups has been halted because they are not able to forge the quantum-resistant signatures generated by the rollup operators. This section will focus on the technical details of the quantum-resistant rollups in QDay.

## 4.1. Introduction to ZK Rollups

ZK Rollups, or Zero-Knowledge Rollups, represent a cutting-edge Layer 2 scaling solution designed to address the inherent limitations of blockchain technology, particularly in terms of scalability and transaction throughput. By aggregating multiple transactions into a single batch and submitting this batch to the main Layer 1 blockchain, ZK Rollups significantly reduce the computational load and storage requirements on the main chain.

The core innovation of ZK Rollups lies in their use of zero-knowledge proofs. These cryptographic proofs allow one party to prove to another that a statement is true without revealing any specific information about the statement itself. In the context of ZK Rollups, this means that transactions can be verified for correctness without exposing the underlying transaction data. This not only enhances privacy but also ensures that the verification process is both secure and efficient.

Furthermore, ZK Rollups offer a compelling solution to the scalability trilemma, which posits that it is challenging to achieve decentralization, security, and scalability simultaneously. By offloading transaction processing to Layer 2 while maintaining the security assurances of Layer 1, ZK Rollups strike a balance that enhances overall network performance without compromising on security or decentralization.

## 4.2. QDay's Adoption of Polygon ZK Rollups Technology

QDay's integration of Polygon ZK Rollups technology represents a strategic move to leverage one of the most advanced and reliable Layer 2 solutions available. Polygon ZK Rollups are built on robust cryptographic foundations and are designed to handle a high volume of transactions efficiently. This makes them an ideal choice for QDay's objectives of enhancing scalability and privacy.

Polygon's ZK Rollups employ zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge), a type of zero-knowledge proof that is both succinct and non- interactive. This means that the proofs are small in size and can be verified quickly without the need for back-and-forth communication between the prover and verifier. This characteristic is particularly advantageous for blockchain applications, where efficiency and speed are paramount.

In practice, QDay will use Polygon ZK Rollups to process transactions off-chain, thereby reducing the load on the Abelian main chain. Transactions are bundled together into a single proof, which is then submitted to the Abelian chain for finalization. This approach not only enhances transaction throughput but also reduces gas fees, making the network more cost- effective for users.

Moreover, Polygon's ZK Rollups are designed to be highly interoperable, allowing for seamless integration with various blockchain ecosystems. This flexibility is crucial for QDay as it aims to create a scalable and adaptable Layer 2 solution that can evolve with the needs of the blockchain ecosystem.

One of the unique aspects of QDay's implementation is using Abelian, a blockchain similar to Bitcoin, as the Layer 1 foundation for its ZK Rollups. This is a departure from the more common approach of using an EVM-compatible chain as the Layer 1 base. Consequently, this requires significant modifications to the standard Polygon ZK Rollups framework to ensure compatibility with Abelian's architecture.

Abelian, being similar to Bitcoin, employs a different consensus mechanism and transaction model compared to EVM-compatible chains. Specifically, Abelian uses a UTXO (Unspent Transaction Output) model, whereas EVM-compatible chains typically use an account-based model. This fundamental difference necessitates a reworking of the ZK Rollups' data structures and proof generation mechanisms to align with the UTXO model.


Additionally, Abelian's consensus algorithm, which is designed to be quantum-resistant, must be integrated into the rollup's verification process in Phase 1. This involves adapting the proof submission and verification protocols to ensure that they are compatible with Abelian's consensus rules. While the specifics of these modifications are complex and technical, the overarching goal is to create a seamless interaction between the rollup and the Abelian main chain, preserving the security and efficiency benefits of both layers.

## 4.3. Benefits of Quantum-Resistant Rollups

The main benefit of quantum-resistant rollups is that it promises that the data in the ledger are quantum-proof once the corresponding rollups have been confirmed by Abelian. It prevents the 51% attacks, even with the access to a quantum computer, on the ledger data. In particular, such prevention also applies to the pending data, i.e., the data that have been submitted to QDay but not yet confirmed by Abelian. This new feature enables QDay to halt the execution of the rollups in a quantum-resistant manner, i.e., attackers cannot move forward once the rollups has been halted because they are not able to forge the quantum-resistant signatures generated by the rollup operators. Note that such a halt mechanism runs on the rollup operators only, which does not affect the operation of the QDay Blockchain on its own.

As this is a new feature that is not supported by any existing Layer 2 solutions, we will illustrate how it works with a concrete example. The following events are assumed to happen in the timeline:

1\) An attacker with access to a quantum computer exploits a vulnerability in a DeFi dApp on QDay and rug pulls all the funds from the pool.

2\) The stolen funds are moved to a QDay account that is controlled by the attacker.

3\) A user notices the rug pull and reports the incident to the dApp provider.

4\) The dApp provider freezes the account and reports the incident to QDay DAO.

5\) QDay DAO creates a vote proposal for halting the rollups execution for 12 hours.

6\) All DAO members are called to vote for this proposal within 30 minutes.

7\) The vote passes and the rollup’s execution is halted immediately. From this point onwards, the attacker is unable to move the funds out of QDay because QDay Bridge does not process any transaction that is not rollups-confirmed.

8\) The dApp provider will be notified that they have around 12 hours to do the necessary actions to protect the users' funds. If necessary, they can apply for more time by requesting the QDay DAO to extend the suspension period.

9\) The dApp provider contacts the token issuer to freeze all the addresses that are controlled by the attacker. Note that the freeze operation is essentially a smart contract call on QDay, which is not affected by the rollups halt.

10\) The token issuer requests solid evidence of the rug pull from the dApp provider. In this example, the dApp provider submits the evidence and passes the check conducted by the token issuer.

11\) The token issuer freezes the attacker's addresses.

12\) The rollups execution is resumed either: (1) after 12 hours, or (2) the dApp provider notifies the QDay DAO that all required actions have been taken and the rollups execution can be resumed. In the latter case, the QDay DAO will also vote for the proposal to resume the rollups execution.

13\) The QDay Blockchain resumes normal operation. The dApp provider contacts the police or any other relevant authorities to report the rug pull. Further legal actions will be taken against the attacker.

14\) If any further actions are needed, the QDay DAO will vote for the proposals accordingly. Usually, such actions should be proposed by the police or other relevant authorities.

It is worth noting that the above example assumes that the attacker has access to a quantum computer. Even so, the attacker is unable to move the funds out of QDay because the rollups process requires the quantum-resistant signatures generated by the rollup operators. This example illustrates that the quantum-resistant halt mechanism can enhance the overall security of any dApps deployed on QDay.

4.4. Future Work: PQZK Bridge

What is PQZK Bridge?


The PQZK Bridge, or Post-Quantum Zero-Knowledge Bridge, is a cryptographic protocol designed to facilitate the secure and efficient transition of blockchain systems to post-quantum security standards. It combines the principles of zero-knowledge proofs with post-quantum cryptographic algorithms to create a robust framework that can withstand the capabilities of quantum computers.

Zero-knowledge proofs (ZKPs) allow one party to prove to another that a statement is true without revealing any specific information about the statement itself. In the context of blockchain, ZKPs enable the verification of transaction correctness while preserving privacy. Post-quantum cryptography (PQC), on the other hand, involves cryptographic algorithms that are resistant to attacks from quantum computers.

The PQZK Bridge integrates these two technologies by using post-quantum cryptographic primitives to construct zero-knowledge proofs. This ensures that the proofs remain secure even in the presence of quantum adversaries. The PQZK Bridge acts as a middleware layer that facilitates the deployment of PQZK Rollups on existing blockchain platforms, providing a seamless upgrade path to quantum security.

## Implementing QDay's Rollups with PQZK Bridge

To implement PQZK Rollups, QDay will leverage the PQZK Bridge to transition from traditional ZK Rollups to a fully quantum-resistant solution.

The first step involves integrating post-quantum cryptographic primitives into the rollup framework. These primitives, such as lattice-based cryptography or hash-based signatures, replace the traditional cryptographic algorithms used in zero-knowledge proofs.

Using these post-quantum primitives, QDay will construct PQZK proofs. These proofs will maintain the zero-knowledge property, ensuring that transaction verification can be done without revealing any sensitive information, while also being resistant to quantum attacks.

The rollup protocols will then be modified to incorporate PQZK proofs. This includes adapting the proof generation, submission, and verification processes to handle the new post-quantum cryptographic constructs.

These modified rollup protocols, now incorporating PQZK proofs, will be deployed on the Abelian Layer 1 blockchain. Abelian's quantum-resistant properties will complement the PQZK Rollups, providing a robust, end-to-end quantum-resistant solution.

Finally, extensive testing will be conducted to ensure that the PQZK Rollups function correctly and efficiently. Optimization efforts will focus on minimizing the computational overhead associated with post-quantum cryptographic operations, ensuring that the rollup solution remains scalable and performant.

## Extending PQZK Rollups to Other EVM-Compatible Chains

The benefits of PQZK Rollups are not limited to QDay and Abelian. The PQZK Bridge technology can be extended to other EVM-compatible chains, enabling them to achieve quantum security as well.

The PQZK Bridge can be adapted to work with the specific architectures and consensus mechanisms of EVM-compatible chains. This involves modifying the bridge protocols to ensure compatibility with the Ethereum Virtual Machine and other related technologies.

Once adapted, the PQZK Bridge can be used to deploy PQZK Rollups on various EVM- compatible chains. This enables these chains to process transactions off-chain in a quantum- resistant manner, enhancing their scalability and security.

By leveraging the interoperability features of the PQZK Bridge, different blockchain ecosystems can integrate PQZK Rollups seamlessly. This fosters a more secure and interconnected blockchain landscape, where multiple chains can benefit from quantum-resistant transaction processing.

To facilitate the adoption of PQZK Rollups, extensive documentation, developer tools, and community support will be provided. This ensures that blockchain developers can easily implement and deploy PQZK Rollups on their respective platforms, accelerating the transition to quantum-safe blockchain technology.

In conclusion, by adopting PQZK Rollups through the PQZK Bridge, QDay not only enhances its own security but also contributes to the broader blockchain ecosystem's resilience against quantum threats. This proactive approach ensures that as quantum computing technology evolves, blockchain systems remain secure, scalable, and efficient.

## 5. Phase 2: Quantum-Resistant Account with EVM Compatibility

In Phase 2, QDay will introduce quantum-resistant account and legacy account and the following corresponding concepts:


- o quantum-resistant wallets and legacy wallets;

- o quantum-resistant contracts and legacy contracts;

- o quantum-resistant dApps and legacy dApps.

Each mnemonic phrase of the legacy account can be used to derive the corresponding quantum- resistant account. This is to ensure a smooth transition from the legacy account to the quantum- resistant account. All QDay users can use the same mnemonic phrase to access both the quantum-resistant account and the legacy account. Specifically, all EVM-compatible wallets will continue to use the legacy account without any changes and be unaware of the existence of the quantum-resistant account while the quantum-resistant wallets will support both the quantum- resistant account and the legacy account for the same mnemonic phrase. A reference implementation of the quantum-resistant wallet will be provided by QDay and the corresponding source code will be open-sourced.

Other than the mnemonic phrase, the quantum-resistant account is completely independent from the legacy account. This is deliberately designed to ensure the post-quantum security of the new account.

Specifically, the following objectives will be achieved in Phase 2:

- o Legacy accounts can be used in the same way as before, i.e., supported by the legacy wallets and legacy smart contracts.

- o Quantum-resistant accounts can be used with the quantum-resistant wallets. It is expected that no legacy wallets will support the quantum-resistant accounts.

- o The reference implementation of the quantum-resistant wallet by the QDay team will support the legacy accounts. For the quantum-resistant wallets implemented by other parties, it is optional to support the legacy accounts.

- o The quantum-resistant contracts will NOT support the legacy accounts. This is key to ensure that the post-quantum security will not be compromised by mixing the usage of non-quantum-resistant cryptographic primitives.

- o The quantum-resistant contracts will be compatible with the legacy contracts in two ways: 1) the quantum-resistant contracts can contain the legacy functions that are not quantum-resistant; 2) the quantum-resistant functions can be called by the legacy wallets with the help of an external quantum-resistant signature generator.

- o Some quantum-resistant dApps may support the legacy accounts by implementing both the quantum-resistant and legacy protocols.

- o Quantum-resistant accounts can interact with the quantum-resistant smart contracts and dApps using the quantum-resistant wallets. They may also be able to interact with the legacy smart contracts and dApps in case that the quantum-resistant wallets support the fallback mechanism for such scenarios.

- o The table below shows whether a quantum-resistant object can interact with or support a legacy object. Note that it is certain that a legacy object is not able to interact with a quantum-resistant object and therefore we don't show the corresponding table in the reverse direction.

| Object | Legacy Account | Legacy Wallet | Legacy Contract | Legacy dApp |
| --- | --- | --- | --- | --- |
| Quantum-Resistant Account | may fallback to | cannot be used by | may interact with | may interact with |
| Quantum-Resistant Wallet | may support | same mnemonics | may support | may support |
| Quantum-Resistant Contract | not compatible | not compatible | not compatible | not compatible |
| Quantum-Resistant dApp | may support | may be used by | may support | may support |

To summarize, the objective of Phase 2 is to add the support for the quantum-resistant objects without compromising any post-quantum security features while maintaining the maximum backward compatibility with the legacy objects. In the rest of this section, we will describe the overall design of the core components in QDay Phase 2 followed by elaborating the principles and trade-offs of the design.

## 5.1. Quantum-Resistant Account

The quantum-resistant account in QDay will use the same post-quantum cryptographic primitives as in Abelian Blockchain. It starts with the same mnemonic phrase as the legacy account but fully diverges from that point onwards.

The process of deriving the quantum-resistant account from a BIP-39 mnemonic phrase is defined in AIP-11 (Abelian Improvement Proposal 11). For the convenience of the readers, we will briefly describe the process here.

## Step 1: From Mnemonic to Entropy-Seed

AIP-11 uses the same entropy-seed derivation process as in BIP-39. However, AIP-11 requires the entropy-seed to be 256 bits long which corresponds to 24 mnemonic words. To address this, for mnemonic phrases with less than 24 words, we will pad the mnemonic phrase with the word "abandon" (the first word in the BIP-39 wordlist) until it has 24 words while for mnemonic phrases with more than 24 words, we will truncate the mnemonic phrase to 24 words.


## Step 2: From Entropy-Seed to Master-Seed

The entropy-seed is then used to derive the 512-bit master-seed using a deterministic key derivation function. The key derivation function is defined as follows:

MasterSeed=PRF(EntropySeed,’AccountMasterSeed’)

where PRF is a post-quantum key derivation function using KMAC256 as the

underlying hash function, defined as follows:

PRF(key,input):=KMAC256(key,input,512,’ABELIANPRF’).

## Step 3: From Master-Seed to Account-Root-Seeds

In Abelian, each account consists of a set of root seeds, namely CoinSpKeyRootSeed, CoinSnKeyRootSeed, CoinDetectorRootKey and CoinVK RootSeed, collectively referred to as Account-Root-Seeds. All root seeds are 512 bits long, derived from the master-seed by using the following key derivation functions:

CoinSpKeyRootSeed=PRF(MasterSeed,’CoinSpendKeyRootSeed’),

CoinSnKeyRootSeed=PRF(MasterSeed,’CoinSerialNumberKeyRootSeed’),

CoinDetectorRootKey=PRF(MasterSeed,’CoinDetectorRootKey’),

CoinVKRootSeed=PRF(Master-Seed,’CoinValueKeyRootSeed’).

Note that the PRF function is the same as the one used in the previous step.

## Step 4: From Master-Seed to Public-Rands

In AIP-11, each set of root seeds can be used to derive multiple addresses corresponding to different values of public rand. In QDay, to conform to the convention of existing Hierarchical Deterministic Wallets (HDW), we will use the following deterministic function defined by AIP- 11 to derive a public rand from the master-seed and a sequence number. Specifically, the public rand is derived as follows:

PublicRand(𝑠𝑒𝑞𝑁𝑜)=PRF(PublicRandRootSeed, 𝑠𝑒𝑞𝑁𝑜),

where

PublicRandRootSeed=PRF(MasterSeed,’PublicRandRootSeed’).


## Step 5: From Account-Root-Seeds and Public-Rand to Address and Private-Key

Once both the account-root-seeds and the public-rand are derived, the corresponding address and private-key can be derived deterministically. As this process is beyond the scope of AIP-11, we will use the same process implemented in the Abelian SDK v2 to gain more consistency with the ecosystem of the Layer 1 chain.

## 5.2. Upgrade of QDay Nodes

To make sense of the quantum-resistant account, the blockchain must support the transfer of the native token \$QDAY between the legacy account and the quantum-resistant account in the first place. Specifically, QDay nodes must be upgraded to be able to: 1) recognize the new type of address in the quantum-resistant account; 2) verify the signatures generated by the quantum- resistant account; 3) enable the transfer of the native token \$QDAY between the legacy account and the quantum-resistant account. However, it is not straightforward to support the third requirement. This is because we need to maintain the backward compatibility for the legacy wallets to make such transfers without knowing the new type of address.

A key challenge here is that whether it is possible to support the transfer of the native token \$QDAY between the legacy account and the quantum-resistant account without changing the legacy wallets. To address this challenge, we will develop a smart contract on the QDay blockchain to act as a bridge between the legacy account and the quantum-resistant account. The smart contract itself is a legacy one and can be used by the legacy wallets.

1\) The legacy account invokes the Send function of the smart contract with the quantum- resistant account as the recipient and the amount of the native token \$QDAY as the input.

2\) The smart contract verifies the signature of the legacy account and the recipient address.

3\) The smart contract receives \$QDAY from the legacy account and sends it to the quantum-resistant account.

In the last step, the smart contract transfers \$QDAY from its own legacy address to the recipient's quantum-resistant address. This is carried out by calling a new primitive function legacy_to_quantum_resistant_transfer implemented by QDay Node. The EVM implementation of QDay Node will be upgraded to support this primitive function along with another primitive function quantum_resistant_to_legacy_transfer which handles the reverse process.

Though the interface of the above two primitive functions looks simple, the implementation is non-trivial. It requires a comprehensive set of cryptographic operations involving both the legacy algorithms and the post-quantum ones. The technical details are beyond the scope of this whitepaper and will be elaborated when we open-source the QDay Node's implementation.

## 5.3. Quantum-Resistant Wallet

It is obvious that all existing EVM-based wallets will not support the quantum-resistant account defined by QDay for that they are not supposed to support any post-quantum security features. Therefore, it is necessary to implement a new type of wallet to support QDay's quantum-resistant account. We will provide a reference implementation of such a wallet in QDay Phase 2. The code will be open-sourced to the public to help the community or any other parties to build compatible quantum-resistant wallets.

To create or import a quantum-resistant account, the user will use the same mnemonic phrase as the legacy account. The wallet will derive the quantum-resistant account from the mnemonic phrase and use it to transfer the native token \$QDAY and interact with the quantum-resistant smart contracts and dApps.

To transfer \$QDAY from a quantum-resistant account to a legacy account, the quantum-resistant wallet will directly submit a transaction to the blockchain nodes. This is different from transferring \$QDAY from a legacy account to a quantum-resistant account in legacy wallets. As described in the previous section, QDay nodes will be able to directly process such transactions after the Phase 2 upgrade. Therefore, it's unnecessary to use the smart contract bridge in this case.

The main purpose of the quantum-resistant wallet is to interact with the quantum-resistant smart contracts and dApps. To understand how the quantum-resistant wallet interacts with the quantum-resistant smart contracts, we need to first understand how the quantum-resistant smart contracts are designed and implemented. Therefore, we leave this part to the next section where we describe the quantum-resistant smart contracts in detail.

In addition, a quantum-resistant wallet can also be used to interact with the legacy smart contracts and dApps, in case it is properly implemented. In the reference implementation, we will provide a fallback mechanism to support such scenarios. Specifically, to interact with a legacy smart contract, the wallet will use the corresponding legacy address to call the smart


contract. The migration of assets will be handled automatically by the wallet. For example, to interact with a smart contract that swaps \$QDAY for the chain’s to-be-developed native stablecoin, the wallet will transfer the \$QDAY to the legacy address before calling the smart contract and then transfer the stablecoin to the quantum-resistant address after the smart contract call.

## 5.4. Quantum-Resistant Contracts

In QDay Phase 2, a quantum-resistant contract can be viewed as a legacy contract with an extra layer of post-quantum signature verification. From the perspective of the caller, the quantum- resistant contract is essentially the same as the legacy one. The only difference is that the caller needs to provide an extra quantum-resistant signature for every single call to contract methods that are supposed to be quantum-resistant. The quantum-resistant signature is passed by a normal parameter of a contract method and is verified by the contract itself.

Consider the transfer method in a quantum-resistant ERC20 contract. The legacy ERC20 method signature is as follows:

function transfer(address to, uint256 value) external returns (bool);

The quantum-resistant version of the method is as follows:

function pq_transfer(bytes pq_sig_data, address to, uint256 value) external returns

(bool);

where pq_sig_data is the quantum-resistant signature.

As a convention defined by QDay, the function name must be prefixed with pq_ and the signature is enforced to be the first parameter. This convention makes it easy to distinguish the quantum-resistant methods from the legacy ones. More importantly, with this convention, the QDay nodes can verify the quantum-resistant signatures automatically without extra codes in the contract. Specifically, as long as the signature data is generated in the standard way defined by QDay and passed as the first parameter to a function of which the name is prefixed with pq_, the QDay nodes will verify the signature using the built-in quantum-resistant signature verification mechanism.

Theoretically, the same mechanism can be implemented in a legacy contract on any EVM- compatible chain if the following issues can be addressed:


- 1\) The quantum-resistant signature can be generated by either a quantum-resistant wallet or an external tool conforming to the standard defined by QDay.

- 2\) The quantum-resistant signature can be verified within the contract function using the regular EVM instructions.

The first issue is straightforward to address though it may have unsatisfactory user experience when using legacy wallets companioned with an external tool. The second issue may be quite challenging to address as implementing the quantum-resistant cryptographic operations inside the contract function using the regular EVM instructions is non-trivial. Worse still, as the operations are resource-intensive, it may lead to unaffordable gas fees for the users.

Note that the second issue does not exist in QDay as the quantum-resistant signature verification is implemented as a built-in feature of QDay such that the computation is carried out natively on the operating system of the QDay nodes (i.e., not through the EVM) and therefore the computational cost will not be charged to the users in the form of gas fees.

## 5.5. Quantum-Resistant dApps

We can see from the above that smart contracts must be upgraded to support quantum- resistant signatures. For the sake of smooth transition, dApps deployed in Phase 1 can take keep the user interface of the dApp unchanged. Legacy wallets can interact with the dApp as before by first adding new quantum-resistant methods to the smart contracts used by the dApp, with all the existing legacy methods must be kept unchanged, and then upgrade the user interface of the dApp to add the support for the quantum-resistant wallets.

However, in some situations, it may be necessary to implement a separate quantum-resistant version of the dApp without the compatibility with the legacy wallets. This is to ensure that the quantum-resistant contracts will not be affected by the legacy ones. It is worth noting that QDay has no restriction on whether, when and how the dApps are upgraded to the quantum-resistant ones and the choice is left to the dApp developers.

## 5.6. The Design Principles

The design of QDay Phase 2 follows these core principles:

- 1\) Backward Compatibility

- o Legacy accounts and wallets continue to function without modification.

- o Legacy smart contracts remain fully operational.

- o Existing dApps can gradually transition to quantum-resistant versions.


- 2\) Security Isolation

- o Quantum-resistant accounts are completely independent from legacy accounts (sharing only the mnemonic phrase).

- o Quantum-resistant smart contracts cannot be compromised by legacy cryptographic primitives.

- o Clear separation between quantum-resistant and legacy transaction types.

- 3\) Seamless User Experience

- o Same mnemonic phrase can derive both legacy and quantum-resistant accounts.

- o Quantum-resistant wallets can optionally support legacy operations.

- o Automatic asset migration between legacy and quantum-resistant accounts when needed.

- 4\) Efficient Implementation

- o Quantum-resistant signature verification is built into QDay nodes.

- o Additional gas costs for quantum-resistant operations.

- o Standardized prefix (pq_) for quantum-resistant contract methods.

- 5\) Flexible Adoption

- o The developers of dApps can choose their own upgrade timeline.

- o Multiple implementational approaches available (gradual upgrade or complete replacement).

- o Optional fallback mechanisms for legacy compatibility.

## 6) Clear Standards

- o Consistent naming conventions for quantum-resistant methods.

- o Standardized signature data format.

- o Well-defined interfaces between legacy and quantum-resistant components.

These principles ensure that QDay can transition to quantum-resistant security while maintaining usability and allowing for organic ecosystem growth.

## 6. Application Ecosystem

## Category 1: Application related to Abelian

Since Abelian is the solid foundation of the security of QDay, especially in Phase 1 where the post-quantum features of the L2 chain are completely gained from the rollups to the L1 chain, the applications related to Abelian will be the first to be launched on QDay. Such applications will be led by the QDay team with strategic and technical support from the Abelian team.


Currently, the main applications fall in this category are Wrapped ABEL (wABEL) and Abelian Staking.

- o Wrapped ABEL (wABEL) - wABEL is a QRC20 token on QDay that is 1:1 pegged to the ABEL coin on Abelian. It is used to bridge the ABEL token between the QDay Blockchain and the Abelian Blockchain. To mint wABEL, the user needs to lock the ABEL coin on Abelian and receive the corresponding amount of wABEL on QDay. To burn wABEL, the user needs to burn the wABEL on QDay and receive the corresponding amount of ABEL coin on Abelian. To support such operations, QDay team will implement an online service for the minting and burning of wABEL. The service will be operated by a union of institutions having Trust Service Provider (TSP) certification.

- o Abelian Staking - Abelian Staking is a dApp to allow users to stake ABEL on QDay to earn airdrop and staking rewards. The details of the airdrop and staking rewards will be announced at the launch time of the QDay Phase 1 Mainnet.

## Category 2: EVM-compatible Applications

These dApps will be EVM-compatible that shall work with legacy accounts and legacy wallets. To better support the dApps developed by the community, QDay team will implement a set of fundamental DeFi dApps and provide them to the community at the launch time of both the Testnet and the Phase 1 Mainnet.

- o QDay Bridge: a dApp to provide the cross-chain asset transfer functions. Different from wABEL, QDay Bridge will focus on bridging ERC20, TRC20 and QRC20 tokens between QDay and other EVM-compatible chains.

- o QDay Staking: a dApp to provide the staking functions for \$QDAY. The staked \$QDAY encourages long-term holding of the tokens by its community.

- o Q-Swap: a decentralized exchange (DEX) dApp to provide the token swap functions. To help QDay go through the cold start period as smoothly as possible, the initial liquidity of \$QDAY, wABEL and the chain’s native stablecoins will be provided from the treasury of QDay and Abelian.

- o Q-LEAP (Quantum Lending Ecosystem And Protocol): a dApp to provide the lending and borrowing functions for QRC20 tokens. It's similar to the lending protocols on the existing EVM-compatible chains such as Aave and Compound.

- o Q-Finance: a consolidated dApp to integrate all the services above, where the users can easily manage their DeFi assets and participate in various DeFi dApps in a unified interface.


## Category 3: Quantum-Resistant Applications

In QDay Phase 2, we will focus on providing quantum-resistant versions of the existing dApps. These dApps will serve as the reference implementations of the quantum-resistant contracts and dApps for the community. In addition, we will provide an external quantum- resistant signature generator for legacy wallets to interact with the quantum-resistant contracts and dApps. As the planning of Phase 2 is still in the early stage, we will provide more details about the quantum-resistant applications in the future.

## 7. A New Evolution: Quantum-Resistant Global Payment Network (Phase 1.5)

## 7.1. Vision: A Universal Platform for the Quantum Era

QDay was conceived as more than the world's first quantum-resistant EVM-compatible Layer 2. The long-term vision positions QDay as a universal application platform — one capable of hosting payments, decentralized finance, commerce, and AI-native services within a single, cohesive ecosystem.

All applications in this ecosystem share two foundational properties: the full expressive power of the Ethereum Virtual Machine, and the post-quantum security guarantees inherited from the Abelian blockchain at Layer 1.

Central to this vision is for the chain to have its own native stablecoin that is secured, compliant, and fiat-backed. Such stablecoin enables seamless, stable value exchange across all application categories — from consumer payments to autonomous agent commerce — without requiring users or agents to interact with volatile native tokens. In combination with QDay's quantum- resistant infrastructure, having this native stablecoin positions the platform as a credible, secure foundation for the global movement of digital money.

In summary, the team's R&D mission for the next phase of QDay development is:

To make QDay the world's first quantum-resistant payment blockchain with native agentic payment capabilities, powered by its own native stablecoin and secured by ZK proofs anchored on the Abelian Layer 1.

## 7.2. Convergence of Major Industry Trends

QDay's next strategic chapter is shaped by three industry trends that are simultaneously reinforcing each other and accelerating the demand for exactly the infrastructure that QDay is designed to provide.

## Trend 1 — The Rise of AI and Autonomous Agents


Artificial intelligence systems are no longer passive tools that respond to human queries. Modern AI agents plan, decide, and act autonomously on behalf of their users — scheduling meetings, executing trades, managing workflows, and increasingly, making purchases and financial transfers without human intervention at each step. The shift from AI as a software tool to AI as an economic actor is well underway.

This transformation has a direct consequence for blockchain infrastructure: AI agents require payment rails that operate at machine speed, with programmable rules, spending limits, and cryptographic identity. Traditional financial systems were not designed for this. Blockchain networks that provide programmable, low-cost, and identity-aware payment primitives are positioned to become the settlement layer for the agent economy. QDay, with its EVM programmability, stablecoin infrastructure, and forthcoming agent-specific capabilities, is designed to serve precisely this role.

## Trend 2 — The Digitization of the US Dollar via Stablecoins

USD-pegged stablecoins — most prominently USDC and USDT — have achieved a combined market capitalization in the hundreds of billions and are processing trillions of dollars in annual settlement volume on public blockchains. Their regulatory trajectory has also shifted fundamentally: the United States has enacted legislative frameworks that formally recognize payment stablecoins. Same has happened in Europe and Hong Kong. Other major economies including the United Kingdom, the UAE, Singapore, and Japan are all pursuing equivalent frameworks.

Stablecoins now serve not merely as crypto-native instruments but as programmable dollar rails: they settle international B2B payments at a fraction of the cost and latency of correspondent banking, they enable creator monetization in emerging markets without local banking access, and they are being integrated directly into Visa's card settlement infrastructure. The US government has explicitly acknowledged stablecoins as a mechanism to extend the reach and demand for US dollar-denominated instruments globally.

QDay's own native stablecoin positions the platform at the intersection of this structural shift, where the entire QDay payment ecosystem is designed, enabling agents, users, and institutions to transact in digital dollars on a quantum-secure network.

## Trend 3 — The Emergence of Agentic Payments

Payment infrastructure is undergoing a fundamental redesign in response to the agent economy. Stripe, Google, Coinbase, and a growing cohort of fintech companies have announced or deployed agent-specific payment primitives: APIs that allow AI agents to hold balances, initiate transfers, pay for API calls on a per-request basis, and receive value on behalf of their principals — all without requiring a human to authorize every transaction.

The HTTP 402 payment protocol (sometimes referred to as x402) has emerged as a nascent standard for embedding stablecoin payments into ordinary web requests: an agent calls an API, the server responds with a payment request, the agent pays in USDC, and access is granted — all within a single HTTP exchange, with no API key management and no subscription overhead. Research from major cloud and payment providers indicates that a growing share of internet traffic is already generated by AI agents rather than humans, and that this share is increasing rapidly. The payment infrastructure to serve this traffic must be programmable, low-latency, and capable of operating at machine speed and machine scale.

QDay is designed to participate natively in this emerging agentic payment landscape.

## 7.3. The Strategic Path Forward

## Migration to Polygon CDK

The foundational step in QDay's next phase is the migration of the QDay blockchain to the Polygon Chain Development Kit (CDK). This is a strategic infrastructure decision with broad downstream consequences for QDay's performance and payment capabilities.

Polygon CDK is an open-source toolkit for deploying sovereign EVM-compatible blockchains as ZK rollups. A CDK chain retains full sovereignty — its own native token (\$QDAY), its own validator set, its own governance — while connecting to a shared interoperability layer called AggLayer. The migration does not replace QDay's existing architecture; it upgrades the settlement and proof mechanisms with the capabilities described in this section.

Key characteristics of a CDK-based QDay chain:

- o High throughput: ~2,000 transactions per second for the default CDK mode. Up to 20,000 TPS with optimized infrastructure.

- o Sub-cent transaction fees: Average fees of a few cents per transaction, making microtransactions and agent micropayments economically viable at scale.

- o Sub-second payment settlement on the QDay chain itself (excluding the proof submission to the L1 Abelian blockchain).

- o Validium mode: Transaction data can be stored off-chain with only ZK proofs posted to the settlement layer, preserving privacy while maintaining cryptographic integrity.

- o EVM-compatible: Full compatibility with the Ethereum development toolchain — all existing QDay smart contracts, dApps, and developer tooling migrate without modification.

- o ZK proof–based settlement: Every batch of QDay transactions is accompanied by a zero- knowledge validity proof routed through a proof aggregation layer that submits consolidated proofs to the Abelian blockchain — preserving the quantum-resistant settlement guarantee that is central to QDay's security model.

## Agentic Payment Capabilities

- o Wallet infrastructure: Enterprise-grade smart contract wallets with embedded SDK, gas abstraction (users pay entirely in QDay’s native stablecoin, never in native gas tokens), passkey-based authentication and spending controls. AI agents can be assigned session- scoped wallets with configurable spending limits and expiry windows.

- o Compliance and identity: Onchain agent identity registration via ERC-8004, enabling agents to build portable reputation and be trusted by counterparties and services.

- o Settlement rails: QDay's own chain provides fast, low-cost settlement — sub-second speed, sub-cent fees — as the base layer for all payment flows.


- o The x402 agentic payment protocol: The HTTP 402 payment standard enables AI agents to pay per API request in QDay’s native stablecoin via ordinary HTTP calls. An agent making a data request, an inference call, or a service invocation can pay for it in QDay’s native stablecoin in real time without prior agreements, subscriptions, or API key management.

## QDay's Native Stablecoin for the Agent Economy

QDay shall have its own native stablecoin that is US dollar-pegged as the primary unit of account for all payment activity on the platform. In the context of the agent economy, such stablecoin serves several distinct functions:

- o Gas abstraction: The integration and usage of a paymaster infrastructure in QDay's will allow agents and users to pay transaction fees in the native stablecoin, eliminating the need to hold or manage the \$QDAY native token for routine payment operations. From the agent's perspective, every interaction is calculated in stablecoin — there is no concept of gas tokens.

- o AI agent treasury: Agents can hold stablecoin balances in their session-scoped wallets, spend within their configured limits, and receive stablecoins as payment for services rendered — constituting a complete economic lifecycle without human intervention.

- o Cross-border payments: Stablecoin transfers on QDay settle in under a second at sub-cent fees, making it practical for cross-border B2B and consumer payment flows where traditional rails impose multi-day settlement windows and fees of 1-3%.

- o DeFi collateral: Within QDay's DeFi ecosystem (Q-Swap, Q-LEAP, etc.), the native stablecoin shall serve as the primary stable collateral, enabling lending, borrowing, and liquidity provisioning in a dollar-denominated instrument that does not require exposure to crypto price volatility.

## 7.4. The QDay Differentiator: Quantum-Secure Payments

The most significant strategic differentiation for QDay in the global payments landscape is one that no other payment blockchain currently possesses — post-quantum cryptographic security that is in Phase 1 anchored on a purpose-built quantum-resistant Layer 1 before becoming native post-quantum in Phase 2.

## QDay's Unique Security Architecture

In Phase 1, QDay operates as an EVM Layer 2 chain whose final state is settled — through the PQZK Bridge — on the Abelian L1, where the L1 chain employs lattice-based cryptographic algorithms (LWE and Ring-LWE) that are classified as quantum-resistant by the National Institute of Standards and Technology (NIST).

The critical property is cross-chain finality backed by ZK proofs settled on Abelian L1. Once a batch of QDay transactions has been proven and committed to Abelian, the finality of that state is protected by quantum-resistant cryptography. An adversary with access to a quantum computer cannot forge the Abelian-layer signatures of the rollup operators, cannot produce a valid PQZK proof for an invalid state transition, and therefore cannot modify or reverse confirmed QDay transactions — even with quantum computational resources.

This property is unique to QDay in the current market. Competing payment blockchains and L2 solutions settle on Ethereum or alternative L1s whose cryptographic assumptions are classical and therefore vulnerable to a sufficiently capable quantum computer. QDay is the only EVM- compatible payment network that anchors its finality in post-quantum cryptography.

## Quantum-Resistant Agentic Commerce

The convergence of AI agents and quantum-resistant payments is a particularly significant research direction. As AI agents become economic actors — holding balances, initiating payments, and managing financial positions — the security of the keys and wallets they use becomes critical. A quantum computer capable of breaking elliptic curve cryptography could, in principle, derive the private key of any standard EVM wallet from its public key. For an AI agent operating autonomously at scale, the consequences of such an attack would be severe and potentially irreversible.

QDay's roadmap addresses this directly. The Phase 2 quantum-resistant account model — which introduces post-quantum keys, quantum-resistant wallets, and quantum-resistant smart contracts — will be extended to cover agent wallet infrastructure. AI agents operating on QDay will be able to hold stablecoin balances in quantum-resistant accounts, with session-scoped spending limits enforced by quantum-resistant smart contracts. The private keys protecting these accounts are secured by lattice-based cryptography that remains intractable to both classical and quantum adversaries.

In combination with the DAO-based rollup halt mechanism described in Phase 1, QDay provides a complete response framework for quantum-level threats: detect, halt, freeze, remediate, and resume — all in a manner that a quantum computer cannot circumvent, because every step requires quantum-resistant signatures from the rollup operators.

## 7.5. Research and Development Focus Areas

The following areas represent the team's active R&D directions as QDay evolves toward its full payment and agent-commerce vision:

- 1\. CDK migration — Completion of the QDay blockchain migration to Polygon CDK and deployment of the PQZK Bridge to anchor ZK proofs on Abelian. This is the foundational infrastructure step to the subsequent agentic payment capabilities.

- 2\. Native stablecoin infrastructure — Integration with the Open Money Stack (OMS) layer. Build a QDay's paymaster infrastructure for using the chain’s stablecoin as a native gas token.

- 3\. Agentic wallet services — Design and implementation of session-scoped, quantum-resistant agent wallets with configurable spending limits and time-bounded access windows. Integration with the x402 protocol for per-request stablecoin payments.

- 4\. Onchain agent identity (ERC-8004) — Deployment of the ERC-8004 agent identity standard on QDay, enabling AI agents to register verifiable identities, build portable reputation, and be trusted by counterparties.

- 5\. Privacy layer for institutional payments — Investigation of ZK shielded pool technologies to enable confidential institutional payment flows on QDay, where payment amounts and counterparty addresses are not disclosed to public observers while remaining verifiable to authorized auditors.

## 7.6. Summary

QDay's next innovation chapter is defined by three converging forces — the AI agent economy, the global adoption of US dollar stablecoins, and the demand for quantum-secure financial infrastructure — and by a clear strategic response to each.

The migration to Polygon CDK unlocks the throughput and is the base for the agentic payment infrastructure. Having its own native stablecoin provides the stable, dollar-denominated monetary unit that agents, users, and institutions need to transact without volatility exposure. And the unique quantum-resistant security architecture — EVM Layer 2 execution with ZK proof finality anchored on the Abelian blockchain — provides a level of cryptographic assurance that no other payment network in the world currently offers.

QDay will be the world's first quantum-resistant payment blockchain with native agentic payment capabilities: a platform where AI agents pay for services in QDay’s stablecoin, where cross-border settlements confirm in under two seconds at sub-cent cost, and where the finality of every transaction is ultimately guaranteed by post-quantum cryptography immune to the most powerful computational adversaries anticipated in the coming decade

## 8. Roadmap

The major milestones of QDay are shown below:

| Date | Milestones |
| --- | --- |
| 2024 Q2 | Start Phase 1 Development |
| 2024 Q4 | Launch of QDay Phase 1 (Testnet v1) |
| 2025 Q2 | Launch of QDay Phase 1 (Testnet v2) |
| 2025 Q4 | Launch of QDay Phase 1 (Mainnet) |
| 2026 Q1 | Start Phase 1.5 Development |
| 2026 Q3 | Launch of QDay Phase 1.5 Upgrade – Enhanced Payment (Testnet) |
| 2026 Q4 | Start Phase 2 Development |
| 2027 Q1 | Launch of QDay Phase 1.5 Upgrade – Enhanced Payment (Mainnet) |
| 2027 Q2 | Launch of QDay Phase 2 Upgrade – Native PQ (Testnet) |
| 2027 Q4 | Launch of QDay Phase 2 Upgrade – Native PQ (Mainnet) |

## 9. Conclusion

QDay represents a groundbreaking advancement in blockchain technology, offering the first quantum-resistant EVM-compatible Layer 2 solution that is scalable and high-performance. Through its pragmatic multi-phase implementation strategy, QDay addresses the critical challenge of quantum computing threats while maintaining the practical benefits of existing blockchain infrastructure.

Phase 1 establishes quantum-resistant ledger security through L1-assisted rollups, leveraging Abelian's quantum-resistant properties while preserving full EVM compatibility. The novel POS-over-POW consensus mechanism combines the security benefits of Proof of Work with the efficiency advantages of Proof of Stake, creating a unique and robust security model. The implementation of quantum-resistant rollups provides an additional layer of protection, allowing for secure transaction processing and the ability to halt operations if threats are detected.

Phase 2 advances quantum security to the account level, introducing quantum-resistant accounts, wallets, and smart contracts while maintaining backward compatibility with legacy systems. This careful balance between innovation and compatibility ensures a smooth transition for existing users and developers while providing enhanced security features for those who require them.

In between, a newly inserted Phase 1.5 addressed the growing need for a secure, high- performance payment rail in the face of growing AI demand and agentic payments and commerce.

QDay's comprehensive ecosystem approach, including essential DeFi applications and cross- chain bridges, creates a complete quantum-resistant blockchain environment. The platform's tokenomics model, with its balanced distribution strategy, ensures long-term sustainability and incentivizes broad participation across the network.

QDay's roadmap from outlines a clear path toward full implementation, with careful attention to testing, gradual deployment, and ecosystem development. This methodical approach, combined with the platform's innovative technical features, positions QDay as a pioneer in quantum- resistant blockchain technology, ready to address both current needs and future challenges in the evolving blockchain landscape.

Beyond the immediate roadmap, the QDay team is actively pursuing a strategic research and development direction that extends the platform's quantum-resistant foundation into the emerging landscape of global stablecoin payments and AI-native commerce. The goal of this research direction is unambiguous — to establish QDay as the world's first quantum-resistant global payment network with native agentic payment capabilities, providing individuals, enterprises, and autonomous AI agents with a platform where digital commerce is fast, low-cost, and immune to the quantum threats that the broader financial and blockchain landscape has yet to address.


Through its combination of quantum resistance, scalability, and practical usability, QDay represents not just an incremental improvement but a fundamental advance in blockchain technology, paving the way for a more secure and sustainable future for decentralized applications and digital assets.

## 10. References

[1] QDay Official Website: https://www.qday.io/

[2] QDay Documentation: https://community.qday.io/guide/

[3] Fabian Vogelsteller, Vitalik Buterin, November 2015. ERC-20: Token Standard. https://eips.ethereum.org/EIPS/eip-20

[4] Polygon zkRollup. https://docs.polygon.technology/cdk/concepts/zk-vs-

optimistic/?h=polygon+zk+rollups#zero-knowledge-rollups

## Technical Papers

[1] Abelian, May 2023, Post-Quantum Zero-Knowledge (PQZK) Bridge

https://download.pqabelian.io/release/docs/Abelian%20PQZK%20Bridge.pdf

[2] Abelian, February 2022, Abelian Whitepaper. https://community.pqabelian.io/guide/abel- whitepaper.html

[3] Abelian, February 2022 Abelian Improvement Proposal 0011: Mnemonic Codes for Generating Deterministic Accounts.

https://github.com/pqabelian/aips/blob/master/aips/aip0011/aip0011_v005.md
