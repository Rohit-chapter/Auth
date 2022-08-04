import React, { useContext } from 'react';

import { Navigate } from 'react-router-dom';

import AuthContext from 'context/authentication-context';

function ProtectedRoute(props) {

  const authenticationContext = useContext(AuthContext);

  if (authenticationContext.isAuthenticated === false) {
    return <Navigate to={'/'} />;
  }

  return props.children;
}

export default ProtectedRoute;