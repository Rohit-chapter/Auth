import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import authTypes from 'constants/auth-types';

import { convertValueToHash } from 'utilities';

import { validateForm } from './utilities';

import styles from './RegistrationForm.module.scss';

function RegistrationForm(props) {

  const { onRegistration } = props;

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validate: validateForm,
    onSubmit: handleCTAControlClick
  });

  function handleCTAControlClick() {

    const values = formik.values;

    const user = {
      ...values,
      password: convertValueToHash(values.password),
      authenticationType: authTypes.WITHOUT_SSO
    };

    onRegistration(user);

  }

  function renderError(error) {

    if (!error) {
      return;
    }

    return <p className={styles.formErrorMessage}>{error}</p>;

  }

  function renderInputControl(inputType, key, label, placeholder) {

    let error = '';

    if (formik.errors[key] !== '' && formik.touched[key] === true) {
      error = formik.errors[key];
    }

    const textInputControlAttributes = {
      type: inputType,
      placeholder: placeholder,
      name: key,
      className: error ? ' error' : '',
      value: formik.values[key],
      onChange: formik.handleChange,
      onBlur: formik.handleBlur
    };

    return (
      <div className={styles.formRow}>
        <label className={styles.formLabel}>{label}</label>
        <input {...textInputControlAttributes} />
        {renderError(error)}
      </div>
    );
  }

  function renderNameInputControls() {

    return (
      <div className={styles.nameInputControls}>
        {renderInputControl('text', 'firstName', 'First Name*', 'Enter first name')}
        {renderInputControl('text', 'lastName', 'Last Name*', 'Enter last name')}
      </div>
    );
  }

  function renderCTAControl() {

    const ctaControlAttributes = {
      className: `application-themed-button ${styles.registrationCTA}`,
      type: 'submit'
    };

    return <button {...ctaControlAttributes}>Register</button>;
  }

  function renderRegistrationFormExtraControls() {

    const signInControlAttributes = {
      className: styles.signInControl,
      onClick() {
        navigate('/');
      }
    };

    return (
      <label className={styles.alreadyHaveAnAccountLabel}>
        Already have an account? {' '}
        <span {...signInControlAttributes}>Sign in</span>
      </label>
    );
  }

  const registrationFormAttributes = {
    id: styles.registrationForm,
    onSubmit: formik.handleSubmit
  };

  return (
    <div id={styles.registrationFormMain}>

      <label className={styles.registrationFormLabel}>Registration</label>

      <form {...registrationFormAttributes}>
        {renderNameInputControls()}
        {renderInputControl('email', 'email', 'Email*', 'Enter email')}
        {renderInputControl('password', 'password', 'Password*', 'Enter password')}
        {renderCTAControl()}
        {renderRegistrationFormExtraControls()}
      </form>

    </div>
  );
}

export default RegistrationForm;