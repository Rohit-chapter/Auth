import React from 'react';

import { Navigate } from 'react-router-dom';

import MyProfile from 'components/home-page/my-profile/MyProfile';

import { getUserStorageData } from 'utilities/storage';

import styles from './HomePage.module.scss';

function HomePage() {

  const userStorageData = getUserStorageData();

  if (userStorageData === null) {

    const navigateProperties = {
      to: '/',
      replace: true
    };

    return <Navigate {...navigateProperties} />;
  }

  const myProfileProperties = {
    profile: userStorageData
  };

  return (
    <div id={styles.homePageMain}>
      <MyProfile {...myProfileProperties} />
    </div>
  );
}

export default HomePage;