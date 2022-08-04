import React, { useState, useEffect, useCallback } from "react";

import { useNavigate } from "react-router-dom";

import localStorageKeys from "constants/local-storage-keys";

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

  const [token, setToken] = useState(initialToken);

  const userLoggedIn = !!token;

  const logoutHandler = useCallback(() => {

    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    setToken(null);

    navigate('/');

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authenticationHandler = (accessToken) => {

    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, JSON.stringify(accessToken));
    setToken(accessToken.token);

    const remainingTime = calculateRemainingTime(accessToken.expiresAt);

    logoutTimer = setTimeout(logoutHandler, remainingTime);

  };

  useEffect(() => {

    if (tokenData === null) {
      return;
    }

    logoutTimer = setTimeout(logoutHandler, tokenData.duration);

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
