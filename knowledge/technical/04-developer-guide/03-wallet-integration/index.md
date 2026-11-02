---
title: Wallet Integration
draft: false
---

# Wallet Integration

:::note[Coming Q1 2027]
The QDay SDK (`@qday-io/sdk`) and CLI (`@qday-io/cli`) launch in Q1 2027 and are not yet published on npm. Code on this page shows the planned API.
:::

QDay Aevum supports two wallet types:

**EOA Wallets** — Standard Ethereum externally-owned accounts (ECDSA). MetaMask, Frame, and any wallet that supports custom EVM chains work out of the box. Connect by adding the network from [Network Configuration](/Knowledge/technical/developer-guide/network-configuration).

**Smart Account Wallets** *(live on the QDay Aevum testnet; mainnet in Q1 2027)* — ERC-4337 Smart Accounts provide gas abstraction (the stablecoin paymaster lets fees be paid in USD8 instead of $QDAY), batched calls, and session key delegation with spending caps and time locks. Smart accounts are deployed on first use; the user's EOA acts as the owner/signer.

The example below shows the planned SDK API (`@qday-io/sdk`, Q1 2027, not yet on npm). `https://bundler.qday.io` is the mainnet bundler hostname (live at mainnet launch); EntryPoint and bundler details for the Aevum testnet will be published in the docs.

```typescript
// Planned SDK API — @qday-io/sdk is not yet published on npm (Q1 2027).
import { createSmartAccountClient } from "@qday-io/sdk/aa";

const client = await createSmartAccountClient({
  signer: eoaWallet,
  rpcUrl: "https://rpc-test.qday.info",   // QDay Aevum testnet
  bundlerUrl: "https://bundler.qday.io",  // mainnet hostname; Aevum bundler endpoint will be published in the docs
});

// Send a gasless transaction (Paymaster covers gas)
const txHash = await client.sendTransaction({
  to: contractAddress,
  data: encodedCallData,
});
```

## Add the network programmatically (EIP-3085)

```ts title="wallet_addEthereumChain — QDay Aevum testnet"
await window.ethereum.request({
  method: 'wallet_addEthereumChain',
  params: [{
    chainId: '0xABE5',            // 44005
    chainName: 'QDay Aevum',
    rpcUrls: ['https://rpc-test.qday.info'],
    blockExplorerUrls: ['https://explorer-test.qday.info'],
    nativeCurrency: { name: 'tQDAY', symbol: 'tQDAY', decimals: 18 },
  }],
});
```

QDay mainnet (chain ID `44002`) will use the same shape; its RPC and explorer URLs will be published at launch on [Chain parameters](/Knowledge/reference/chains).
