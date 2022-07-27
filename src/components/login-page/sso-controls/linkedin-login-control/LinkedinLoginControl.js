import React, { useEffect } from 'react';

// import { useLinkedIn } from 'react-linkedin-login-oauth2';

// const linkedinClientId = process.env.REACT_APP_LINKEDIN_CLIENT_ID;

function LinkedinLoginControl(props) {

  const { icon, controlClass } = props;

  useEffect(() => {

    initialize();

  }, []);

  function initialize() {

    const script = document.createElement('script');

    script.src = "http://platform.linkedin.com/in.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

  }

  function handleLinkedinLoginControlClick() { }

  const googleLoginControlAttributes = {
    className: controlClass,
    onClick: handleLinkedinLoginControlClick
  };

  return (
    <div {...googleLoginControlAttributes}>
      {icon}
    </div>
  );
}

export default LinkedinLoginControl;