import React, { useState } from 'react';
import ConnectButtons from './ConnectButtons';

// Self-contained connect widget for the homepage hero: shows the two connect
// options ("Connect Wallet" + "Abelian Wallet Pro"); once connected, shows the
// address with a Disconnect reset.

export default function ConnectWallet() {
  const [addr, setAddr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  if (addr) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '9px 14px', borderRadius: 8, fontSize: 14.5, fontWeight: 600,
          background: 'rgba(31,157,77,.14)', color: '#1f9d4d',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#1f9d4d' }} />
          Connected <code style={{ color: 'inherit' }}>{addr.slice(0, 6)}…{addr.slice(-4)}</code>
        </span>
        <button onClick={() => { setAddr(null); setErr(''); }} style={{
          background: 'transparent', color: 'var(--ifm-color-emphasis-700)',
          border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8,
          padding: '9px 14px', fontWeight: 600, fontSize: 14, cursor: 'pointer',
        }}>
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div>
      <ConnectButtons
        onAccount={(a) => { setAddr(a); setErr(''); }}
        onError={setErr}
        busy={busy}
        setBusy={setBusy}
        showInjected={false}
      />
      {err && <p style={{ marginTop: 8, marginBottom: 0, fontSize: 13.5, color: 'var(--ifm-color-danger)' }}>{err}</p>}
    </div>
  );
}
