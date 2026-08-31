---
id: build-on-qday
title: 7. Build on QDay
sidebar_position: 7
---

# 7. Build on QDay

## 7.1 Developer Resources

QDay is fully EVM-compatible, so existing Solidity contracts, developer tooling, and dApps built for Ethereum work on QDay without modification. Point your tooling at rpc-main.qday.io (Chain ID 44001) for mainnet or rpc-test.qday.info (Chain ID 44005) for testnet, and verify deployments on the matching block explorer. Developer documentation is available through QDay's community website.

## 7.2 Deploy Contracts

QDay supports the standard Ethereum toolchain — Remix, Hardhat, or Foundry all work without modification. Developers building a quantum-resistant contract follow a simple convention: quantum-resistant methods are prefixed and take a quantum-resistant signature as a parameter, verified natively by QDay's nodes rather than through the EVM — so quantum-resistant calls don't carry extra gas cost.

## 7.3 AI Development

Build AI agent applications on QDay using its native agent identity and payment infrastructure: register an onchain identity for an agent, issue it a spending-limited session wallet, and let it pay for API calls or services directly in USD8 — no subscription or manual approval step required.

## 7.4 Grants

[Placeholder] A developer grants program to support ecosystem builders is planned.

## 7.5 Hackathon

[Placeholder] Hackathons to support ecosystem builders are planned.
