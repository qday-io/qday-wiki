---
title: ERC-4337 Development
draft: false
---

# ERC-4337 Development

:::note[Live on Aevum testnet — mainnet Q1 2027]
ERC-4337 smart accounts — agent wallets and session keys (a smart-contract policy engine with spending caps and time locks) — and the stablecoin paymaster are live on the QDay Aevum testnet (Phase 1.5 upgrade, 2026 Q3); mainnet deployment follows in Q1 2027. Aevum contract addresses and endpoints will be published in the docs. The QDay SDK (`@qday-io/sdk`) and CLI (`@qday-io/cli`) launch in Q1 2027 and are not yet published on npm; SDK code on this page shows the planned API.
:::

## EntryPoint

The `EntryPoint` contract is the hub of the ERC-4337 system. All UserOperations flow through it.

```solidity
import "@account-abstraction/contracts/interfaces/IEntryPoint.sol";

IEntryPoint constant ENTRY_POINT = IEntryPoint(ENTRY_POINT_ADDRESS);
```

The EntryPoint address will be published in the docs.

## Bundler

QDay runs the [Alto](https://github.com/pimlicolabs/alto) bundler. Send UserOperations to the bundler's RPC endpoint (`https://bundler.qday.io` is the mainnet hostname, live at mainnet launch; the Aevum testnet endpoint will be published in the docs):

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

QDay's stablecoin paymaster (live on the Aevum testnet) provides gas abstraction, so users and AI agents can pay transaction fees in the native stablecoin (USD8) instead of holding $QDAY. You can also deploy your own Paymaster to sponsor gas for your users. The simplest pattern is a `VerifyingPaymaster` that signs off on eligible UserOperations:

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

Grant an AI agent or dApp a limited signing authority via a Session Key module:

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
