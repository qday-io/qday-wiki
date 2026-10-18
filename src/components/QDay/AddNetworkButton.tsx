import React, { useState } from 'react';
import {translate} from '@docusaurus/Translate';

// Interactive doc component: one-click "Add QDay Aevum Testnet to Wallet" via EIP-3085.
// This is the kind of live element MDX/Docusaurus enables inside docs — a plain
// Markdown site (MkDocs) can only show the params in a table.

type Net = { chainIdHex: string; chainName: string; rpc: string; explorer: string };

const NETWORKS: Record<string, Net> = {
  qday2: {
    chainIdHex: '0xABE5', // 44005
    chainName: 'QDay Aevum',
    rpc: 'https://rpc-test.qday.info',
    explorer: 'https://explorer-test.qday.info',
  },
  qday: {
    chainIdHex: '0xABE1', // 44001 Origin mainnet
    chainName: 'QDay',
    rpc: 'https://rpc.qday.io',
    explorer: 'https://explorer.qday.io',
  },
};

// One full sentence per network so each locale can word (and space) it naturally.
function buttonLabel(network: 'qday' | 'qday2'): string {
  return network === 'qday2'
    ? translate({id: 'addNetwork.button.qday2', message: 'Add QDay Aevum Testnet to Wallet', description: 'Add-network button for the QDay Aevum testnet'})
    : translate({id: 'addNetwork.button.qday', message: 'Add QDay to Wallet', description: 'Add-network button for QDay'});
}

export default function AddNetworkButton({ network = 'qday2' }: { network?: 'qday' | 'qday2' }) {
  const [state, setState] = useState<'idle' | 'busy' | 'ok' | 'err'>('idle');
  const [msg, setMsg] = useState('');
  const net = NETWORKS[network];

  async function add() {
    const eth = (globalThis as any).ethereum;
    if (!eth) {
      setState('err');
      setMsg(translate({id: 'addNetwork.err.noWallet', message: 'No wallet found — install a wallet extension first.'}));
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
          nativeCurrency: net.chainIdHex === '0xABE5'
            ? { name: 'tQDAY', symbol: 'tQDAY', decimals: 18 }
            : { name: 'QDAY', symbol: 'QDAY', decimals: 18 },
        }],
      });
      setState('ok');
      setMsg(translate({id: 'addNetwork.ok', message: '{network} added to your wallet.'}, {network: net.chainName}));
    } catch (e: any) {
      setState('err');
      setMsg(e?.message ?? translate({id: 'wallet.err.rejected', message: 'Request rejected.'}));
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
        {state === 'busy'
          ? translate({id: 'wallet.checkWallet', message: 'Check your wallet…'})
          : buttonLabel(network)}
      </button>
      {msg && (
        <p style={{ marginTop: 8, fontSize: 14, color: state === 'err' ? 'var(--ifm-color-danger)' : 'var(--ifm-color-success)' }}>
          {state === 'ok' ? '✓ ' : ''}{msg}
        </p>
      )}
    </div>
  );
}
