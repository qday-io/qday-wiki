---
id: user-guide
title: 5. User Guide
sidebar_position: 5
---

# 5. User Guide

## 5.1 Wallet

Connect a standard EVM wallet for everyday use. QDay's own wallet additionally supports passkey login and, for AI agents, spending-limited session wallets. The steps below walk through setting up MetaMask specifically.

### Install MetaMask

1. Visit the official MetaMask site and install the browser extension for your browser (Chrome, Firefox, and Edge are all supported).
2. Click the extension icon in your browser toolbar to begin setup.

### Create a Wallet

1. Click the MetaMask extension icon and select **Create a new wallet**.
2. Follow the prompts to set a strong password.
3. MetaMask generates a 12-word mnemonic phrase. Write down all 12 words in the exact order and store them somewhere safe and offline.
4. Verify the phrase when prompted to finish creating the wallet.

> **Never do the following:** share your mnemonic phrase with anyone, enter it into a website, save it in a screenshot, email, chat app, or cloud note, or give it to anyone claiming to be support.
>
> **Note:** creating a wallet generates a new mnemonic phrase. If you later import an account using a private key instead, that account may not be recoverable from this new mnemonic phrase — keep a separate backup of any imported private key.

### Get Your Wallet Address

Open MetaMask, select the account you want to use, and click the account name or address to copy it to your clipboard. Your address is public and safe to share with anyone sending you assets — but always double-check a pasted address before sending funds, since some malware can silently swap a copied address in your clipboard.

### Add the QDay Network

**Automatically:** visit QDay's block explorer and click **Add QDay Mainnet** in the upper right corner. When MetaMask prompts you to approve the network, verify the details match those below before confirming.

**Manually:** open MetaMask, select **Networks**, click **Add a custom network**, and enter:

| | Mainnet | Testnet |
|---|---|---|
| Network Name | QDay Mainnet | Aevum |
| RPC URL | rpc-main.qday.io | rpc-test.qday.info |
| Chain ID | 44001 | 44005 |
| Currency Symbol | QDAY | tQDAY |
| Block Explorer | explorer-main.qday.io | explorer-test.qday.info |

### Import an Existing QDay Wallet

Export your private key from the QDay tab of the Abelian mobile app, then in MetaMask open the account menu, select **Add wallet → Import an account**, choose **Private Key**, paste the key, and click **Import**.

### Add USD8 and Other Tokens

With the QDAY network selected, go to the **Tokens** tab, click **Import tokens**, and paste the relevant contract address below (make sure you're using the address for the network you're connected to — mainnet and testnet addresses differ). The remaining fields populate automatically — click **Next**, then **Import**.

| Token | Mainnet Contract Address | Testnet Contract Address |
|---|---|---|
| USD8 | 0x668FaAFd6b363d6cED62491BfCBE2A39da3D14cB | [Placeholder] |
| WQDAY | 0xEF253e9FC2d063869FD5B3C0E1c326aB7E030660 | [Placeholder] |
| WABEL | 0x3a4D0834fe667D780c0fa434Ec9c1c3b08181882 | [Placeholder] |

## 5.2 Swap

Use Q-Swap to instantly swap between WABEL, QDAY, and USD8, or provide liquidity to earn a share of trading fees.

### Prerequisites

Set up MetaMask and add the QDAY network before using Q-Swap.

For testnet, please go to QDay Portal: https://portal.qday.info/en/qday-swap

For mainnet, please visit QDay Portal: https://portal.qday.io/en/qday-swap

### Swap Tokens

1. Go to QDAY portal and connect your wallet, making sure it's switched to the QDay network (testnet/mainnet).
2. Select the token you want to swap and the token you want to receive.
3. Enter an amount — Q-Swap calculates the exchange rate and estimated tokens received automatically.
4. Click **Swap** and confirm the authorization and transaction in your wallet.

![Q-Swap swap tokens](/img/user-guide1.jpg)

![Q-Swap swap tokens](/img/user-guide2.jpg)

*As there is a blocked issue (verifying by Morris) at testnet, the screenshots of the whole flow could not be captured.*

### Provide Liquidity

Add tokens to a liquidity pool to become a liquidity provider (LP) and earn a share of trading fees. Three pairs are available: **QDAY/USD8**, **QDAY/WABEL**, and **WABEL/USD8**.

1. Go to the **Liquidity Pools** page and check **Pool Statistics** to compare pools before committing funds.
2. Switch to **Add Liquidity**, select a token pair, and choose a fee tier (0.30% is the default recommendation).

![Add liquidity](/img/user-guide3.jpg)

