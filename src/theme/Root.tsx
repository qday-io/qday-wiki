import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import AskAI from '@site/src/components/QDay/AskAI';

// Root wraps the entire app on every page. We mount the floating "Ask AI" widget
// here (browser-only, so SSR is unaffected).
export default function Root({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <>
      {children}
      <BrowserOnly>{() => <AskAI />}</BrowserOnly>
    </>
  );
}
