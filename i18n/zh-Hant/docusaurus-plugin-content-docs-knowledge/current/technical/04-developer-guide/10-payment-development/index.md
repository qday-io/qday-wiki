---
title: 支付開發
draft: false
---

# 支付開發

:::note[將於 2027 年第一季推出]
QDay SDK（`@qday-io/sdk`）與 CLI（`@qday-io/cli`）將於 2027 年第一季推出，目前尚未在 npm 上發佈。本頁的程式碼展示的是計劃中的 API。
:::

## 支付 SDK {/* #payment-sdk */}

以下範例以 QDay Aevum 測試網（鏈 ID `44005`）為目標，並使用 **tUSD8**——USD8 穩定幣的測試網版本（小數位：6）。在 QDay 主網上請使用 USD8，其地址將於上線時公佈。

```typescript
import { QDAYPayments } from "@qday-io/sdk/payments";

// tUSD8 on QDay Aevum testnet (6 decimals)
const TUSD8_ADDRESS = "0x456569838f1d43009A91ebA4263147Afd7233483";

const payments = new QDAYPayments({
  rpcUrl: "https://rpc-test.qday.info",
  signer: myWallet,
});
```

:::info[手續費代幣]
一般網絡 Gas 以 QDAY 支付（測試網上為 tQDAY）。個別應用程式可能以其他代幣收取手續費——例如 Agent Payment 應用（將於 2027 年第一季隨 QDay 主網推出）將以 USD8 收取手續費。
:::

## 發票（Invoice） {/* #invoice */}

```typescript
// Create an invoice (merchant side)
const invoice = await payments.createInvoice({
  amount: parseUnits("9.99", 6), // 9.99 tUSD8
  currency: TUSD8_ADDRESS,
  memo: "Pro subscription - August 2026",
  expiresIn: 3600, // 1 hour
});

console.log("Pay at:", invoice.paymentUrl);
console.log("Invoice ID:", invoice.id);
```

## 結帳（Checkout） {/* #checkout */}

```typescript
// Pay an invoice (payer side)
const receipt = await payments.payInvoice(invoice.id);
await receipt.wait(); // wait for L2 soft confirmation
```

## 訂閱（Subscription） {/* #subscription */}

```typescript
// Create a recurring payment authorization
const subscription = await payments.createSubscription({
  merchant: MERCHANT_ADDRESS,
  amount: parseUnits("9.99", 6),
  period: "monthly",
  currency: TUSD8_ADDRESS,
});
// Under the hood this issues a Session Key to the merchant's payment contract
```

## 串流支付（Streaming Payment） {/* #streaming-payment */}

```typescript
// Stream 1 tUSD8 per hour to a content provider
const stream = await payments.createStream({
  recipient: PROVIDER_ADDRESS,
  flowRate: parseUnits("1", 6) / BigInt(3600), // per second
  deposit: parseUnits("24", 6), // 24h deposit
  currency: TUSD8_ADDRESS,
});
```

## 代理支付（Agent Payment） {/* #agent-payment */}

代理可透過支付代理（Payment Agent）自主為服務付款（請參閱[AI 代理開發](/Knowledge/technical/developer-guide/ai-agent-development)）。支付合約會在釋放資金前驗證會話密鑰（Session Key）。在 Agent Payment 應用中，手續費以 USD8（測試網上為 tUSD8）支付，而非 QDAY。

## Webhook {/* #webhook */}

註冊 Webhook 以即時接收支付通知：

```typescript
await payments.registerWebhook({
  url: "https://your-server.com/qday-webhook",
  events: ["invoice.paid", "subscription.renewed", "stream.stopped"],
  secret: process.env.WEBHOOK_SECRET,
});
```

Webhook 的負載（payload）會以你的 Webhook 密鑰透過 HMAC-SHA256 簽署。處理之前請先驗證簽名：

```typescript
import { verifyWebhookSignature } from "@qday-io/sdk/payments";

app.post("/qday-webhook", (req, res) => {
  const isValid = verifyWebhookSignature(req.body, req.headers["x-qday-signature"], secret);
  if (!isValid) return res.status(401).end();
  // process event...
});
```
