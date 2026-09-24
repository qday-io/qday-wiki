// Tiny wallet helper shared by the interactive doc widgets. Uses the injected
// EIP-1193 provider (MetaMask) directly — no wagmi needed for a demo, though a
// production wiki would reuse the portal's wagmi/viem setup.

export const QDAY2 = {
  chainIdHex: '0xABE5', // 44005
  chainIdNum: 44005,
  rpc: 'https://rpc-test.qday.info',
};

export const QDAY = {
  chainIdHex: '0xABE3', // 44003
  chainIdNum: 44003,
  rpc: 'https://rpc.qday.info',
};

// Active EIP-1193 provider for this session: the injected wallet
// (window.ethereum). Widgets read/send through getProvider().
let active: any = null;

export function getProvider(): any {
  return active ?? (globalThis as any).ethereum ?? null;
}

// Generic "Wallet" button: any injected EIP-1193 wallet (MetaMask, OKX, Rabby…).
export async function connectInjected(): Promise<string | null> {
  const eth = (globalThis as any).ethereum ?? null;
  if (!eth) return null;
  active = eth;
  const accounts = await eth.request({ method: 'eth_requestAccounts' });
  return accounts?.[0] ?? null;
}

// Back-compat alias.
export const connect = connectInjected;

const QDAY2_PARAMS = {
  chainId: QDAY2.chainIdHex,
  chainName: 'QDay Aevum',
  rpcUrls: [QDAY2.rpc],
  blockExplorerUrls: ['https://explorer-test.qday.info'],
  nativeCurrency: { name: 'QDAY', symbol: 'QDAY', decimals: 18 },
};

// Switches the connected wallet to QDay Aevum, adding the network when it is
// unknown. Returns false instead of throwing when the wallet refuses, so a
// wallet that cannot add the network does not look like a failed connection.
// EIP-3326: the wallet answers 4902 when it does not know the chain at all.
export const CHAIN_NOT_ADDED = 4902;

export async function ensureQday2(): Promise<boolean> {
  const eth = getProvider();
  if (!eth) return false;
  try {
    const current = await eth.request({ method: 'eth_chainId' });
    if (current === QDAY2.chainIdHex) return true;
  } catch {
    // Some wallets answer eth_chainId only after a switch.
  }
  try {
    await eth.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: QDAY2.chainIdHex }] });
    return true;
  } catch (err: any) {
    // Wallets that support adding networks offer it after a 4902; wallets
    // with a fixed chain list reject both.
    try {
      await eth.request({ method: 'wallet_addEthereumChain', params: [QDAY2_PARAMS] });
      return true;
    } catch {
      return false;
    }
  }
}

// Minimal JSON-RPC read against the QDay Aevum RPC (no wallet needed).
export async function rpcCall(method: string, params: any[]): Promise<any> {
  const res = await fetch(QDAY2.rpc, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }),
  });
  const j = await res.json();
  if (j.error) throw new Error(j.error.message);
  return j.result;
}

export function fmtEther(wei: bigint, dp = 4): string {
  const s = (Number(wei) / 1e18).toFixed(dp);
  return s.replace(/\.?0+$/, '') || '0';
}
