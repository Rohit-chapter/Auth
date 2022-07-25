import React from 'react';

import RouteComponent from './routes/RouteComponent';

import styles from './App.module.scss';

function App() {

  return (
    <div className={styles.appContainer}>
      <RouteComponent />
    </div>
  );

}

export default App;
