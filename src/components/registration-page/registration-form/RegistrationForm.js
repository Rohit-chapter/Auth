import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './RegistrationForm.module.scss';

function RegistrationForm() {

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  function handleTextInputControlChange(event, key) {

    setFormState((_formState) => {
      return {
        ...formState,
        [key]: event.target.value
      };
    });

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
        {renderInputControl('text', 'firstName', 'First Name', 'Enter first name')}
        {renderInputControl('text', 'lastName', 'Last Name', 'Enter last name')}
      </div>
    );
  }

  function renderCTAControl() {

    const ctaControlAttributes = {
      className: `application-themed-button ${styles.registrationCTA}`
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

  return (
    <div id={styles.registrationFormMain}>

      <label className={styles.registrationFormLabel}>Registration</label>

      <div id={styles.registrationForm}>
        {renderNameInputControls()}
        {renderInputControl('email', 'email', 'Email', 'Enter email')}
        {renderInputControl('password', 'password', 'Password', 'Enter password')}
        {renderCTAControl()}
        {renderRegistrationFormExtraControls()}
      </div>

    </div>
  );
}

export default RegistrationForm;