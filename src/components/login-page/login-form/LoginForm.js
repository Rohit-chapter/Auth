import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { convertValueToHash } from 'utilities';

import { validateForm } from './utilities';

import styles from './LoginForm.module.scss';

function LoginForm(props) {

  const { onLogin } = props;

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: validateForm,
    onSubmit: handleLoginButtonClick
  });

  function handleLoginButtonClick() {

    const values = formik.values;

    const data = {
      email: values.email,
      password: convertValueToHash(values.password)
    };

    onLogin(data);

  }

  function renderError(error) {

    if (!error) {
      return;
    }

    return <p className={styles.formErrorMessage}>{error}</p>;

  }

  function renderEmailInputControl() {

    let error = '';

    if (formik.errors.email !== '' && formik.touched.email === true) {
      error = formik.errors.email;
    }

    const emailInputControlAttributes = {
      type: 'email',
      name: 'email',
      placeholder: 'Enter email',
      className: error ? ' error' : '',
      value: formik.values.email,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur
    };

    return (
      <div className={styles.formRow}>
        <label className={styles.formLabel}>Email</label>
        <input {...emailInputControlAttributes} />
        {renderError(error)}
      </div>
    );
  }

  function renderPasswordInputControl() {

    let error = '';

    if (formik.errors.password !== '' && formik.touched.password === true) {
      error = formik.errors.password;
    }

    const passwordInputControlAttributes = {
      type: 'password',
      name: 'password',
      placeholder: 'Enter password',
      className: error ? ' error' : '',
      value: formik.values.password,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur
    };

    return (
      <div className={styles.formRow}>
        <label className={styles.formLabel}>Password</label>
        <input {...passwordInputControlAttributes} />
        {renderError(error)}
      </div>
    );
  }

  function renderLoginFormControls() {

    const loginButtonAttributes = {
      className: 'application-themed-button',
      type: 'submit'
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

  const loginFormAttributes = {
    className: styles.loginForm,
    onSubmit: formik.handleSubmit
  };

  return (
    <div id={styles.loginFormMain}>

      <label className={styles.loginFormLabel}>Login</label>

      <form {...loginFormAttributes}>
        {renderEmailInputControl()}
        {renderPasswordInputControl()}
        {renderLoginFormControls()}
      </form>

    </div>
  );
}

export default LoginForm;