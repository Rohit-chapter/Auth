import React, { useEffect, useRef } from 'react';

function GoogleLoginControl(props) {

  const { icon, controlClass } = props;

  const googleLoginControlReference = useRef(null);

  useEffect(() => {
    initialize();
  }, [googleLoginControlReference]);

  function initialize() {

    let auth2;

    const handleClientLoad = async () => await window.gapi.load('auth2', initClient);

    const initClient = async () => {
      auth2 = window.gapi.auth2.init({
        client_id: '520779058753-ro6letmd98fq4mc1ppu5ib9eva4j850v.apps.googleusercontent.com',
      });

      const element = googleLoginControlReference.current;

      if (element === null) {
        return;
      }

      auth2.attachClickHandler(element, {}, function (user) {
        console.log(user);
      }, function (error) {
        console.log(error);
      });

    };

    const script = document.createElement('script');

    script.src = "https://apis.google.com/js/api.js";
    script.async = true;
    script.defer = true;
    script.onload = handleClientLoad;

    document.body.appendChild(script);

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