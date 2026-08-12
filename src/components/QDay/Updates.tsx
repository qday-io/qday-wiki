import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import updatesData from '@site/data/updates.json';

// "Latest updates" strip. Announcements are edited by PMs in data/updates.json —
// no code change needed. This component just renders that file.

type Tag = 'launch' | 'upgrade' | 'guide' | 'notice';

const TAG_STYLE: Record<Tag, {bg: string; fg: string; label: string}> = {
  launch:  {bg: 'rgba(79,93,255,.14)',  fg: 'var(--ifm-color-primary)', label: 'Launch'},
  upgrade: {bg: 'rgba(31,157,77,.14)',  fg: '#1f9d4d',                  label: 'Upgrade'},
  guide:   {bg: 'rgba(182,115,26,.16)', fg: '#b6731a',                  label: 'Guide'},
  notice:  {bg: 'var(--ifm-color-emphasis-200)', fg: 'var(--ifm-color-emphasis-700)', label: 'Notice'},
};

type Item = {tag: string; date: string; title: string; title_zh?: string; to: string};

export default function Updates() {
  const {pathname} = useLocation();
  const isZh = pathname.startsWith('/zh-Hant');
  const items = (updatesData.items ?? []) as Item[];

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 760, margin: '0 auto'}}>
      {items.map((u, i) => {
        const t = TAG_STYLE[(u.tag as Tag)] ?? TAG_STYLE.notice;
        const title = isZh && u.title_zh ? u.title_zh : u.title;
        return (
          <Link key={i} to={u.to} style={{
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
            <span style={{flex: 1, fontWeight: 550}}>{title}</span>
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
