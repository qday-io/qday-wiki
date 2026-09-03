# QDay Community Wiki

The QDay ecosystem's community wiki — guides for users and developers, covering QDay and the QDay2
launch. Built with **Docusaurus** (migrated from VitePress) so pages can embed live, interactive
web3 widgets (add-network, faucet, balances) alongside normal Markdown.

## Develop

```bash
npm install
npm start          # dev server at http://localhost:3000
npm run build      # static build -> ./build
npm run serve      # preview the production build
```

## Structure

```
docs/
  intro.md               landing intro
  start/                 get started (add network, faucet - interactive)
  guide/                 user guides (metamask, staking, swap, bridge, wallet, whitepaper)
  migration/             QDay -> QDay2 migration (interactive)
  reference/             chain params, token list, contract addresses
src/
  pages/index.tsx        branded landing hero
  components/QDay/        interactive widgets (AddNetworkButton, FaucetWidget, BalancePanel, LiveChainStatus)
static/                  images + assets (served at site root)
```

Most pages are plain **Markdown** (`.md`) - same as before. Only pages that embed an interactive
widget use **`.mdx`** (Markdown + a React component import). Search is local/offline (no Algolia).

## Content authoring

How to add pages, nested sidebar categories, `_category_.json`, and English / 繁體中文: **[AUTHORING.md](./AUTHORING.md)**. PM / Ops GitHub-web editing: **[CONTENT-GUIDE.md](./CONTENT-GUIDE.md)**.

- Add a page: drop a `.md` file under `docs/<section>/` - it appears in the sidebar automatically.
- Add an interactive widget: name the file `.mdx`, `import` the component, drop `<Component />` in.
- Images: put them under `static/` and reference with an absolute path (`/qday/...`).

## Deploy

Hosted on **Cloudflare Pages** (project `qday-community`). GitHub Actions builds the
Docusaurus site and publishes it via `cloudflare/pages-action`
(`.github/workflows/deploy.yml`); `ci.yml` build-checks every PR and push to `main`.

> The Docker / GHCR image under `deploy/` is a temporary bridge and retires once
> Pages is the sole host. Prefer Pages.

### One-time setup (ops)

1. **Create the Pages project** — Cloudflare dashboard → Workers & Pages → Create →
   Pages → **Direct Upload**, name it exactly **`qday-community`** (must match
   `projectName` in `deploy.yml`).
2. **Create an API token** — My Profile → API Tokens → Create Token → template
   *Edit Cloudflare Workers*, or a custom token with **Account → Cloudflare Pages →
   Edit**. Copy it.
3. **Get the Account ID** — any account/domain overview page → Account ID.
4. **Add both as GitHub repo secrets** — Settings → Secrets and variables → Actions:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`

### Turn on automatic deploys

Once the secrets exist, uncomment the push trigger in
`.github/workflows/deploy.yml`:

```yaml
on:
  workflow_dispatch: {}
  push:
    branches: [main]
```

After that, **every push / merge to `main` builds and deploys automatically** — no
server, no Docker, no manual step, and it never goes stale.

### Deploy manually (before auto-deploy is on, or to re-publish)

GitHub → **Actions** → *Deploy to Cloudflare Pages* → **Run workflow** (branch
`main`). Uses `workflow_dispatch`; needs the two secrets above.

### Build settings (already wired — FYI)

`npm ci && npm run build` → output dir **`build`** → Node **20+** (CI uses 24).

### Custom domain + DNS

Pages project → **Custom domains** → add the wiki hostname (e.g. `community.qday.io`),
then point that hostname's DNS (CNAME) at the Pages project in Cloudflare DNS.

## Interactive widgets

`src/components/QDay/` holds the live web3 components used in docs: AddNetworkButton (one-click add
network), FaucetWidget (claim testnet QDAY), BalancePanel (live balances), LiveChainStatus (live
block height). They call `window.ethereum` directly for demo simplicity; production hardening reuses
the portal's wagmi/viem setup for multi-wallet support.
