---
sidebar_position: 5
title: Protocol
draft: false
---

# Protocol

The underlying protocol design of QDAY2 — consensus, proving, bridging, and application-layer protocols.

## Network Protocol

**Transport** — `cdk-erigon` uses the Ethereum DevP2P protocol for peer-to-peer communication between nodes. New blocks and transactions are propagated via Ethereum's standard gossip protocol (eth/66, eth/67).

**JSON-RPC** — QDAY2 exposes a fully Ethereum-compatible JSON-RPC interface (`eth_*`, `net_*`, `web3_*`). Any tool that can talk to an Ethereum node (MetaMask, ethers.js, viem, Foundry cast) connects to QDAY2 without modification.

**Sequencer API** — The Sequencer exposes an additional internal API used by the Sequence Sender (`cdk-node`) to sync newly produced blocks. This API is not public-facing.

## Consensus & Settlement

QDAY2 uses a **PoS-over-PoW** consensus design: a Proof-of-Stake validator network operates on top of Abelian's Proof-of-Work Layer 1.

**L2 Soft Confirmation** — When `cdk-erigon` includes a transaction in a block, that transaction has soft confirmation. It is immediately visible on-chain and can be used as a dependency for subsequent transactions. Reorganizations can occur until a batch is finalized.

**Batch Finality** — A transaction achieves L2 batch finality when the Aggregator submits a valid ZK proof for its batch to `zkRollupManager.verifyBatches()`. At this point the state root is immutable at the DA layer.

**L1 Finality** — After the Committer writes the batch status root to the Abelian Chain, the transaction has full L1 finality anchored by Abelian's lattice-based cryptographic security.

**CometBFT Integration** — QDAY2 integrates CometBFT (formerly Tendermint) for distributed state machine replication across DA nodes, providing Byzantine fault-tolerant consensus among the validator set.

## zk Proof Protocol

The ZK proof protocol ensures that every state transition on QDAY2 can be verified cryptographically without re-executing all transactions.

**Batch Formation** — The Sequence Sender (`cdk-node`) collects L2 blocks from `cdk-erigon` and packs them into a Batch. Batches are submitted to `zkRollupManager` via `sequenceBatches()`. Each batch includes: list of encoded transactions, state root before execution, timestamp, and a forced batch flag.

**Witness Generation** — After a batch is accepted by `zkRollupManager`, the Aggregator reads the batch data: Batch Number, Batch Hash, pre-execution State Root, post-execution State Root, and Local Exit Root. These values constitute the witness for proof generation.

**Circuit** — The zkEVM circuit encodes the semantics of correct EVM execution as a system of arithmetic constraints (R1CS / PLONK). The circuit checks that, given the pre-state, executing the specified transactions yields exactly the claimed post-state and exit root.

**Prover** — The zk Prover service receives the batch witness, evaluates the circuit, and generates a succinct validity proof. The proof is computed off-chain in a resource-intensive but parallelizable process. Multiple prover instances can run concurrently for throughput scaling.

**Verifier** — The `Verifier` contract (deployed on the DA layer, referenced by `zkRollupManager`) checks the proof on-chain using the verifying key embedded at deployment. Verification is efficient — it runs in constant time regardless of how many transactions are in the batch. A successful verification call to `zkRollupManager.verifyBatches()` updates the Rollup's Final State Root.

## Bridge Protocol

**PolygonZkEVMBridge** — The bridge contract is deployed on the DA layer. To bridge assets from QDAY2 to another chain, the bridge contract on QDAY2 locks the asset and emits a `BridgeEvent`. The event is included in the batch's Local Exit Root, which is committed to the Global Exit Root after ZK verification.

**GlobalExitRoot** — The `GlobalExitRoot` contract maintains a Merkle tree that accumulates exit roots from all connected rollup chains. Any chain that tracks the GlobalExitRoot can verify a bridge claim by presenting a Merkle proof against the committed root.

**Claim Process** — To claim bridged assets on the destination chain, the recipient presents the bridge event data and a Merkle proof to the destination chain's `PolygonZkEVMBridge`. The contract verifies the proof against the known GlobalExitRoot and releases the assets.

**PQZK Bridge (QDAY2 ↔ Abelian)** — The PQZK Bridge handles transfers between QDAY2 (EVM account model) and the Abelian Layer 1 (UTXO model). The Committer's status root submissions to Abelian Chain serve as the trust anchor. Wrapped ABEL (wABEL) on QDAY2 represents ABEL locked on the Abelian L1.

## Account Abstraction Protocol

QDAY2 implements **ERC-4337** account abstraction without requiring changes to the core EVM protocol.

**UserOperation** — Instead of a standard Ethereum transaction, users construct a `UserOperation` struct containing: `sender` (Smart Account address), `nonce`, `initCode` (for account deployment), `callData`, `callGasLimit`, `verificationGasLimit`, `preVerificationGas`, `maxFeePerGas`, `maxPriorityFeePerGas`, `paymasterAndData`, and `signature`.

**Bundler Mempool** — The Alto bundler maintains an off-chain UserOperation mempool. Bundlers collect UserOperations, simulate execution to check validity and gas limits, and pack multiple UserOperations into a single `handleOps()` transaction.

**EntryPoint Execution** — The `EntryPoint` contract performs two phases per UserOperation: (1) **Verification** — calls `validateUserOp()` on the Smart Account and (optionally) `validatePaymasterUserOp()` on the Paymaster; (2) **Execution** — calls the Smart Account's target function. Gas from the Paymaster deposit or the sender's deposited balance covers costs.

