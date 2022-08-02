import React from 'react';

import Snackbar from 'components/generics/snackbar/Snackbar';

import RouteComponent from 'routes/RouteComponent';

import styles from './App.module.scss';

function App() {

  return (
    <Snackbar>
      <div className={styles.appContainer}>
        <RouteComponent />
      </div>
    </Snackbar>
  );

}

export default App;
