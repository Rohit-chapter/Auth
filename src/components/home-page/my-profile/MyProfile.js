import React from 'react';

import { useNavigate } from 'react-router-dom';

import localStorageKeys from 'constants/local-storage-keys';

import styles from './MyProfile.module.scss';

function MyProfile(props) {

  const { profile } = props;

  const navigate = useNavigate();

  function handleLogoutControlClick() {

    localStorage.removeItem(localStorageKeys.USER_DATA);

    navigate('/');

  }

  const profileImageAttributes = {
    src: profile.profileImage,
    className: styles.profileImage
  };

  const fullName = `${profile.firstName} ${profile.lastName}`;

  const profileImageAlternativeText = `${fullName}-profile`;

  const logoutControlAttributes = {
    className: `application-themed-button ${styles.logoutButton}`,
    onClick: handleLogoutControlClick
  };

  return (
    <div id={styles.myProfileMain}>

      <img {...profileImageAttributes} alt={profileImageAlternativeText} />
      <h2 className={styles.name}>{fullName}</h2>
      <h5 className={styles.email}>{profile.email}</h5>
      <label className={styles.id}>{profile.id}</label>
      <label className={styles.loggedInStatus}>Logged in with {profile.authenticationType}</label>

      <button {...logoutControlAttributes}>Logout</button>

    </div>
  );
}

export default MyProfile;