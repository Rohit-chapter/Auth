import React from 'react';

import { ReactComponent as GoogleIcon } from 'assets/images/google-icon.svg';
import { ReactComponent as FacebookIcon } from 'assets/images/facebook-icon.svg';
import { ReactComponent as LinkedinIcon } from 'assets/images/linkedin-icon.svg';

import styles from './SSOControls.module.scss';

function SSOControls() {

  function handleGoogleSignIn() {

  }

  function renderSSOControl(Icon, handler) {

    const ssoControlAttributes = {
      className: styles.ssoControl,
      onClick: handler
    };

    return (
      <div {...ssoControlAttributes}>
        <Icon className={styles.socialIcon} />
      </div>
    );
  }

  return (
    <div id={styles.ssoControlsContainer}>
      {renderSSOControl(GoogleIcon, handleGoogleSignIn)}
      {renderSSOControl(FacebookIcon, handleGoogleSignIn)}
      {renderSSOControl(LinkedinIcon, handleGoogleSignIn)}
    </div>
  );
}

export default SSOControls;