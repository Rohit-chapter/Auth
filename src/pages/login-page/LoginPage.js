import React, { useState } from 'react';

import { Navigate, useNavigate } from 'react-router-dom';

import localStorageKeys from 'constants/local-storage-keys';

import LoginForm from 'components/login-page/login-form/LoginForm';
import SectionDivider from 'components/generics/section-divider/SectionDivider';
import SSOControls from 'components/generics/sso-controls/SSOControls';
import Spinner from 'components/generics/spinner/Spinner';

import { getUserStorageData } from 'utilities/storage';

import { loginUser } from 'services/auth';

import styles from './LoginPage.module.scss';

function LoginPage() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const userStorageData = getUserStorageData();

  function parseUserData(data) {

    const _data = {
      email: data.email,
      password: data.password
    };

    return _data;
  }

  async function handleLogin(data) {

    setLoading(true);

    const _data = parseUserData(data);

    const response = await loginUser(_data);

    if (response.status !== 200) {
      setLoading(false);
      return;
    }

    localStorage.setItem(localStorageKeys.USER_DATA, JSON.stringify(response.data.user));

    navigate('/home');

    setLoading(false);
  }

  if (userStorageData !== null) {

    const navigateProperties = {
      to: '/home',
      replace: true
    };

    return <Navigate {...navigateProperties} />;
  }

  function renderSpinner() {

    if (loading === false) {
      return;
    }

    return <Spinner />;

  }

  function renderLoginForm() {

    if (loading === true) {
      return;
    }

    return (
      <div id={styles.LoginForm}>
        <LoginForm onLogin={handleLogin} />
        <SectionDivider />
        <SSOControls onSuccess={handleLogin} />
      </div>
    );
  }

  return (
    <div id={styles.loginPageMain}>
      {renderLoginForm()}
      {renderSpinner()}
    </div>
  );
}

export default LoginPage;