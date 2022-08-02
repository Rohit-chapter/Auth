import React from 'react';

import { Navigate } from 'react-router-dom';

import LoginForm from 'components/login-page/login-form/LoginForm';
import SectionDivider from 'components/generics/section-divider/SectionDivider';
import SSOControls from 'components/generics/sso-controls/SSOControls';

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
        <SectionDivider />
        <SSOControls containerClass={styles.ssoControlsContainer} />
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