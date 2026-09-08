---
title: ERC-4337 開發
draft: false
---

# ERC-4337 開發

## EntryPoint

`EntryPoint` 合約是 ERC-4337 系統的核心樞紐。所有 UserOperation 都會經由它流轉。

```solidity
import "@account-abstraction/contracts/interfaces/IEntryPoint.sol";

IEntryPoint constant ENTRY_POINT = IEntryPoint(ENTRY_POINT_ADDRESS);
```

請使用 [參考資料](/Knowledge/technical/reference) 頁面上的 EntryPoint 地址。

## Bundler

QDAY2 運行 [Alto](https://github.com/pimlicolabs/alto) bundler。將 UserOperation 傳送至 bundler 的 RPC 端點：

```typescript
import { createBundlerClient } from "permissionless";
import { http } from "viem";

const bundler = createBundlerClient({
  transport: http("https://bundler.qday.io"),
});

const userOpHash = await bundler.sendUserOperation({
  userOperation,
  entryPoint: ENTRY_POINT_ADDRESS,
});
```

## Paymaster

部署 Paymaster 為你的使用者代付 Gas。最簡單的模式是 `VerifyingPaymaster`，由它為符合資格的 UserOperation 簽核：

```solidity
import "@account-abstraction/contracts/core/BasePaymaster.sol";

contract QDAYPaymaster is BasePaymaster {
    function _validatePaymasterUserOp(
        UserOperation calldata userOp,
        bytes32 userOpHash,
        uint256 maxCost
    ) internal override returns (bytes memory context, uint256 validationData) {
        // Your sponsorship logic here
        return ("", _packValidationData(false, 0, 0));
    }
}
```

## Session Key

透過 Session Key 模組，授予 AI 代理或 dApp 有限的簽署權限：

```typescript
import { createSessionKey } from "@qday-io/sdk/aa";

const sessionKey = await createSessionKey({
  smartAccount: mySmartAccount,
  permissions: {
    target: DEFI_CONTRACT,
    selector: "0xa9059cbb", // ERC-20 transfer
    valueLimit: parseEther("10"),
    validUntil: Math.floor(Date.now() / 1000) + 86400, // 24h
  },
});
```

## Smart Account SDK

```typescript
import { QDAYSmartAccount } from "@qday-io/sdk/aa";

const account = new QDAYSmartAccount({
  owner: mySigner,
  bundlerUrl: "https://bundler.qday.io",
  paymasterUrl: "https://paymaster.qday.io",
});

// Batch multiple calls into one UserOperation
const txHash = await account.sendBatch([
  { to: tokenA, data: approveCalldata },
  { to: router, data: swapCalldata },
]);
```
