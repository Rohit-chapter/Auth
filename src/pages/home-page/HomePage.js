import React from 'react';

import { Navigate, useNavigate } from 'react-router-dom';

import { getUserStorageData } from 'utilities/storage';

import bannerImage from 'assets/images/home-banner-image.png';

import styles from './HomePage.module.scss';
import localStorageKeys from 'constants/local-storage-keys';

function HomePage() {

  const userStorageData = getUserStorageData();

  const navigate = useNavigate();

  function handleLogoutControlClick() {

    localStorage.removeItem(localStorageKeys.USER_DATA);

    navigate('/');

  }

  if (userStorageData === null) {

    const navigateProperties = {
      to: '/',
      replace: true
    };

    return <Navigate {...navigateProperties} />;
  }

  const bannerImageAttributes = {
    src: bannerImage,
    className: styles.bannerImage
  };

  const logoutControlAttributes = {
    className: `application-themed-button ${styles.logoutButton}`,
    onClick: handleLogoutControlClick
  };

  return (
    <div id={styles.homePageMain}>
      <img {...bannerImageAttributes} alt='home-page-banner' />
      <h3 className={styles.comingSoonLabel}>Coming soon...</h3>
      <button {...logoutControlAttributes}>Logout</button>
    </div>
  );
}

export default HomePage;