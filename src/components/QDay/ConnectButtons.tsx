import React from 'react';
import { connectInjected, connectAbelian } from './wallet';

// Two connect options shared by the interactive widgets:
//   • "Connect Wallet"      → any injected EIP-1193 wallet (MetaMask, OKX, Rabby…)
//   • "Abelian Wallet Pro"  → WalletConnect v2 (QR / abelian:// deep link)
// onAccount receives the connected address; the parent handles the rest.

export default function ConnectButtons({
  onAccount,
  onError,
  busy,
  setBusy,
  showInjected = true,
}: {
  onAccount: (addr: string) => void;
  onError: (msg: string) => void;
  busy: boolean;
  setBusy: (b: boolean) => void;
  // Hide the generic "Connect Wallet" button where an injected-wallet action
  // already exists nearby (e.g. the homepage "Add QDay2 to Wallet" button).
  showInjected?: boolean;
}) {
  async function run(fn: () => Promise<string | null>, notInstalled: string) {
    try {
      setBusy(true);
      onError('');
      const account = await fn();
      if (!account) throw new Error(notInstalled);
      onAccount(account);
    } catch (e: any) {
      onError(e?.shortMessage ?? e?.message ?? 'Wallet connection failed.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      {showInjected && (
        <button
          onClick={() => run(connectInjected, 'No wallet found — install a wallet extension.')}
          disabled={busy}
          style={{
            background: 'var(--ifm-color-primary)', color: '#fff', border: 'none', borderRadius: 8,
            padding: '9px 16px', fontWeight: 600, fontSize: 14.5,
            cursor: busy ? 'default' : 'pointer', opacity: busy ? 0.6 : 1,
          }}
        >
          {busy ? 'Check your wallet…' : 'Connect Wallet'}
        </button>
      )}
      <button
        onClick={() => run(connectAbelian, 'Abelian Wallet Pro connection cancelled.')}
        disabled={busy}
        style={{
          background: 'transparent', color: 'var(--ifm-color-primary)',
          border: '1px solid var(--ifm-color-primary)', borderRadius: 8,
          padding: '9px 16px', fontWeight: 600, fontSize: 14.5,
          cursor: busy ? 'default' : 'pointer', opacity: busy ? 0.6 : 1,
        }}
      >
        Abelian Wallet Pro
      </button>
    </div>
  );
}
