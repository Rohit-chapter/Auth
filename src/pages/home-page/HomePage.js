import React, { useContext } from 'react';

import AuthContext from 'context/authentication-context';

import styles from './HomePage.module.scss';

function HomePage() {

  const authenticationContext = useContext(AuthContext);

  function logoutHandler() {

    // passing false as to inform logoutHandler that 
    // this logout is called physically not on the clearing of session
    authenticationContext.onLogout(false);

  }

  return (
    <div id={styles.homePageMain}>
      <h1>Home page</h1>
      <button className='application-themed-button' onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default HomePage;