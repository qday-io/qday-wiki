---
title: 錢包整合
draft: false
---

# 錢包整合

QDAY2 支援兩種錢包類型：

**EOA 錢包** — 標準的 Ethereum 外部擁有帳戶（ECDSA）。MetaMask、Frame 以及任何支援自訂 EVM 鏈的錢包皆可直接使用。請依照[網路設定](/Knowledge/technical/developer-guide/network-configuration)新增網路以進行連接。

**智慧帳戶錢包** — ERC-4337 智慧帳戶提供免 Gas 交易、批次呼叫與 Session Key 委託。智慧帳戶會在首次使用時部署；使用者的 EOA 作為擁有者／簽章者。

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

## 以程式方式新增網路（EIP-3085）

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

Aevum 測試網（`44005` / `0xABE5`）與 Origin 測試網（`44003` / `0xABE3`）使用相同的格式，RPC 請參閱[鏈參數](/Knowledge/reference/chains)。
