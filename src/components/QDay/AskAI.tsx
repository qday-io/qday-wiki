import React, { useEffect, useRef, useState } from 'react';
import {translate} from '@docusaurus/Translate';

// Floating "Ask AI" chat launcher — UI shell ready for a future AI backend.
// The docs are MDX/Markdown, so a retrieval step can index docs/ + i18n/ and
// answer from them. Wire the real call in `askBackend()` below.

type Msg = { role: 'user' | 'assistant'; text: string };

const SUGGESTIONS = [
  translate({id: 'ai.q1', message: 'How do I add QDay2 to MetaMask?'}),
  translate({id: 'ai.q2', message: 'How does migration work?'}),
  translate({id: 'ai.q3', message: 'What are the RPC endpoints?'}),
];
const T = {
  title: translate({id: 'ai.title', message: 'Ask QDay AI'}),
  subtitle: translate({id: 'ai.subtitle', message: 'Answers from this wiki · preview'}),
  intro: translate({id: 'ai.intro', message: 'Ask anything about QDay — try:'}),
  placeholder: translate({id: 'ai.placeholder', message: 'Ask about QDay…'}),
  send: translate({id: 'ai.send', message: 'Send'}),
  thinking: translate({id: 'ai.thinking', message: 'thinking…'}),
  launch: translate({id: 'ai.launch', message: 'Ask AI'}),
  close: translate({id: 'ai.close', message: 'Close'}),
};

// TODO(ai): replace with a real call to the docs-trained assistant.
// e.g. POST /api/ask { question, locale } -> { answer, sources[] }
async function askBackend(question: string): Promise<string> {
  await new Promise((r) => setTimeout(r, 600));
  return (
    "The AI assistant isn't connected yet. When it is, it'll answer from this " +
    'wiki\'s content (the docs are MDX, so it can be indexed and cited). ' +
    `You asked: "${question}"`
  );
}

export default function AskAI() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' });
  }, [msgs, open]);

  async function send(q: string) {
    const question = q.trim();
    if (!question || busy) return;
    setInput('');
    setMsgs((m) => [...m, { role: 'user', text: question }]);
    setBusy(true);
    try {
      const answer = await askBackend(question);
      setMsgs((m) => [...m, { role: 'assistant', text: answer }]);
    } catch {
      setMsgs((m) => [...m, { role: 'assistant', text: 'Something went wrong. Please try again.' }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 200 }}>
      {open && (
        <div style={{
          width: 360, maxWidth: 'calc(100vw - 40px)', height: 480, maxHeight: 'calc(100vh - 120px)',
          display: 'flex', flexDirection: 'column', marginBottom: 12,
          background: 'var(--ifm-background-surface-color)',
          border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 16,
          boxShadow: '0 12px 48px rgba(0,0,0,0.28)', overflow: 'hidden',
        }}>
          {/* header */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 16px', borderBottom: '1px solid var(--ifm-color-emphasis-200)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 18 }}>✨</span>
              <div>
                <div style={{ fontWeight: 650, fontSize: 15 }}>{T.title}</div>
                <div style={{ fontSize: 11.5, color: 'var(--ifm-color-emphasis-600)' }}>{T.subtitle}</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" style={{
              background: 'transparent', border: 0, cursor: 'pointer', fontSize: 20,
              color: 'var(--ifm-color-emphasis-600)', lineHeight: 1,
            }}>×</button>
          </div>

          {/* body */}
          <div ref={bodyRef} style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {msgs.length === 0 && (
              <div style={{ color: 'var(--ifm-color-emphasis-700)', fontSize: 14 }}>
                <p style={{ marginTop: 0 }}>{T.intro}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {SUGGESTIONS.map((s) => (
                    <button key={s} onClick={() => send(s)} style={{
                      textAlign: 'left', padding: '9px 12px', borderRadius: 10, cursor: 'pointer',
                      border: '1px solid var(--ifm-color-emphasis-200)', background: 'transparent',
                      color: 'inherit', fontSize: 13.5,
                    }}>{s}</button>
                  ))}
                </div>
              </div>
            )}
            {msgs.map((m, i) => (
              <div key={i} style={{
                alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%', padding: '9px 13px', borderRadius: 12, fontSize: 14, lineHeight: 1.5,
                background: m.role === 'user' ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-100)',
                color: m.role === 'user' ? '#fff' : 'inherit',
              }}>{m.text}</div>
            ))}
            {busy && <div style={{ alignSelf: 'flex-start', color: 'var(--ifm-color-emphasis-500)', fontSize: 14 }}>{T.thinking}</div>}
          </div>

          {/* input */}
          <form onSubmit={(e) => { e.preventDefault(); send(input); }} style={{
            display: 'flex', gap: 8, padding: 12, borderTop: '1px solid var(--ifm-color-emphasis-200)',
          }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={T.placeholder}
              style={{
                flex: 1, padding: '9px 12px', borderRadius: 10, fontSize: 14,
                border: '1px solid var(--ifm-color-emphasis-300)', background: 'var(--ifm-background-color)', color: 'inherit',
              }} />
            <button type="submit" disabled={busy || !input.trim()} style={{
              padding: '9px 14px', borderRadius: 10, border: 0, fontWeight: 600, fontSize: 14,
              background: 'var(--ifm-color-primary)', color: '#fff',
              cursor: busy || !input.trim() ? 'default' : 'pointer', opacity: busy || !input.trim() ? 0.5 : 1,
            }}>{T.send}</button>
          </form>
        </div>
      )}

      {/* launcher */}
      <button onClick={() => setOpen((v) => !v)} aria-label="Ask QDay AI" style={{
        display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto',
        padding: '12px 18px', borderRadius: 999, border: 0, cursor: 'pointer',
        background: 'var(--ifm-color-primary)', color: '#fff', fontWeight: 650, fontSize: 15,
        boxShadow: '0 8px 28px rgba(79,93,255,0.4)',
      }}>
        <span style={{ fontSize: 18 }}>✨</span> {open ? T.close : T.launch}
      </button>
    </div>
  );
}
