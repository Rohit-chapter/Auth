import React from 'react';

import styles from './LoginFormDivider.module.scss';

function LoginFormDivider() {

  return (
    <div id={styles.loginFormDivider}>
      <div className={styles.divisionLine}></div>
      <label className={styles.orLabel}>or</label>
      <div className={styles.divisionLine}></div>
    </div>
  );

}

export default LoginFormDivider;