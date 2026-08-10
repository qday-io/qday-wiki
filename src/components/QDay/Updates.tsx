import React from 'react';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';

// "Latest updates" strip — the announcements block mature chain docs use to
// surface launches, upgrades, and changes. Edit UPDATES to publish a new item.

type Tag = 'launch' | 'upgrade' | 'guide' | 'notice';

const TAG_STYLE: Record<Tag, {bg: string; fg: string; label: string}> = {
  launch:  {bg: 'rgba(79,93,255,.14)',  fg: 'var(--ifm-color-primary)', label: 'Launch'},
  upgrade: {bg: 'rgba(31,157,77,.14)',  fg: '#1f9d4d',                  label: 'Upgrade'},
  guide:   {bg: 'rgba(182,115,26,.16)', fg: '#b6731a',                  label: 'Guide'},
  notice:  {bg: 'var(--ifm-color-emphasis-200)', fg: 'var(--ifm-color-emphasis-700)', label: 'Notice'},
};

type Item = {tag: Tag; date: string; title: string; to: string};

const UPDATES: Item[] = [
  {
    tag: 'launch',
    date: '2026-08',
    title: translate({id: 'updates.qday2', message: 'QDay2 testnet is live — add it to your wallet'}),
    to: '/docs/start/add-network',
  },
  {
    tag: 'guide',
    date: '2026-08',
    title: translate({id: 'updates.migration', message: 'How to migrate your assets from QDay to QDay2'}),
    to: '/docs/migration/overview',
  },
  {
    tag: 'guide',
    date: '2026-08',
    title: translate({id: 'updates.dev', message: 'Build a dApp on QDay — wagmi / viem quickstart'}),
    to: '/docs/dev/build',
  },
];

export default function Updates() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 760, margin: '0 auto'}}>
      {UPDATES.map((u) => {
        const t = TAG_STYLE[u.tag];
        return (
          <Link key={u.title} to={u.to} style={{
            display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', color: 'inherit',
            padding: '14px 18px', borderRadius: 12,
            border: '1px solid var(--ifm-color-emphasis-200)',
            background: 'var(--ifm-background-surface-color)',
            transition: 'border-color .15s',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--ifm-color-primary)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-200)'; }}
          >
            <span style={{
              fontSize: 11.5, fontWeight: 700, padding: '3px 10px', borderRadius: 999,
              background: t.bg, color: t.fg, textTransform: 'uppercase', letterSpacing: '.04em',
              whiteSpace: 'nowrap',
            }}>{t.label}</span>
            <span style={{flex: 1, fontWeight: 550}}>{u.title}</span>
            <span style={{
              fontSize: 12.5, color: 'var(--ifm-color-emphasis-500)',
              fontFamily: 'var(--ifm-font-family-monospace)', whiteSpace: 'nowrap',
            }}>{u.date}</span>
          </Link>
        );
      })}
    </div>
  );
}
