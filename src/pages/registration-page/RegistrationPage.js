import React, { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import AuthContext from 'context/authentication-context';

import SSOControls from 'components/generics/sso-controls/SSOControls';
import RegistrationForm from 'components/registration-page/registration-form/RegistrationForm';
import SectionDivider from 'components/generics/section-divider/SectionDivider';
import Spinner from 'components/generics/spinner/Spinner';

import { registerUser } from 'services/auth';

import styles from './RegistrationPage.module.scss';

function RegistrationPage() {

  const authenticationContext = useContext(AuthContext);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);

  async function handleUserRegistration(data) {

    setLoading(true);

    const result = await registerUser(data);

    if (result.status !== 200) {

      const errorMessage = result.response.data.error.message;

      enqueueSnackbar(errorMessage, { variant: 'error' });

      setLoading(false);

      return;

    }

    authenticationContext.onAuthenticate(result.data.accessToken);

    enqueueSnackbar('Registered successfully', { variant: 'success' });

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

    const registrationPageContentAttributes = {
      id: styles.registrationPageContent,
      className: 'hide-scrollbar'
    };

    return (
      <div {...registrationPageContentAttributes}>
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