import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import AddNetworkButton from '@site/src/components/QDay/AddNetworkButton';
import ConnectWallet from '@site/src/components/QDay/ConnectWallet';
import LiveChainStatus from '@site/src/components/QDay/LiveChainStatus';
import NetworkStats from '@site/src/components/QDay/NetworkStats';
import QuickLinks from '@site/src/components/QDay/QuickLinks';
import Updates from '@site/src/components/QDay/Updates';
import Features from '@site/src/components/QDay/Features';
import styles from './index.module.css';

export default function Home(): ReactNode {
  const PATHS = [
    {
      icon: '⛓️',
      title: translate({id: 'home.card.user.title', message: 'I’m a user'}),
      body: translate({id: 'home.card.user.body', message: 'Add QDay2 to your wallet, swap, stake, and use dApps.'}),
      to: '/docs/start/add-network',
      cta: translate({id: 'home.card.user.cta', message: 'Get started'}),
    },
    {
      icon: '↔️',
      title: translate({id: 'home.card.migrate.title', message: 'I’m migrating'}),
      body: translate({id: 'home.card.migrate.body', message: 'Move USD8 / WABEL / WQDAY and native QDAY from QDay to QDay2.'}),
      to: '/docs/migration/overview',
      cta: translate({id: 'home.card.migrate.cta', message: 'Migration guide'}),
    },
    {
      icon: '⚡',
      title: translate({id: 'home.card.dev.title', message: 'I’m a developer'}),
      body: translate({id: 'home.card.dev.body', message: 'Chain params, RPC endpoints, contracts, and a dApp quickstart.'}),
      to: '/docs/reference/chains',
      cta: translate({id: 'home.card.dev.cta', message: 'Developer docs'}),
    },
  ];
  return (
    <Layout title="QDay Wiki" description="QDay2 — the quantum-safe Layer2. Guides for users and developers.">
      <header className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden />
        <div className={styles.heroInner}>
          <h1 className={styles.title}>
            <span className={styles.grad}><Translate id="home.brand">QDay Community</Translate></span>
            <br />
            <Translate id="home.title">Quantum-safe EVM Layer 2 network</Translate>
          </h1>
          <p className={styles.lede}>
            <Translate id="home.lede">
              The world's first quantum-safe Layer 2 network compatible with the Ethereum Virtual
              Machine, built on the innovative Abelian blockchain.
            </Translate>
          </p>
          <div className={styles.heroActions}>
            <AddNetworkButton network="qday2" />
            <ConnectWallet />
            <Link className={styles.ghostBtn} to="/docs/intro">
              <Translate id="home.browseDocs">Browse the docs →</Translate>
            </Link>
          </div>
          <div className={styles.liveRow}>
            <LiveChainStatus network="qday" />
            <LiveChainStatus network="qday2" />
          </div>
        </div>
      </header>

      <main>
        {/* live network stats */}
        <section className={styles.section}>
          <NetworkStats />
        </section>

        {/* audience paths */}
        <section className={styles.paths}>
          {PATHS.map((p) => (
            <Link key={p.title} to={p.to} className={styles.card}>
              <span className={styles.cardIcon}>{p.icon}</span>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardBody}>{p.body}</p>
              <span className={styles.cardCta}>{p.cta} →</span>
            </Link>
          ))}
        </section>

        {/* feature grid */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Translate id="home.features">Why QDay</Translate>
          </h2>
          <Features />
        </section>

        {/* latest updates */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Translate id="home.updates">Latest updates</Translate>
          </h2>
          <Updates />
        </section>

        {/* ecosystem quick links */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Translate id="home.ecosystem">Explore the ecosystem</Translate>
          </h2>
          <QuickLinks />
        </section>
      </main>
    </Layout>
  );
}
