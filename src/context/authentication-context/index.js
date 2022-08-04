import React, { useState, useEffect, useCallback } from "react";

import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

import localStorageKeys from "constants/local-storage-keys";

import { logoutUser } from "services/auth";

import { calculateRemainingTime, retrieveStoredToken } from "./utilities";

const AuthContext = React.createContext({
  token: "",
  isAuthenticated: false,
  onAuthenticate: (token) => { },
  onLogout: () => { }
});

let logoutTimer;

export function AuthContextProvider(props) {

  const tokenData = retrieveStoredToken();
  const initialToken = tokenData?.token;

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [token, setToken] = useState(initialToken);

  const userLoggedIn = !!token;

  const logoutHandler = useCallback(async (sessionExpired) => {

    try {

      await logoutUser();

      localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
      setToken(null);

      showToastMessage(sessionExpired);

      navigate('/');

      if (logoutTimer) {
        clearTimeout(logoutTimer);
      }

    } catch (exception) {
      enqueueSnackbar(JSON.stringify(exception), { variant: 'error' });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showToastMessage = (sessionExpired) => {

    if (sessionExpired === true) {
      return enqueueSnackbar('Sorry your access token has expired. Please login again!', { variant: 'error' });
    }

    enqueueSnackbar('Logout successfully!', { variant: 'success' });
  };

  const authenticationHandler = (accessToken) => {

    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, JSON.stringify(accessToken));
    setToken(accessToken.token);

    const remainingTime = calculateRemainingTime(accessToken.expiresAt);

    logoutTimer = setTimeout(() => logoutHandler(true), remainingTime);

  };

  useEffect(() => {

    if (tokenData === null) {
      return;
    }

    if (tokenData.duration <= 6000) {
      logoutHandler(true);
    }

    logoutTimer = setTimeout(() => logoutHandler(true), tokenData.duration);

    return () => {
      clearTimeout(logoutTimer);
    };

  }, [tokenData, logoutHandler]);

  const contextValue = {
    token,
    isAuthenticated: userLoggedIn,
    onAuthenticate: authenticationHandler,
    onLogout: logoutHandler
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
