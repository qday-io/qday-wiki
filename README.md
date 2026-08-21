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

Auto-deploys to **Cloudflare Pages** (project `qday-community`) on push to `main` via
`.github/workflows/deploy.yml`. Requires repo secrets `CLOUDFLARE_API_TOKEN` and
`CLOUDFLARE_ACCOUNT_ID`. `ci.yml` build-checks every PR.

## Interactive widgets

`src/components/QDay/` holds the live web3 components used in docs: AddNetworkButton (one-click add
network), FaucetWidget (claim testnet QDAY), BalancePanel (live balances), LiveChainStatus (live
block height). They call `window.ethereum` directly for demo simplicity; production hardening reuses
the portal's wagmi/viem setup for multi-wallet support.
