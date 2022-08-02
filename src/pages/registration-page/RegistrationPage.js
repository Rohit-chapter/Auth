import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import localStorageKeys from 'constants/local-storage-keys';

import SSOControls from 'components/generics/sso-controls/SSOControls';
import RegistrationForm from 'components/registration-page/registration-form/RegistrationForm';
import SectionDivider from 'components/generics/section-divider/SectionDivider';
import Spinner from 'components/generics/spinner/Spinner';

import { registerUser } from 'services/auth';

import styles from './RegistrationPage.module.scss';

function RegistrationPage() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  async function handleUserRegistration(data) {

    setLoading(true);

    const response = await registerUser(data);

    if (response.status !== 200) {
      setLoading(false);
      return;
    }

    localStorage.setItem(localStorageKeys.USER_DATA, JSON.stringify(response.data.user));

    navigate('/home');

    setLoading(false);

  }

  function renderSSOControl() {

    return <SSOControls onSuccess={handleUserRegistration} />;

  }

  function renderSectionDivider() {
    return <SectionDivider />;
  }

  function renderRegistrationForm() {

    return <RegistrationForm onRegistration={handleUserRegistration} />;

  }

  function renderSpinner() {

    if (loading === false) {
      return;
    }

    return <Spinner />;

  }

  function renderRegistrationPageContent() {

    if (loading === true) {
      return;
    }

    return (
      <div id={styles.registrationPageContent}>
        {renderRegistrationForm()}
        {renderSectionDivider()}
        {renderSSOControl()}
      </div>
    );

  }

  return (
    <div id={styles.registrationPageMain}>

      {renderRegistrationPageContent()}

      {renderSpinner()}

    </div>
  );
}

export default RegistrationPage;