import React, { useRef } from 'react';

import { SnackbarProvider } from "notistack";

import { ReactComponent as CloseIcon } from 'assets/images/close-icon.svg';

import styles from './Snackbar.module.scss';

function Snackbar(props) {

  const snackbarReference = useRef(null);

  function handleSnackbarCloseControlClick(key) {

    const element = snackbarReference.current;

    if (element === null) {
      return;
    }

    element.closeSnackbar(key);

  };

  function renderSnackbarCloseControl(key) {

    const closeButtonAttributes = {
      className: styles.closeButtonControl,
      onClick() {
        handleSnackbarCloseControlClick(key);
      }
    };

    return (
      <button {...closeButtonAttributes}>
        <CloseIcon className={styles.closeIcon} />
      </button>
    );
  }

  const snackbarProviderProperties = {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
    preventDuplicate: true,
    autoHideDuration: 3000,
    maxSnack: 3,
    action: renderSnackbarCloseControl,
    ref: snackbarReference
  };

  return (
    <SnackbarProvider {...snackbarProviderProperties}>
      {props.children}
    </SnackbarProvider>
  );
}

export default Snackbar;