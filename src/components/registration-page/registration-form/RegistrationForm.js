import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import localStorageKeys from 'constants/local-storage-keys';
import authTypes from 'constants/auth-types';

import Spinner from 'components/spinner/Spinner';

import { registerUser } from 'services/auth';

import { convertValueToHash } from 'utilities';

import { isFormValid } from './utilities';

import styles from './RegistrationForm.module.scss';

function RegistrationForm() {

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);

  function handleTextInputControlChange(event, key) {

    setFormState((_formState) => {
      return {
        ...formState,
        [key]: event.target.value
      };
    });

  }

  async function handleCTAControlClick() {

    const valid = isFormValid(formState);

    if (valid === false) {
      alert('All fields are mandatory');
      return;
    }

    setLoading(true);

    const user = {
      ...formState,
      password: convertValueToHash(formState.password)
    };

    const response = await registerUser(user);

    if (response.status !== 200) {
      setLoading(false);
      return;
    }

    handleSuccessfulRegistration(response.data.user);

  }

  function handleSuccessfulRegistration(user) {

    const data = {
      ...user,
      authenticateType: authTypes.WITHOUT_SSO,
      profileImage: null
    };

    localStorage.setItem(localStorageKeys.USER_DATA, JSON.stringify(data));

    navigate('/home');

    setLoading(false);

  }

  function renderInputControl(inputType, key, label, placeholder) {

    const textInputControlAttributes = {
      type: inputType,
      placeholder: placeholder,
      value: formState[key],
      onChange(event) {
        handleTextInputControlChange(event, key);
      }
    };

    return (
      <div className={styles.formRow}>
        <label className={styles.formLabel}>{label}</label>
        <input {...textInputControlAttributes} />
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
      onClick: handleCTAControlClick
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

  function renderSpinner() {

    if (loading === false) {
      return;
    }

    return <Spinner />;

  }

  function renderRegistrationForm() {

    if (loading === true) {
      return;
    }

    return (
      <React.Fragment>
        <label className={styles.registrationFormLabel}>Registration</label>

        <div id={styles.registrationForm}>
          {renderNameInputControls()}
          {renderInputControl('email', 'email', 'Email*', 'Enter email')}
          {renderInputControl('password', 'password', 'Password*', 'Enter password')}
          {renderCTAControl()}
          {renderRegistrationFormExtraControls()}
        </div>
      </React.Fragment>
    );
  }

  return (
    <div id={styles.registrationFormMain}>

      {renderRegistrationForm()}

      {renderSpinner()}

    </div>
  );
}

export default RegistrationForm;