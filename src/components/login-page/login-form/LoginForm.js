import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './LoginForm.module.scss';

function LoginForm() {

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });

  function handleEmailInputControlChange(event) {

    setFormState((_formState) => {
      return {
        ..._formState,
        email: event.target.value
      };
    });

  }

  function handlePasswordInputControlChange(event) {

    setFormState((_formState) => {
      return {
        ..._formState,
        password: event.target.value
      };
    });

  }

  function handleLoginButtonClick() {

  }

  function renderEmailInputControl() {

    const emailInputControlAttributes = {
      type: 'email',
      placeholder: 'Enter email',
      value: formState.email,
      onChange: handleEmailInputControlChange
    };

    return (
      <div className={styles.formRow}>
        <label className={styles.formLabel}>Email</label>
        <input {...emailInputControlAttributes} />
      </div>
    );
  }

  function renderPasswordInputControl() {

    const passwordInputControlAttributes = {
      type: 'password',
      placeholder: 'Enter password',
      value: formState.password,
      onChange: handlePasswordInputControlChange
    };

    return (
      <div className={styles.formRow}>
        <label className={styles.formLabel}>Password</label>
        <input {...passwordInputControlAttributes} />
      </div>
    );
  }

  function renderLoginFormControls() {

    const loginButtonAttributes = {
      className: 'application-themed-button',
      onClick: handleLoginButtonClick
    };

    return (
      <div id={styles.loginFormControls}>
        <button {...loginButtonAttributes}>Login</button>
        <div className={styles.loginFormExtraControls}>
          {renderSignUpControl()}
          <label className={styles.forgotPasswordControl}>Forgot Password?</label>
        </div>
      </div>
    );

  }

  function renderSignUpControl() {

    const signupControlAttributes = {
      className: styles.signupControl,
      onClick() {
        navigate('/registration');
      }
    };

    return (
      <label className={styles.needAnAccountLabel}>
        Need an account? {' '}
        <span {...signupControlAttributes}>Sign up</span>
      </label>
    );
  }

  return (
    <div id={styles.loginFormMain}>

      <label className={styles.loginFormLabel}>Login</label>

      <div className={styles.loginForm}>
        {renderEmailInputControl()}
        {renderPasswordInputControl()}
        {renderLoginFormControls()}
      </div>

    </div>
  );
}

export default LoginForm;