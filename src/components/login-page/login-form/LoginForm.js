import React, { useState } from 'react';

import styles from './LoginForm.module.scss';

function LoginForm() {

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
        <label className={styles.forgotPasswordControl}>Forgot Password?</label>
      </div>
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