---
title: Getting Started
sidebar_position: 4
---

# Getting Started

## Add Network

QDay works with MetaMask and any WalletConnect-compatible wallet. Add the network manually with:

| | Testnet | Mainnet |
|---|---|---|
| Network Name | QDay Aevum | Coming soon |
| RPC URL | rpc-test.qday.info | Coming soon |
| Chain ID | 44005 | Coming soon |
| Currency Symbol | tQDAY | Coming soon |
| Block Explorer | explorer-test.qday.info | Coming soon |

## Faucet

On testnet, connect your wallet to QDay's faucet to receive tokens for testing.

![Getting Started Guide](/img/getting-started1.jpg)
![Getting Started Guide](/img/getting-started2.jpg)


## Bridge

To move assets onto QDay from another chain, use [QDay Bridge](/guide/handbook/user-guide#qday-bridge) (ERC20 / TRC20 / QRC20) or [Abelian Bridge v3](/guide/handbook/user-guide/abelian-bridge-v3) (ABEL / WABEL).

## First Transaction

This walkthrough sends **1 QDAY** with MetaMask. Use **testnet** the first time — [add the QDay network](/guide/start/add-network) and [claim testnet QDAY](/guide/start/faucet) first. On mainnet the steps are the same; you pay real QDAY.

### Prerequisites

- [MetaMask](/guide/handbook/user-guide/metamask) installed, with the QDay network added
- A funded account (at least 1 QDAY plus a little extra for gas)
- The recipient's QDay address (another of your accounts is fine for practice)

### Send 1 QDAY in MetaMask

1. Open the MetaMask extension and switch the network to **QDay Mainnet** or **QDay Aevum** (testnet). Confirm the native token shows as QDAY (or tQDAY on testnet).
2. Click **Send**.
3. Paste the recipient address into the **To** field. Check it character by character — a wrong address cannot be reversed, and some malware silently replaces an address copied to the clipboard.
4. Enter **1** in the amount field and make sure the asset is **QDAY**, not an ERC-20 such as USD8 or WABEL.
5. Click **Continue** (or **Next**). Review:
   - Network
   - Recipient
   - Amount: 1 QDAY
   - Estimated gas fee (paid in QDAY; it should be a fraction of a cent to a few cents)
6. Click **Confirm**. MetaMask broadcasts the transaction.
7. Open the **Activity** tab. When the status is **Confirmed**, click the transaction to view it on the block explorer ([explorer-main.qday.io](https://explorer-main.qday.io) on mainnet, [explorer-test.qday.info](https://explorer-test.qday.info) on testnet).

:::tip[Practice on testnet]
Send 1 QDAY to a second MetaMask account you control, then send it back. That confirms you can sign, pay gas, and read the explorer before you move mainnet funds.
:::

:::warning[Gas is QDAY]
A native transfer pays the network fee in QDAY. If MetaMask says the fee cannot be paid, you need a small extra QDAY balance on top of the 1 QDAY you are sending.
:::

## Deploy your first smart contract

QDay is EVM-compatible, so [Remix IDE](https://remix.ethereum.org) works the same as on Ethereum. This example deploys a tiny contract through MetaMask on QDay.

### Prerequisites

- MetaMask connected to QDay (testnet recommended)
- Enough QDAY in the account to cover deploy gas
- A browser with the MetaMask extension (Remix's Injected Provider uses it)

### 1. Open Remix and create the contract

1. Go to [remix.ethereum.org](https://remix.ethereum.org).
2. In the **File Explorer**, under `contracts`, create a new file named `HelloQDay.sol`.
3. Paste:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HelloQDay {
    string public greeting = "Hello, QDay";

    function setGreeting(string calldata _greeting) external {
        greeting = _greeting;
    }
}
```

### 2. Compile

1. Open the **Solidity Compiler** plugin (left sidebar).
2. Set the compiler to `0.8.20` or newer (match the `pragma` above).
3. Click **Compile HelloQDay.sol**. A green checkmark on the compiler icon means it succeeded.

### 3. Connect Remix to QDay via MetaMask

1. Open the **Deploy & Run Transactions** plugin.
2. Set **Environment** to **Injected Provider - MetaMask** (not Remix VM). Remix asks MetaMask to connect — approve it.
3. In MetaMask, confirm the selected network is QDay (Chain ID `44001` mainnet or `44005` testnet) and that the account shown in Remix is the one you want to deploy from.

:::danger[Do not deploy to Ethereum by mistake]
If Environment is Injected Provider but MetaMask is still on Ethereum, the contract deploys there and you pay ETH. Always check the network name in MetaMask before clicking Deploy.
:::

### 4. Deploy

1. In the contract dropdown, select **HelloQDay**.
2. Click **Deploy**.
3. Review the MetaMask confirmation (network, estimated gas in QDAY) and click **Confirm**.
4. Wait until the transaction confirms. The contract appears under **Deployed Contracts** in Remix. Copy the contract address.

### 5. Call it and verify on the explorer

1. In Remix, expand the deployed **HelloQDay** instance.
2. Click **greeting** — it should return `Hello, QDay`.
3. Enter a new string in **setGreeting**, click the button, and confirm in MetaMask. Call **greeting** again to see the update.
4. Paste the contract address into the explorer to see the deploy transaction and later calls:
   - Mainnet: [explorer-main.qday.io](https://explorer-main.qday.io)
   - Testnet: [explorer-test.qday.info](https://explorer-test.qday.info)

For Hardhat or Foundry, and for quantum-resistant method conventions, see [Build on QDay](/guide/handbook/build-on-qday) and the [Developer docs](/Knowledge/dev/).
