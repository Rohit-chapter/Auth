import authTypes from 'constants/auth-types';
import React from 'react';

import { useLinkedIn } from 'react-linkedin-login-oauth2';

import { getLinkedinProfileByCode } from 'services/auth';

const linkedinClientID = process.env.REACT_APP_LINKEDIN_CLIENT_ID;
const linkedinRedirectURI = process.env.REACT_APP_LINKEDIN_REDIRECT_URI;
const linkedinScope = process.env.REACT_APP_LINKEDIN_SCOPE;

function LinkedinSSOControl(props) {

  const { icon, controlClass, onSSOSuccess } = props;

  const { linkedInLogin } = useLinkedIn({
    clientId: linkedinClientID,
    redirectUri: linkedinRedirectURI,
    scope: linkedinScope,
    onSuccess,
    onError,
  });

  function onSuccess(code) {

    getLinkedinUserProfile(code);

  }

  function onError(error) {

    if (error.error === 'user_closed_popup') {
      return;
    }

    alert(JSON.stringify(error));

  }

  async function getLinkedinUserProfile(code) {

    const result = await getLinkedinProfileByCode(code);

    if (result.status !== 200) {
      alert('Error in linkedin login');
      return;
    }

    const userProfile = {
      ...result.data.user,
      authenticationType: authTypes.LINKEDIN
    };

    onSSOSuccess(userProfile);

  }

  const GoogleSSOControlAttributes = {
    className: controlClass,
    onClick: linkedInLogin
  };

  return (
    <div {...GoogleSSOControlAttributes}>
      {icon}
    </div>
  );
}

export default LinkedinSSOControl;