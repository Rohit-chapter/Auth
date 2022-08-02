import React, { useEffect } from 'react';

import authTypes from 'constants/auth-types';

const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;
const facebookApiVersion = process.env.REACT_APP_FACEBOOK_API_VERSION;

function FacebookSSOControl(props) {

  const { icon, controlClass, onSSOSuccess } = props;

  useEffect(() => {

    initialize();

  }, []);

  function initialize() {

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: facebookAppId,
        cookie: true,
        xfbml: true,
        version: facebookApiVersion
      });

      window.FB.AppEvents.logPageView();

    };

    const script = document.createElement('script');

    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

  }

  function handleFacebookControlClick() {

    window.FB.login((response) => {
      if (response.status === 'connected') {
        getUserProfile();
      } else {
        alert(JSON.stringify(response));
      }
    });
  }

  function getUserProfile() {

    window.FB.api('/me?fields=first_name,last_name,email,picture', (profile) => {

      const data = {
        firstName: profile.first_name,
        lastName: profile.last_name,
        id: profile.id,
        email: profile.email,
        authenticationType: authTypes.FACEBOOK
      };

      onSSOSuccess(data);

    });

  }

  const FacebookSSOControlAttributes = {
    className: controlClass,
    onClick: handleFacebookControlClick
  };

  return (
    <div {...FacebookSSOControlAttributes}>
      {icon}
    </div>
  );
}

export default FacebookSSOControl;