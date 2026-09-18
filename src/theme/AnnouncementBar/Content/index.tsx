import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

// Swizzled so the announcement can be translated (PQALABS-952). The theme's
// own version injects `themeConfig.announcementBar.content` as raw HTML, which
// Docusaurus never runs through i18n, so the zh-Hant site showed nothing.
// The links are passed as values, keeping one translatable sentence per locale.

const discord = (
  <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/Rrb33mC3Kc">
    Discord
  </a>
);

const github = (
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/qday-io/qday-wiki/issues">
    GitHub
  </a>
);

export default function AnnouncementBarContent(
  props: React.ComponentProps<'div'>,
): React.ReactElement {
  return (
    <div {...props} className={clsx(styles.content, props.className)}>
      <Translate
        id="theme.announcementBar.revisionNotice"
        description="Announcement bar telling readers the docs are being revised and where to report issues"
        values={{ discord, github }}
      >
        {'Documentation revision underway: please report issues on {discord} or via {github}.'}
      </Translate>
    </div>
  );
}
