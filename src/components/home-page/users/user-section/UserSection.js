import React from 'react';

import { useSnackbar } from 'notistack';

import { deleteUser } from 'services/user';

import { ReactComponent as DeleteIcon } from 'assets/images/delete-icon.svg';

import styles from './UserSection.module.scss';

function UserSection(props) {

  const { user, onDelete } = props;

  const { enqueueSnackbar } = useSnackbar();

  async function handleDeleteControlClick() {

    const params = {
      id: user._id
    };

    const response = await deleteUser(params);

    if (response.status !== 200) {

      const message = response.data?.error?.message;

      return enqueueSnackbar(message, { variant: 'error' });

    }

    onDelete(user._id);

    enqueueSnackbar(response.data.message, { variant: 'success' });

  }

  function renderContentRow(label, value) {

    return (
      <div className={styles.contentRow}>
        <label className={styles.contentLabel}>{label}:</label>
        <label className={styles.contentValue}>{value}</label>
      </div>
    );

  }

  function renderDeleteControl() {

    const deleteControlProperties = {
      className: `application-themed-button ${styles.deleteControl}`,
      onClick: handleDeleteControlClick
    };

    return (
      <button {...deleteControlProperties}>
        <DeleteIcon className={styles.deleteIcon} />
      </button>
    );
  }

  return (
    <div className={styles.userSectionMain}>
      {renderContentRow('_id', user._id.toString())}
      {renderContentRow('First name', user.firstName)}
      {renderContentRow('Last name', user.lastName)}
      {renderContentRow('Email', user.email)}
      {renderContentRow('Hash Password', user.password)}
      {renderContentRow('Authentication Type', user.authenticationType)}
      {renderDeleteControl()}
    </div>
  );
}

export default UserSection;