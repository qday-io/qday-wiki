---
title: 錢包整合
draft: false
---

# 錢包整合

:::note[將於 2027 年第一季推出]
QDay SDK（`@qday-io/sdk`）與 CLI（`@qday-io/cli`）將於 2027 年第一季推出，目前尚未在 npm 上發佈。本頁的程式碼展示的是計劃中的 API。
:::

QDay Aevum 支援兩種錢包類型：

**EOA 錢包**——標準的以太坊外部擁有帳戶（ECDSA）。MetaMask、Frame 以及任何支援自訂 EVM 鏈的錢包皆可直接使用。請依照[網絡設定](/Knowledge/technical/developer-guide/network-configuration)新增網絡以進行連接。

**智能帳戶錢包** *（計劃中——將於 2027 年第一季隨 QDay 主網推出）*——ERC-4337 智能帳戶將提供免 Gas 交易、批次呼叫與會話密鑰（Session Key）委託。智能帳戶將在首次使用時部署；用戶的 EOA 作為擁有者／簽署者。

以下範例展示的是計劃中的 API。ERC-4337 EntryPoint 與 bundler（`bundler.qday.io`）將於 2027 年第一季隨 QDay 主網推出，目前尚未部署於 QDay Aevum 測試網，因此這段程式碼現時無法在 Aevum 上運行。

```typescript
// Planned — EntryPoint and bundler launch with QDay mainnet (Q1 2027); not deployed on Aevum.
import { createSmartAccountClient } from "@qday-io/sdk/aa";

const client = await createSmartAccountClient({
  signer: eoaWallet,
  rpcUrl: "https://rpc-test.qday.info",   // QDay Aevum testnet (no EntryPoint / bundler yet)
  bundlerUrl: "https://bundler.qday.io",  // live at QDay mainnet launch
});

// Send a gasless transaction (Paymaster covers gas)
const txHash = await client.sendTransaction({
  to: contractAddress,
  data: encodedCallData,
});
```

## 以程式方式新增網絡（EIP-3085） {/* #add-the-network-programmatically-eip-3085 */}

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

QDay 主網（鏈 ID `44002`）將使用相同的格式；其 RPC 與區塊瀏覽器網址將於上線時在[鏈參數](/Knowledge/reference/chains)公佈。
