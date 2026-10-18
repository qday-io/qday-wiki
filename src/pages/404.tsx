import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';

// Branded 404 — friendlier than the default, routes users back to useful places.
export default function NotFound(): React.ReactElement {
  return (
    <Layout title={translate({id: 'notFound.metaTitle', message: 'Page not found'})}>
      <main style={{ maxWidth: 640, margin: '0 auto', padding: '6rem 1.5rem', textAlign: 'center' }}>
        <div style={{
          fontFamily: 'var(--ifm-font-family-monospace)', fontSize: 13,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--ifm-color-primary)', marginBottom: '1rem',
        }}>
          <Translate id="notFound.eyebrow">404 · Page not found</Translate>
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
          <Translate id="notFound.title">This page took a wrong turn.</Translate>
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--ifm-color-emphasis-700)', marginBottom: '2rem' }}>
          <Translate id="notFound.body">The page you're looking for doesn't exist or has moved. Here's where to go next:</Translate>
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="button button--primary button--lg" to="/"><Translate id="notFound.home">Home</Translate></Link>
          <Link className="button button--secondary button--lg" to="/guide/start/add-network"><Translate id="notFound.getStarted">Get Started</Translate></Link>
          <Link className="button button--secondary button--lg" to="/Knowledge/migration/overview"><Translate id="notFound.migration">Migration</Translate></Link>
        </div>
      </main>
    </Layout>
  );
}
