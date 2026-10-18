---
title: SDK 參考資料
draft: false
---

# SDK 參考資料

:::note[將於 2027 年第一季推出]
QDay SDK（`@qday-io/sdk`）與 CLI（`@qday-io/cli`）將於 2027 年第一季推出，目前尚未在 npm 上發佈。本頁的程式碼展示的是計劃中的 API。
:::

| 套件 | 語言 | 用途 |
|---------|----------|-----|
| `@qday-io/sdk` | TypeScript / JavaScript | 智能帳戶、bundler、支付、代理 |
| `@qday-io/sdk/payments` | TypeScript | 發票、結帳、訂閱、串流支付、Webhook |
| `@qday-io/sdk/aa` | TypeScript | ERC-4337 帳戶與會話密鑰（Session Key） |
| `@qday-io/sdk/agent` | TypeScript | 鏈上代理（MCP + intent registry） |
| `github.com/qday-io/qday-go-sdk` | Go | 供 Go 服務使用的相同介面 |
| `qday-sdk`（crates.io） | Rust | 供 Rust 使用的相同介面 |
| `qday-sdk`（PyPI） | Python | 供 Python 使用的相同介面 |
| `@qday-io/cli` | CLI | `npm install -g @qday-io/cli`（2027 年第一季推出）——[CLI 參考資料](/Knowledge/technical/reference/cli-reference) |

```bash
# Available Q1 2027 — not yet published on npm
npm install @qday-io/sdk
```

範例：[SDK 與程式碼範例](/Knowledge/technical/developer-guide/sdk-code-examples)。儲存庫：[github.com/qday-io](https://github.com/qday-io)。
