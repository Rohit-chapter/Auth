import React, { useEffect, useRef } from 'react';

import authTypes from 'constants/auth-types';

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function GoogleSSOControl(props) {

  const { icon, controlClass, onSSOSuccess } = props;

  const GoogleSSOControlReference = useRef(null);

  useEffect(() => {

    initialize();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [GoogleSSOControlReference]);

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

    const element = GoogleSSOControlReference.current;

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
      email: profile.getEmail(),
      authenticationType: authTypes.GOOGLE
    };

    onSSOSuccess(data);

  }

  function onError(error) {
    alert(JSON.stringify(error));
  }

  const GoogleSSOControlAttributes = {
    className: controlClass,
    ref: GoogleSSOControlReference
  };

  return (
    <div {...GoogleSSOControlAttributes}>
      {icon}
    </div>
  );
}

export default GoogleSSOControl;