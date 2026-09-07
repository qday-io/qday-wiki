import {useLocation} from '@docusaurus/router';
import {useActivePlugin} from '@docusaurus/plugin-content-docs/client';

/** When the Docs dropdown is on a docs page, show that section's name. */
export function useDocsDropdownLabel(label: unknown): unknown {
  const {pathname} = useLocation();
  const plugin = useActivePlugin();
  if (label !== 'Docs') {
    return label;
  }
  if (plugin?.pluginId === 'knowledge') {
    return 'Technical';
  }
  if (plugin?.pluginId === 'default') {
    return 'User Guide';
  }
  if (pathname.includes('/Knowledge')) {
    return 'Technical';
  }
  if (/(?:^|\/)guide(?:\/|$)/.test(pathname)) {
    return 'User Guide';
  }
  return 'Docs';
}
