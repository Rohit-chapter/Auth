import React, { useState, useEffect } from 'react';

import { useSnackbar } from 'notistack';

import Spinner from 'components/generics/spinner/Spinner';

import styles from './Users.module.scss';
import { getAllUsers } from 'services/user';
import UserSection from './user-section/UserSection';

function Users() {

  const { enqueueSnackbar } = useSnackbar();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function initialize() {

    setLoading(true);

    const response = await getAllUsers();

    if (response.status !== 200) {

      const errorMessage = response.response.data.error.message;

      enqueueSnackbar(errorMessage, { variant: 'error' });

      setLoading(false);
    }

    setLoading(false);
    setUsers(response.data.users);

  }

  function handleDeleteUser(id) {

    const _users = users.filter((user) => {
      return user._id.toString() !== id;
    });

    setUsers(_users);

  }

  function renderSpinner() {

    if (loading === false) {
      return;
    }

    return <Spinner />;
  }

  function renderUserSection(user, index) {

    const userSectionProperties = {
      user,
      key: index,
      onDelete: handleDeleteUser
    };

    return <UserSection {...userSectionProperties} />;

  }

  function renderNoUsersSection() {
    return (
      <div className={styles.noUserSection}>
        <label className={styles.noUserMessageLabel}>No user is available!</label>
      </div>
    );
  }

  function renderUsers() {

    if (users.length === 0) {
      return renderNoUsersSection();
    }

    return (
      <div className={styles.userListContainer}>
        {
          users.map((user, index) => (
            renderUserSection(user, index)
          ))
        }
      </div>
    );

  }

  function renderContent() {

    if (loading === true) {
      return;
    }

    return (
      <React.Fragment>
        <h2 className={styles.usersListLabel}>Users List</h2>
        {renderUsers()}
      </React.Fragment>
    );
  }

  return (
    <div className={styles.usersMain}>
      {renderContent()}
      {renderSpinner()}
    </div>
  );
}

export default Users;