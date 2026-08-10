import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'QDay Wiki',
  tagline: 'QDay2 — the quantum-safe Layer2',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: 'https://community.qday.io',
  baseUrl: '/',
  organizationName: 'qday-io',
  projectName: 'qday-wiki',

  onBrokenLinks: 'warn',

  markdown: { mermaid: true }, // enable ```mermaid diagrams

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hant'],
    localeConfigs: {
      en: { label: 'English' },
      'zh-Hant': { label: '繁體中文' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs', // docs under /docs; / is a branded landing
          editUrl: 'https://github.com/qday-io/qday-wiki/tree/main/',
        },
        blog: false, // pure wiki; enable later for announcements
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],

  // Local, offline search — no Algolia / no third-party service, index built at
  // build time. Comparable to MkDocs Material's built-in search.
  themes: [
    '@docusaurus/theme-mermaid',
    ['@easyops-cn/docusaurus-search-local', { hashed: true, indexBlog: false }],
  ],

  themeConfig: {
    colorMode: { respectPrefersColorScheme: true },
    navbar: {
      title: '',
      logo: {
        alt: 'QDay',
        src: 'img/logo-light.svg',   // light mode: white logo
        srcDark: 'img/logo.svg',      // dark mode
      },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docs' },
        {
          label: 'Mainnet', position: 'right',
          items: [
            { label: 'Explorer', href: 'https://explorer.qday.io' },
            { label: 'Portal', href: 'https://portal.qday.io' },
            { label: 'Swap', href: 'https://portal.qday.io/en/qday-swap' },
            { label: 'Staking', href: 'https://portal.qday.io/en/staking' },
          ],
        },
        {
          label: 'Testnet', position: 'right',
          items: [
            { label: 'Explorer', href: 'https://explorer.qday.info' },
            { label: 'Portal', href: 'https://portal.qday.info' },
            { label: 'Bridge', href: 'https://portal.qday.info/en/bridge' },
            { label: 'Faucet', href: 'https://fi.qday.info/en/dapps/faucet' },
          ],
        },
        { href: 'https://discord.gg/Rrb33mC3Kc', label: 'Discord', position: 'right' },
        { href: 'https://github.com/qday-io', label: 'GitHub', position: 'right' },
        { type: 'localeDropdown', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Docs', items: [
          { label: 'Get Started', to: '/docs/start/add-network' },
          { label: 'Migration', to: '/docs/migration/overview' },
          { label: 'Chain params', to: '/docs/reference/chains' },
        ]},
        { title: 'Network', items: [
          { label: 'Portal', href: 'https://portal.qday.io' },
          { label: 'Explorer', href: 'https://explorer.qday.io' },
        ]},
        { title: 'More', items: [
          { label: 'Discord', href: 'https://discord.gg/Rrb33mC3Kc' },
          { label: 'GitHub', href: 'https://github.com/qday-io' },
        ]},
      ],
      copyright: `QDay · Abelian Foundation`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
