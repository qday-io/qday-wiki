---
title: Wallet Integration
draft: false
---

# Wallet Integration

QDAY2 supports two wallet types:

**EOA Wallets** — Standard Ethereum externally-owned accounts (ECDSA). MetaMask, Frame, and any wallet that supports custom EVM chains work out of the box. Connect by adding the network from [Network Configuration](/Knowledge/technical/developer-guide/network-configuration).

**Smart Account Wallets** — ERC-4337 Smart Accounts provide gasless transactions, batched calls, and session key delegation. Smart accounts are deployed on first use; the user's EOA acts as the owner/signer.

```typescript
import { createSmartAccountClient } from "@qday-io/sdk/aa";

const client = await createSmartAccountClient({
  signer: eoaWallet,
  rpcUrl: "https://rpc.qday.io",
  bundlerUrl: "https://bundler.qday.io",
});

// Send a gasless transaction (Paymaster covers gas)
const txHash = await client.sendTransaction({
  to: contractAddress,
  data: encodedCallData,
});
```

## Add the network programmatically (EIP-3085)

```ts title="wallet_addEthereumChain — Origin mainnet"
await window.ethereum.request({
  method: 'wallet_addEthereumChain',
  params: [{
    chainId: '0xABE1',            // 44001
    chainName: 'QDay',
    rpcUrls: ['https://rpc.qday.io'],
    blockExplorerUrls: ['https://explorer.qday.io'],
    nativeCurrency: { name: 'QDAY', symbol: 'QDAY', decimals: 18 },
  }],
});
```

Aevum testnet (`44005` / `0xABE5`) and Origin testnet (`44003` / `0xABE3`) use the same shape with the RPCs on [Chain parameters](/Knowledge/reference/chains).