**Session Key Authorization** — Session keys are issued by the Smart Account owner and stored in a `SessionKeyManager` module. Each session key is scoped by: allowed contract addresses, allowed function selectors, value limit per call, cumulative spend limit, and expiry timestamp. AI agents use session keys to transact autonomously within these bounds.

## Payment Protocol

The QDAY2 payment protocol defines a lifecycle for structured, verifiable payments.

**Payment Session** — A payment session is initiated when a payer creates an on-chain payment intent specifying: payee address, amount, currency, expiry, and optional metadata hash. The session ID is derived from these parameters.

**Invoice Lifecycle** — An invoice passes through states: `Created` → `Pending` (payer acknowledged) → `Paid` (funds locked) → `Settled` (funds released to merchant) → `Expired` (timeout without payment) or `Cancelled` (explicitly cancelled by payer). Each state transition emits an event.

**Settlement Finality** — Payment settlement is gated on L2 batch finality. Funds are released to the merchant only after the batch containing the payment transaction is ZK-verified. For time-sensitive use cases, soft-confirmation settlement is available with a configurable confirmation threshold.

**Streaming Payment** — Streaming payments drip funds continuously over time using a flow rate (tokens per second). The payer locks a deposit; the payee can claim accrued funds at any time. If the deposit runs out, the stream stops automatically.

**Agent Payment Authorization** — AI agents initiate payments through Session Keys scoped to the Payment contract. The agent's session key specifies: maximum single-payment amount, maximum cumulative spend per period, allowed recipient addresses (whitelist), and expiry. Payments outside these bounds are rejected by the EntryPoint at verification time.

## AI Agent Protocol

The AI Agent Protocol defines how autonomous agents interact with QDAY2 contracts and external AI inference.

**Intent Declaration** — Users declare an intent by submitting a signed `Intent` struct: goal description (UTF-8), trigger conditions, authorized actions (encoded as contract call selectors), resource limits, and expiry. Intents are stored on-chain in the Intent Registry contract.

**On-chain Authorization** — Each agent is associated with a Smart Account Session Key that scopes what contracts and functions the agent can call, and what value it can move. The Session Key is the authorization boundary — the agent cannot exceed it regardless of what its AI model suggests.

**Tool Call Execution** — When an agent decides to invoke a contract function, it constructs a `UserOperation` targeting the desired contract. The Alto bundler validates the UserOperation (checking session key scope and gas limits) and submits it to the EntryPoint. The result (return value or revert reason) is fed back to the agent's context.

**MCP Integration** — Agents connect to MCP (Model Context Protocol) servers to access AI inference, real-time price data, and off-chain APIs. MCP requests carry a session token that maps back to the on-chain agent identity, enabling auditable AI-driven actions.

**Result Attestation** — After an agent completes a multi-step action, it can commit a result hash to the Agent Registry contract. This creates an immutable, timestamped audit trail of the agent's decisions and actions.

## Token Standards

**ERC-20** — QDAY2 is compatible with the standard ERC-20 token interface. The PQUSD stablecoin implements ERC-20 with EIP-2612 permit support.

**PQUSD** — PQUSD is a USD-pegged stablecoin deployed on QDAY2 using the Circle USDC V2.3 contract architecture. Token details: name `PQUSD`, symbol `PQUSD`, currency `USD`, decimals `6`.

**ERC-4337 Smart Accounts** — Smart Accounts are ERC-4337-compatible contracts. They implement `IAccount` (for `validateUserOp`) and optionally `IAccountExecute` for batched calls.

**Future: Post-Quantum Token Standard** — Phase 2 will introduce an extension to ERC-20 that adds ML-DSA-65 signature verification for token operations, enabling quantum-resistant token transfers.

## Data Availability

**Abelian Plus Node** — The DA layer for QDAY2 is the Abelian Plus Node, running `reth` (Ethereum execution client) and `lighthouse` (Ethereum consensus client). The DA Node hosts the zkEVM contracts and stores all rollup data — batches, proofs, and state roots.

**DA Commitment** — Every batch submitted to `zkRollupManager` includes a DA commitment (hash of batch data). The Aggregator must be able to retrieve the full batch data from the DA Node to generate a proof.

**Record Contracts** — On-chain contracts on the DA layer store: Batch Metadata (batch number, hash, timestamp), Status Root (post-proof state root), and Commit Result (success/failure of the Committer's write to Abelian Chain).

## Economics

**Gas** — QDAY2 uses an Ethereum-compatible gas model. Gas prices are denominated in the native gas token and follow EIP-1559 (base fee + priority fee).

**QDAY Token** — The QDAY token (total supply: 22,517,998,100) is used for validator staking, governance, and fee payment. QDAY mirrors the total supply of ABEL on the Abelian L1.

**Validator Staking** — PoS validators stake QDAY to participate in the CometBFT consensus on the DA layer. Staking rewards are proportional to stake weight and validator uptime.

**Prover Fees** — zk Prover operators earn fees from the protocol treasury for each batch they prove. The fee rate is governed by the QDAY DAO.

## Governance

**QDAY DAO** — Protocol parameter changes, contract upgrades, and emergency actions require DAO approval. Voting power is proportional to staked QDAY.

**Timelock** — All privileged operations on the `RollupManager` are executed through a `Timelock` contract with a minimum delay. This gives the community time to review and veto changes.

**Quantum-Threat Halt** — If a credible quantum threat is detected, the DAO can vote to halt rollup execution. The halt is enforced by the `RollupManager` contract. Because the halt itself is gated by quantum-resistant Abelian L1 signatures, an attacker with a quantum computer cannot force a rollup un-halt or forge a halt revocation.
