import React from 'react';

import { useNavigate } from 'react-router-dom';

import localStorageKeys from 'constants/local-storage-keys';

import { extractAvatarCharactersFromName } from './utilities';

import styles from './MyProfile.module.scss';

function MyProfile(props) {

  const { profile } = props;

  const navigate = useNavigate();

  function handleLogoutControlClick() {

    localStorage.removeItem(localStorageKeys.USER_DATA);

    navigate('/');

  }

  function renderAvatar(name) {

    const avatarCharacters = extractAvatarCharactersFromName(name);

    return (
      <div className={styles.avatarContainer}>
        {avatarCharacters}
      </div>
    );
  }

  function renderContent() {

    if (profile === null) {
      return;
    }

    const fullName = `${profile.firstName} ${profile.lastName}`;

    const logoutControlAttributes = {
      className: `application-themed-button ${styles.logoutButton}`,
      onClick: handleLogoutControlClick
    };

    return (
      <React.Fragment>

        {renderAvatar(fullName)}

        <h2 className={styles.name}>{fullName}</h2>
        <h5 className={styles.email}>{profile.email}</h5>
        <label className={styles.id}>{profile.id}</label>
        <label className={styles.loggedInStatus}>Logged in with {profile.authenticationType}</label>

        <button {...logoutControlAttributes}>Logout</button>
      </React.Fragment>
    );
  }

  return (
    <div id={styles.myProfileMain}>

      {renderContent()}

    </div>
  );
}

export default MyProfile;