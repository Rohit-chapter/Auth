import React from 'react';

import LoginForm from 'components/login-page/login-form/LoginForm';
import LoginFormDivider from 'components/login-page/login-form-divider/LoginFormDivider';

import styles from './LoginPage.module.scss';
import SSOControls from 'components/login-page/sso-controls/SSOControls';

function LoginPage() {

  function renderLoginForm() {

    return (
      <div id={styles.LoginForm}>
        <LoginForm />
        <LoginFormDivider />
        <SSOControls />
      </div>
    );
  }

  return (
    <div id={styles.loginPageMain}>
      {renderLoginForm()}
    </div>
  );
}

export default LoginPage;