---
sidebar_position: 3
title: Set up QPass
---

# Set up QPass

:::info[In development]
QPass is being built. The steps below describe the planned flow; screens, fees and CLI commands may change before launch.
:::

Setting up QPass takes four steps: create your wallet, create a QPass, connect your agent, and approve a spending session.

## 1. Create your wallet

Sign up in the **QDay PQ Wallet** with your email. The app creates your identity (DID) and your Main Wallet smart account. The fee for creating that first account is **sponsored by QDay**, so you don't need any tokens to get started.

Then top up some **USD8** into your Main Wallet. You need it to create a QPass.

## 2. Create a QPass

Open the **Agentic Payments** tab and tap **Create QPass**. The app shows the one-time creation fee and your USD8 balance before you confirm; if your balance can't cover the fee, the button stays disabled until you top up.

Creating a QPass creates its **spending wallet** — the smart account your agents pay from. Move USD8 into it to give your agents a budget.

## 3. Connect your agent

QPass works with AI agents that can run terminal commands, such as Claude Code or OpenAI Codex.

1. **Install the QDay Agent CLI.** In the wallet, go to **Agentic Payments → Start using your agents → Install** and copy the install command into your agent's terminal.
2. **Sign in.** The CLI signs you in with a one-time code sent to your email:

   ```bash
   qpass login init --email you@example.com --output json
   qpass login verify --login-id <LOGIN_ID> --code <CODE> --output json
   ```

   The code is 8 characters. Your sign-in stays valid on that machine for **24 hours**, or until you sign out. High-value approvals also ask for your device passkey (Touch ID, Face ID or a security key).
3. **Register the agent** under your QPass:

   ```bash
   qpass agent:register --qpassid=<YOUR_QPASS_ID> --type coding-assistant --output json
   ```

   The agent gets its own identity bound to your QPass. Always sign in first; an agent can only be registered under an authenticated owner.

:::note
If you close the agent's terminal, its context is lost. Install the CLI again in the new terminal, sign in, and register the agent again.
:::

## 4. Approve a spending session

Agents spend only inside a **spending session**. Sessions are created from the CLI, not in the app:

```bash
qpass agent:session create \
  --task-summary "Discover paid services and execute one approved API call" \
  --max-amount-per-tx 2 \
  --max-total-amount 10 \
  --ttl 24h \
  --assets USD8 \
  --payment-approach x402_http \
  --output json
```

| Flag | Meaning |
|---|---|
| `--task-summary` | What the agent will do, in plain words. |
| `--max-amount-per-tx` | Most the agent can spend in one payment. |
| `--max-total-amount` | Most the agent can spend in the whole session. |
| `--ttl` | How long the session lasts, e.g. `1h` or `24h`. |
| `--assets` | Which token(s) the session can spend. |
| `--payment-approach` | Payment protocol, e.g. `x402_http`. |

## Watch and revoke

In the wallet, **Agentic Payments** shows every active session — the agent, its limits and when it expires — plus recent activity such as approved sessions and placed orders. The **Agent Login Sessions** tab lists every signed-in agent terminal.

Tap **Revoke** to end a session or sign an agent out immediately. You can do the same from the CLI.
