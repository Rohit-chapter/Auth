import React from 'react';

import { useNavigate } from 'react-router-dom';

import localStorageKeys from 'constants/local-storage-keys';

import GoogleLoginControl from './google-login-control/GoogleLoginControl';
import FacebookLoginControl from './facebook-login-control/FacebookLoginControl';

import { ReactComponent as GoogleIcon } from 'assets/images/google-icon.svg';
import { ReactComponent as FacebookIcon } from 'assets/images/facebook-icon.svg';
import { ReactComponent as LinkedinIcon } from 'assets/images/linkedin-icon.svg';

import styles from './SSOControls.module.scss';

function SSOControls() {

  const navigate = useNavigate();

  function handleSuccessfulLogin(data) {

    localStorage.setItem(localStorageKeys.USER_DATA, JSON.stringify(data));

    navigate('/home');

  }

  function renderGoogleLoginControl() {

    const googleLoginControlProperties = {
      icon: <GoogleIcon className={styles.socialIcon} />,
      controlClass: styles.ssoControl,
      onLoginSuccess: handleSuccessfulLogin
    };

    return <GoogleLoginControl {...googleLoginControlProperties} />;

  }

  function renderFacebookLoginControl() {

    const facebookLoginControlProperties = {
      icon: <FacebookIcon className={styles.socialIcon} />,
      controlClass: styles.ssoControl,
      onLoginSuccess: handleSuccessfulLogin
    };

    return <FacebookLoginControl {...facebookLoginControlProperties} />;

  }

  return (
    <div id={styles.ssoControlsContainer}>
      {renderGoogleLoginControl()}
      {renderFacebookLoginControl()}
    </div>
  );
}

export default SSOControls;