import React from 'react';

import GoogleLoginControl from './google-login-control/GoogleLoginControl';

import { ReactComponent as GoogleIcon } from 'assets/images/google-icon.svg';
import { ReactComponent as FacebookIcon } from 'assets/images/facebook-icon.svg';
import { ReactComponent as LinkedinIcon } from 'assets/images/linkedin-icon.svg';

import styles from './SSOControls.module.scss';

function SSOControls() {

  function renderGoogleLoginControl() {

    const googleLoginControlProperties = {
      icon: <GoogleIcon className={styles.socialIcon} />,
      controlClass: styles.ssoControl
    };

    return <GoogleLoginControl {...googleLoginControlProperties} />;

  }

  return (
    <div id={styles.ssoControlsContainer}>
      {renderGoogleLoginControl()}
    </div>
  );
}

export default SSOControls;