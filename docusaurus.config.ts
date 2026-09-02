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
        // Default docs instance = User Guide, served at /guide.
        docs: {
          path: 'guide',
          routeBasePath: 'guide',
          sidebarPath: './sidebars-guide.ts',
          editUrl: 'https://github.com/qday-io/qday-wiki/tree/main/',
        },
        blog: false, // pure wiki; enable later for announcements
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],

  // Second docs instance = Technical / Knowledge, served at /Knowledge.
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'knowledge',
        path: 'knowledge',
        routeBasePath: 'Knowledge',
        sidebarPath: './sidebars-knowledge.ts',
        editUrl: 'https://github.com/qday-io/qday-wiki/tree/main/',
      },
    ],
    // Keep old /docs/* URLs working after the split into /guide + /Knowledge.
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects(existingPath: string) {
          // One from-path only: `/foo` and `/foo/` both write foo/index.html
          // and the plugin errors with EEXIST if both are returned.
          const path = existingPath.replace(/\/$/, '') || '/';
          const redirects: string[] = [];
          const userGuidePages = [
            'metamask',
            'abelian-mobile-wallet',
            'swap',
            'qday-staking',
            'abel-staking',
            'abelian-bridge-v3',
          ];
          for (const page of userGuidePages) {
            if (path === `/guide/handbook/user-guide/${page}`) {
              redirects.push(
                `/guide/handbook/${page}`,
                `/docs/guide/${page}`,
              );
            }
          }
          if (path.startsWith('/guide/handbook')) {
            redirects.push(path.replace('/guide/handbook', '/docs/guide'));
          } else if (path.startsWith('/guide/')) {
            redirects.push(path.replace('/guide/', '/docs/'));
          } else if (path.startsWith('/Knowledge/')) {
            redirects.push(path.replace('/Knowledge/', '/docs/'));
          }
          if (path === '/Knowledge/technical/developer-guide/getting-started') {
            redirects.push(
              '/Knowledge/dev',
              '/Knowledge/technical/developer-guide',
            );
          } else if (path.startsWith('/Knowledge/technical/developer-guide/')) {
            redirects.push(
              path.replace(
                '/Knowledge/technical/developer-guide',
                '/Knowledge/dev',
              ),
            );
          }
          return redirects.length ? [...new Set(redirects)] : undefined;
        },
      },
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
    // Dismissible top banner for docs-status notices. Bump `id` to
    // re-show it to users who dismissed a previous message.
    announcementBar: {
      id: 'wip-2026-08',
      content:
        'Documentation revision underway: please report issues on <a target="_blank" rel="noopener" href="https://discord.gg/Rrb33mC3Kc">Discord</a> or via <a target="_blank" rel="noopener" href="https://github.com/qday-io/qday-wiki/issues">GitHub</a>.',
      backgroundColor: '#3e2f00',
      textColor: '#f5d76e',
      isCloseable: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'QDay',
        src: 'img/logo-light.svg',   // light mode: white logo
        srcDark: 'img/logo.svg',      // dark mode
      },
      items: [
        {
          type: 'dropdown', label: 'Docs', position: 'left',
          items: [
            { type: 'docSidebar', sidebarId: 'guideSidebar', label: 'User Guide' },
            { type: 'docSidebar', sidebarId: 'knowledgeSidebar', docsPluginId: 'knowledge', label: 'Technical' },
          ],
        },
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
        // Community icon buttons (GitHub / Discord / X / LinkedIn), styled in custom.css.
        {
          href: 'https://github.com/qday-io',
          position: 'right',
          className: 'header-icon-link header-github-link',
          'aria-label': 'GitHub',
          title: 'GitHub',
        },
        {
          href: 'https://discord.gg/Rrb33mC3Kc',
          position: 'right',
          className: 'header-icon-link header-discord-link',
          'aria-label': 'Discord',
          title: 'Discord',
        },
        {
          href: 'https://x.com/QDayOfficial',
          position: 'right',
          className: 'header-icon-link header-x-link',
          'aria-label': 'X',
          title: 'X (@QDayOfficial)',
        },
        {
          href: 'https://www.linkedin.com/company/qday-network/',
          position: 'right',
          className: 'header-icon-link header-linkedin-link',
          'aria-label': 'LinkedIn',
          title: 'LinkedIn',
        },
        { type: 'localeDropdown', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Docs', items: [
          { label: 'Get Started', to: '/guide/start/add-network' },
          { label: 'Migration', to: '/Knowledge/migration/overview' },
          { label: 'Chain params', to: '/Knowledge/reference/chains' },
        ]},
        { title: 'Network', items: [
          { label: 'Portal', href: 'https://portal.qday.io' },
          { label: 'Explorer', href: 'https://explorer.qday.io' },
        ]},
        { title: 'Community', items: [
          { label: 'X', href: 'https://x.com/QDayOfficial' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/company/qday-network/' },
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
