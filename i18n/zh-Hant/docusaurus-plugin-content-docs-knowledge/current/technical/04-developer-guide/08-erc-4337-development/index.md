---
title: ERC-4337 開發
draft: false
---

# ERC-4337 開發

:::note[計劃中——2027 年第一季]
ERC-4337 支援（EntryPoint、Alto bundler、Paymaster、會話密鑰（Session Key））及 QDay SDK（`@qday-io/sdk`）/ CLI（`@qday-io/cli`）將於 2027 年第一季隨 QDay 主網推出，目前尚未上線。EntryPoint 與 bundler 尚未部署於 QDay Aevum，SDK 亦尚未在 npm 上發佈。本頁的程式碼展示的是計劃中的 API。
:::

## EntryPoint {/* #entrypoint */}

`EntryPoint` 合約是 ERC-4337 系統的核心樞紐。所有 UserOperation 都會經由它處理。

```solidity
import "@account-abstraction/contracts/interfaces/IEntryPoint.sol";

IEntryPoint constant ENTRY_POINT = IEntryPoint(ENTRY_POINT_ADDRESS);
```

EntryPoint 地址將於上線時公佈。

## Bundler {/* #bundler */}

QDay 將運行 [Alto](https://github.com/pimlicolabs/alto) bundler。上線後，你將把 UserOperation 傳送至 bundler 的 RPC 端點（`https://bundler.qday.io` 將於上線時啟用）：

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

## Paymaster {/* #paymaster */}

部署 Paymaster 為你的用戶代付 Gas。最簡單的模式是 `VerifyingPaymaster`，由它為符合資格的 UserOperation 簽核：

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

## 會話密鑰（Session Key） {/* #session-key */}

透過會話密鑰模組，授予 AI 代理或 dApp 有限的簽署權限：

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

## 智能帳戶 SDK {/* #smart-account-sdk */}

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
