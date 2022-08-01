import React from 'react';

import SSOControls from 'components/sso-controls/SSOControls';
import RegistrationForm from 'components/registration-page/registration-form/RegistrationForm';
import SectionDivider from 'components/login-page/section-divider/SectionDivider';

import styles from './RegistrationPage.module.scss';

function RegistrationPage() {

  function renderSSOControl() {

    return <SSOControls />;

  }

  function renderSectionDivider() {
    return <SectionDivider />;
  }

  function renderRegistrationForm() {

    return <RegistrationForm />;

  }

  function renderRegistrationPageContent() {

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
    </div>
  );
}

export default RegistrationPage;