import React, { useEffect, useRef } from 'react';

import loginTypes from 'constants/login-types';

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function GoogleLoginControl(props) {

  const { icon, controlClass, onLoginSuccess } = props;

  const googleLoginControlReference = useRef(null);

  useEffect(() => {

    initialize();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [googleLoginControlReference]);

  function initialize() {

    let auth;

    const handleClientLoad = async () => await window.gapi.load('auth2', initializeClient);

    const initializeClient = async () => {

      auth = await window.gapi.auth2.init({
        client_id: googleClientId
      });

      handleAddCLickEvent(auth);

    };

    const script = document.createElement('script');

    script.src = "https://apis.google.com/js/api.js";
    script.async = true;
    script.defer = true;
    script.onload = handleClientLoad;

    document.body.appendChild(script);

  }

  function handleAddCLickEvent(auth) {

    const element = googleLoginControlReference.current;

    if (element === null) {
      return;
    }

    auth.attachClickHandler(element, {}, onSuccess, onError);

  }

  function onSuccess(user) {

    const profile = user.getBasicProfile();

    const data = {
      firstName: profile.getGivenName(),
      lastName: profile.getFamilyName(),
      id: profile.getId(),
      profileImage: profile.getImageUrl(),
      email: profile.getEmail(),
      loginWith: loginTypes.GOOGLE
    };

    onLoginSuccess(data);

  }

  function onError(error) {
    alert(JSON.stringify(error));
  }

  const googleLoginControlAttributes = {
    className: controlClass,
    ref: googleLoginControlReference
  };

  return (
    <div {...googleLoginControlAttributes}>
      {icon}
    </div>
  );
}

export default GoogleLoginControl;