3. Enter the amount for one token — Q-Swap calculates the matching amount of the other token automatically.
4. Click **Add Liquidity**, then authorize and confirm the transaction in your wallet to receive your LP share.

![Add liquidity confirmation](/img/user-guide4.jpg)

![LP share received](/img/user-guide5.jpg)

### Manage Positions

View your current liquidity under **My Positions**, where you can remove liquidity at any time. View past swaps and liquidity actions under **Transaction History**, accessible from your wallet address in the upper right corner.

> **Security:** only access Q-Swap through QDay's official portal link to avoid phishing sites, and test large transactions with a small amount first.
>
> *No liquidity pool and no historical data available. Development team is working on a fix.*

## 5.3 Stake

QDay Staking and ABEL Staking are two distinct products — one for staking QDAY, one for staking ABEL — that happen to share the same staking portal. Each has its own prerequisites and reward pool.

### QDay Staking

#### Prerequisites

- An EVM-compatible wallet (MetaMask recommended) with the QDay network added.
- QDAY or WQDAY in your wallet.
- A small amount of QDAY to cover network fees.

#### Getting QDAY

Buy ABEL and stake it through ABEL Staking to earn QDAY rewards, or use Q-Swap to swap USD8 for QDAY directly.

#### How to Stake

1. Add the QDay network to MetaMask.
2. Go to QDay's staking portal and click **Connect Wallet**, choosing MetaMask, WalletConnect, or Rainbow.
3. Select **WQDAY** from the token dropdown, enter the amount to stake, choose a lock-up period (up to 1,460 days / 4 years), then click **Stake** and confirm in your wallet. Staking QDAY automatically converts it to WQDAY (the wrapped token used for staking) if your balance allows.

![Stake WQDAY](/img/user-guide6.jpg)

4. Track your position under **My Staking**: rewards accrue daily and can be claimed and withdrawn anytime, independent of the lock-up. From there you can also **extend** the lock period, **add** to an existing stake, or **unstake** once the lock-up ends.

![My Staking position](/img/user-guide7.jpg)

#### How Rewards Work

Per QDay's whitepaper-sourced Tokenomics table, 35% of QDAY's total supply is reserved for the staking reward pool, distributed gradually — 1/1000 of the remaining pool each day, so the daily payout tapers over time. Your daily reward is based on your share of that pool: **Share = amount staked × remaining lock-up days**. For example, staking 100 QDAY for a 1,460-day lock-up (100 × 1,460 = 146,000) earns the same share as staking 200 QDAY for a 730-day lock-up (200 × 730 = 146,000) — longer lock-ups let a smaller amount earn a proportionally larger share.

Rewards aren't fixed — actual payouts depend on the remaining reward pool, total shares from all stakers, and how staking positions change over time.

### ABEL Staking

#### Prerequisites

- An EVM-compatible wallet (MetaMask recommended) with the QDay network added.
- WABEL in your wallet — convert ABEL to WABEL via Abelian Bridge first.
- A small amount of WABEL to cover network fees.

#### Getting WABEL

Buy ABEL through a supported exchange or the Abelian Mobile Wallet's in-app purchase, then convert it to WABEL via Abelian Bridge.

#### How to Stake

1. Add the QDay network to MetaMask.
2. Go to QDay's staking portal and click **Connect Wallet**, choosing MetaMask, WalletConnect, or Rainbow.
3. Select **WABEL** from the token dropdown (minimum 1,000 WABEL), enter the amount to stake, choose a lock-up period (up to 1,460 days / 4 years), then click **Stake** and confirm in your wallet.

![Stake WABEL](/img/user-guide8.jpg)

4. Track your position under **My Staking**: rewards accrue daily and can be claimed and withdrawn anytime, independent of the lock-up. From there you can also extend the lock period, add to an existing stake, or unstake once the lock-up ends.

![My Staking position (ABEL)](/img/user-guide9.jpg)

#### How Rewards Work

Longer lock commitments yield higher daily payouts — a 4-year lock provides roughly a 15x multiplier on reward share versus the shortest lock-up. Rewards accumulate and distribute daily, and can be claimed and withdrawn at any time without affecting your locked deposit. Rewards aren't guaranteed and may vary with total pool participation, network conditions, and lock-up selection.

> **FAQ — Can Abelian be added directly to MetaMask?** No. Abelian is a separate, non-EVM chain, so MetaMask can't connect to it directly. To hold or convert ABEL, use the Abelian mobile wallet instead.

## 5.4 Explorer

QDay's block explorer lets you look up any transaction, address, or contract on the network.

URL: explorer-test.qday.info

