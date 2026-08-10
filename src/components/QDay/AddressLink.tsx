import React, { useState } from 'react';

// Contract/address display with copy + explorer link — the standard way mature
// chain docs render addresses so users can verify and jump to the explorer.

const EXPLORER: Record<string, string> = {
  qday: 'https://explorer.qday.io',
  qday2: 'https://explorer-test.qday.io',
};

export default function AddressLink({
  address,
  chain = 'qday',
  short = false,
}: {
  address: string;
  chain?: 'qday' | 'qday2';
  short?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const label = short ? `${address.slice(0, 6)}…${address.slice(-4)}` : address;

  async function copy() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* ignore */
    }
  }

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, verticalAlign: 'middle' }}>
      <a
        href={`${EXPLORER[chain]}/address/${address}`}
        target="_blank"
        rel="noreferrer"
        style={{ fontFamily: 'var(--ifm-font-family-monospace)', fontSize: '0.9em' }}
      >
        {label} ↗
      </a>
      <button
        onClick={copy}
        aria-label="Copy address"
        title={copied ? 'Copied' : 'Copy'}
        style={{
          background: 'transparent', border: 0, cursor: 'pointer', padding: 2,
          color: copied ? 'var(--ifm-color-success)' : 'var(--ifm-color-emphasis-500)', fontSize: 13,
        }}
      >
        {copied ? '✓' : '⧉'}
      </button>
    </span>
  );
}
