import React, { useState, useEffect } from 'react';

import { useSnackbar } from 'notistack';

import { getUserProfile } from 'services/user';

import Spinner from 'components/generics/spinner/Spinner';

import MyProfile from '../my-profile/MyProfile';

import styles from './Home.module.scss';

function Home() {

  const { enqueueSnackbar } = useSnackbar();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {

    initialize();

  }, []);

  async function initialize() {

    setLoading(true);

    const response = await getUserProfile();

    if (response.status !== 200) {

      const errorMessage = response.response.data.error.message;

      enqueueSnackbar(errorMessage, { variant: 'error' });

      setLoading(false);
    }

    setUser(response.data.profile);
    setLoading(false);

  }

  function renderSpinner() {

    if (loading === false) {
      return;
    }

    return <Spinner />;

  }

  function renderHomeContent() {

    if (loading === true) {
      return;
    }

    const fullName = `${user?.firstName} ${user?.lastName}`;

    return (
      <React.Fragment>
        <h2 className={styles.welcomeText}>Welcome {fullName},</h2>
        <MyProfile profile={user} />
      </React.Fragment>
    );
  }

  return (
    <div id={styles.homeMain}>
      {renderHomeContent()}
      {renderSpinner()}
    </div>
  );
}

export default Home;