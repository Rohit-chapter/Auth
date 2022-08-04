import React from 'react';

import { AuthContextProvider } from 'context/authentication-context';

import Snackbar from 'components/generics/snackbar/Snackbar';

import RouteComponent from 'routes/RouteComponent';

import styles from './App.module.scss';

function App() {

  return (
    <Snackbar>
      <AuthContextProvider>
        <div className={styles.appContainer}>
          <RouteComponent />
        </div>
      </AuthContextProvider>
    </Snackbar>
  );

}

export default App;
