import React, { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import LoginForm from 'components/login-page/login-form/LoginForm';
import SectionDivider from 'components/generics/section-divider/SectionDivider';
import SSOControls from 'components/generics/sso-controls/SSOControls';
import Spinner from 'components/generics/spinner/Spinner';

import AuthContext from 'context/authentication-context';

import { loginUser } from 'services/auth';

import styles from './LoginPage.module.scss';

function LoginPage() {

  const authenticationContext = useContext(AuthContext);

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);

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

    const result = await loginUser(_data);

    if (result.status !== 200) {

      const errorMessage = result.response.data.error.message;

      enqueueSnackbar(errorMessage, { variant: 'error' });

      setLoading(false);

      return;

    }

    authenticationContext.onAuthenticate(result.data.accessToken);

    enqueueSnackbar('Successful login!', { variant: 'success' });

    navigate('/home');

    setLoading(false);

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