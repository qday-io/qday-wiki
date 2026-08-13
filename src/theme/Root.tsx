import React from 'react';

// Root wraps the entire app on every page.
// NOTE: the floating "Ask AI" widget is disabled for now (backend not ready).
// To re-enable: restore the BrowserOnly<AskAI/> mount below.
export default function Root({ children }: { children: React.ReactNode }): React.ReactElement {
  return <>{children}</>;
}
