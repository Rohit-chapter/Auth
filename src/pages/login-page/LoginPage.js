import React from 'react';

import { Navigate } from 'react-router-dom';

import LoginForm from 'components/login-page/login-form/LoginForm';
import LoginFormDivider from 'components/login-page/login-form-divider/LoginFormDivider';
import SSOControls from 'components/login-page/sso-controls/SSOControls';

import { getUserStorageData } from 'utilities/storage';

import styles from './LoginPage.module.scss';

function LoginPage() {

  const userStorageData = getUserStorageData();

  if (userStorageData !== null) {

    const navigateProperties = {
      to: '/home',
      replace: true
    };

    return <Navigate {...navigateProperties} />;
  }

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