- **Search** — paste a transaction hash, wallet address, or contract address into the search bar to pull up its details.
- **Transactions** — view status, block confirmation, gas fee, and the full list of token transfers for any transaction.
- **Address details** — see an address's QDAY, WABEL, and USD8 balances, its transaction history, and any verified contract source code, if applicable.
- **Network stats** — check current block height, average block time, and network throughput from the explorer's homepage.

![QDay block explorer](/img/user-guide10.jpg)

## 5.5 Bridge

QDay Bridge and Abelian Bridge are two separate products for two different jobs — one moves standard cross-chain tokens, the other moves ABEL specifically between Abelian and QDay.

### QDay Bridge

QDay Bridge moves ERC20, TRC20, and QRC20 assets to and from other EVM-compatible chains.

1. Go to QDay Bridge and connect your wallet.
2. Select the source chain and network you're bridging from, and the destination chain and network you're bridging to.
3. Choose the token and enter the amount to bridge.
4. Review the destination wallet address, estimated fees, and completion time, then confirm.
5. Approve the transaction in your wallet. Depending on the destination chain, you may need to confirm a second transaction to complete the transfer.
6. Track the transfer's status from the bridge's transaction history until it completes.

![QDay Bridge](/img/user-guide11.jpg)

### Abelian Bridge

Abelian Bridge is a separate product that moves ABEL and WABEL between Abelian and QDay. It supports two directions: **ABEL → WABEL** and **WABEL → ABEL**. Visit the bridge portal to begin.

#### Step 1: Connect and Authorize

Connect your wallet, click **Authorize**, and confirm the signature request in MetaMask. This step doesn't move any tokens or cost a network fee — it just allows your wallet to interact with the bridge.

![MetaMask wallet authorization](/img/user-guide12.jpg)

*MetaMask wallet authorization*

#### Step 2: Enter Bridge Details

Select the source network and token, enter the amount to bridge, and enter the destination wallet address. Double-check the destination address before continuing — sending to the wrong one is a common, unrecoverable mistake.

![Enter bridge details](/img/user-guide13.jpg)

*Enter bridge details*

Click the switch icon to change direction between ABEL → WABEL and WABEL → ABEL, or click **MAX** to bridge your full available balance. Review the receiving amount and destination address, then click **Generate New Order**.

![Bridge direction and max balance options](/img/user-guide14.jpg)

*Bridge direction and max balance options*

**Large transactions** — 10,000 ABEL or more, or 10,000 WABEL or more — require manual review and can take up to 24 hours to process.

![Large-amount transaction warning](/img/user-guide15.jpg)

*Large-amount transaction warning*

Before confirming, review the amount, transaction fee, total to send or receive, and estimated completion time.

![Confirmation pop-up for ABEL to WABEL](/img/user-guide16.jpg)

*Confirmation pop-up for ABEL to WABEL*

![Confirmation pop-up for WABEL to ABEL](/img/user-guide17.jpg)

*Confirmation pop-up for WABEL to ABEL*

> Send tokens from the same wallet address you entered in the bridge details — a deposit from a different address may not be detected automatically and can delay your transfer.

#### Step 3: Complete the Transfer

**ABEL → WABEL:** scan the QR code with the Abelian mobile app (Send → (W)ABEL Conversion) and confirm the transfer before the code expires.

![Scan QR code for ABEL to WABEL deposit](/img/user-guide18.jpg)

*Scan QR code for ABEL to WABEL deposit*

Low-value transfers are detected automatically; once complete, the **Bridge Successful** screen shows the transaction hash, addresses, amounts, and your updated balance.

![Bridge successful for ABEL to WABEL](/img/user-guide19.jpg)

*Bridge successful for ABEL to WABEL*

**WABEL → ABEL:** review the deposit address and amount, click **Transfer WABEL**, and confirm in your wallet.

![Transfer WABEL deposit screen](/img/user-guide20.jpg)

*Transfer WABEL deposit screen*

![Bridge successful for WABEL to ABEL](/img/user-guide21.jpg)

*Bridge successful for WABEL to ABEL*

#### Large Transactions, Refunds, and History

Large-value transfers are held for manual review after the transfer completes. If approved, the order completes normally; if rejected, you can request a refund from the transaction's detail screen.

![Large-value transaction pending review](/img/user-guide22.jpg)

*Large-value transaction pending review*

![Request a refund](/img/user-guide23.jpg)

*Request a refund*

![Refund completed](/img/user-guide24.jpg)

*Refund completed*

Your full bridge history — direction, status, amount, and estimated completion — is available under **Recent Transactions**.

![Recent bridge transactions](/img/user-guide25.jpg)

*Recent bridge transactions*

> **Source:** adapted from community.qday.io's Abelian Bridge (v3) User Guide (via github.com/qday-io/qday-community-website).
