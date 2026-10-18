import {useLocation} from '@docusaurus/router';
import {useActivePlugin} from '@docusaurus/plugin-content-docs/client';
import {translate} from '@docusaurus/Translate';
import type {ReactNode} from 'react';

type DropdownItem = {type?: string};

/**
 * True for the "Docs" dropdown, i.e. the one whose children are docSidebar
 * items. Checked structurally instead of by label, because the label is
 * already localized (e.g. 文件 on zh-Hant) by the time it reaches the theme.
 */
export function isDocsDropdown(items: readonly unknown[] | undefined): boolean {
  return (items ?? []).some(
    (item) => (item as DropdownItem | null)?.type === 'docSidebar',
  );
}

/** When the Docs dropdown is on a docs page, show that section's name. */
export function useDocsDropdownLabel(
  label: ReactNode,
  items: readonly unknown[] | undefined,
): ReactNode {
  const {pathname} = useLocation();
  const plugin = useActivePlugin();
  if (!isDocsDropdown(items)) {
    return label;
  }
  const technical = translate({
    id: 'navbar.docs.technical',
    message: 'Technical',
    description: 'Docs dropdown label while reading the Technical (Knowledge) docs',
  });
  const userGuide = translate({
    id: 'navbar.docs.userGuide',
    message: 'User Guide',
    description: 'Docs dropdown label while reading the User Guide docs',
  });
  if (plugin?.pluginId === 'knowledge') {
    return technical;
  }
  if (plugin?.pluginId === 'default') {
    return userGuide;
  }
  if (pathname.includes('/Knowledge')) {
    return technical;
  }
  if (/(?:^|\/)guide(?:\/|$)/.test(pathname)) {
    return userGuide;
  }
  return label;
}
