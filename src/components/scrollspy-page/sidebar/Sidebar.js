import React from 'react';

import styles from './Sidebar.module.scss';

function Sidebar() {
  return (
    <div id={styles.sidebarMain}>
      <h3 className={styles.sidebarTitle}>Scrollspy Demo</h3>

    </div>
  );
}

export default Sidebar;