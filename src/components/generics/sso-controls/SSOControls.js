import React from 'react';

import GoogleSSOControl from 'components/generics/sso-controls/google-sso-control/GoogleSSOControl';
import FacebookSSOControl from 'components/generics/sso-controls/facebook-sso-control/FacebookSSOControl';
import LinkedinSSOControl from 'components/generics/sso-controls/linkedin-sso-control/LinkedinSSOControl';

import { ReactComponent as GoogleIcon } from 'assets/images/google-icon.svg';
import { ReactComponent as FacebookIcon } from 'assets/images/facebook-icon.svg';
import { ReactComponent as LinkedinIcon } from 'assets/images/linkedin-icon.svg';

import styles from './SSOControls.module.scss';
import { convertValueToHash } from 'utilities';

function SSOControls(props) {

  const { onSuccess } = props;

  function handleSSOSuccess(data) {

    const _data = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      authenticationType: data.authenticationType,
      password: convertValueToHash(data.id)
    };

    onSuccess(_data);

  }

  function renderGoogleSSOControl() {

    const googleSSOControlProperties = {
      icon: <GoogleIcon className={styles.socialIcon} />,
      controlClass: styles.ssoControl,
      onSSOSuccess: handleSSOSuccess
    };

    return <GoogleSSOControl {...googleSSOControlProperties} />;

  }

  function renderFacebookSSOControl() {

    const facebookSSOControlProperties = {
      icon: <FacebookIcon className={styles.socialIcon} />,
      controlClass: styles.ssoControl,
      onSSOSuccess: handleSSOSuccess
    };

    return <FacebookSSOControl {...facebookSSOControlProperties} />;

  }

  function renderLinkedinSSOControl() {

    const linkedinSSOControlProperties = {
      icon: <LinkedinIcon className={styles.socialIcon} />,
      controlClass: styles.ssoControl,
      onSSOSuccess: handleSSOSuccess
    };

    return <LinkedinSSOControl {...linkedinSSOControlProperties} />;

  }

  const ssoControlsContainerAttributes = {
    id: styles.ssoControlsContainer
  };

  return (
    <div {...ssoControlsContainerAttributes}>
      {renderGoogleSSOControl()}
      {renderFacebookSSOControl()}
      {renderLinkedinSSOControl()}
    </div>
  );
}

export default SSOControls;