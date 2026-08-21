import React, { useState } from 'react';

// Interactive doc component: one-click "Add QDay2 to Wallet" via EIP-3085.
// This is the kind of live element MDX/Docusaurus enables inside docs — a plain
// Markdown site (MkDocs) can only show the params in a table.

type Net = { chainIdHex: string; chainName: string; rpc: string; explorer: string };

const NETWORKS: Record<string, Net> = {
  qday2: {
    chainIdHex: '0xABE5', // 44005
    chainName: 'QDay2',
    rpc: 'https://rpc-test.qday.info',
    explorer: 'https://explorer.qday.info',
  },
  qday: {
    chainIdHex: '0xABE3', // 44003
    chainName: 'QDay',
    rpc: 'https://rpc.qday.info',
    explorer: 'https://explorer.qday.io',
  },
};

export default function AddNetworkButton({ network = 'qday2' }: { network?: 'qday' | 'qday2' }) {
  const [state, setState] = useState<'idle' | 'busy' | 'ok' | 'err'>('idle');
  const [msg, setMsg] = useState('');
  const net = NETWORKS[network];

  async function add() {
    const eth = (globalThis as any).ethereum;
    if (!eth) {
      setState('err');
      setMsg('No wallet found — install a wallet extension first.');
      return;
    }
    setState('busy');
    try {
      await eth.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: net.chainIdHex,
          chainName: net.chainName,
          rpcUrls: [net.rpc],
          blockExplorerUrls: [net.explorer],
          nativeCurrency: { name: 'QDAY', symbol: 'QDAY', decimals: 18 },
        }],
      });
      setState('ok');
      setMsg(`${net.chainName} added to your wallet.`);
    } catch (e: any) {
      setState('err');
      setMsg(e?.message ?? 'Request rejected.');
    }
  }

  return (
    <div style={{ margin: '1rem 0' }}>
      <button
        onClick={add}
        disabled={state === 'busy'}
        style={{
          background: 'var(--ifm-color-primary)',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '10px 18px',
          fontWeight: 600,
          fontSize: 15,
          cursor: state === 'busy' ? 'default' : 'pointer',
          opacity: state === 'busy' ? 0.6 : 1,
        }}
      >
        {state === 'busy' ? 'Check your wallet…' : `Add ${net.chainName} to Wallet`}
      </button>
      {msg && (
        <p style={{ marginTop: 8, fontSize: 14, color: state === 'err' ? 'var(--ifm-color-danger)' : 'var(--ifm-color-success)' }}>
          {state === 'ok' ? '✓ ' : ''}{msg}
        </p>
      )}
    </div>
  );
}
