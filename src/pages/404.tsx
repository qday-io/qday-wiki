import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

// Branded 404 — friendlier than the default, routes users back to useful places.
export default function NotFound(): React.ReactElement {
  return (
    <Layout title="Page not found">
      <main style={{ maxWidth: 640, margin: '0 auto', padding: '6rem 1.5rem', textAlign: 'center' }}>
        <div style={{
          fontFamily: 'var(--ifm-font-family-monospace)', fontSize: 13,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--ifm-color-primary)', marginBottom: '1rem',
        }}>
          404 · Page not found
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
          This page took a wrong turn.
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--ifm-color-emphasis-700)', marginBottom: '2rem' }}>
          The page you're looking for doesn't exist or has moved. Here's where to go next:
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="button button--primary button--lg" to="/">Home</Link>
          <Link className="button button--secondary button--lg" to="/guide/start/add-network">Get Started</Link>
          <Link className="button button--secondary button--lg" to="/Knowledge/migration/overview">Migration</Link>
        </div>
      </main>
    </Layout>
  );
}
