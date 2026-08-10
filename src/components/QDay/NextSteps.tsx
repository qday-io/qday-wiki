import React from 'react';
import Link from '@docusaurus/Link';

// "What's next" card row for the bottom of guide pages — the reading-flow nudge
// mature docs use so a page never dead-ends.

type Step = { title: string; desc?: string; to: string };

export default function NextSteps({ steps }: { steps: Step[] }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 12, marginTop: '2rem',
    }}>
      {steps.map((s) => (
        <Link key={s.to} to={s.to} style={{
          display: 'block', padding: '16px 18px', borderRadius: 12, textDecoration: 'none',
          color: 'inherit', border: '1px solid var(--ifm-color-emphasis-200)',
          background: 'var(--ifm-background-surface-color)',
          transition: 'border-color .15s, transform .15s',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--ifm-color-primary)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-200)'; e.currentTarget.style.transform = 'none'; }}
        >
          <span style={{ display: 'block', fontWeight: 650, color: 'var(--ifm-color-primary)' }}>{s.title} →</span>
          {s.desc && <span style={{ display: 'block', fontSize: 13.5, color: 'var(--ifm-color-emphasis-600)', marginTop: 4 }}>{s.desc}</span>}
        </Link>
      ))}
    </div>
  );
}
