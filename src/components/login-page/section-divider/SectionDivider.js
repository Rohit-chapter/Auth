import React from 'react';

import styles from './SectionDivider.module.scss';

function SectionDivider() {

  return (
    <div id={styles.SectionDivider}>
      <div className={styles.divisionLine}></div>
      <label className={styles.orLabel}>or</label>
      <div className={styles.divisionLine}></div>
    </div>
  );

}

export default SectionDivider;