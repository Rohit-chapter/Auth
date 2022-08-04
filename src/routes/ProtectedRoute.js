import React, { useContext } from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import AuthContext from 'context/authentication-context';

function ProtectedRoute() {

  const authenticationContext = useContext(AuthContext);

  if (authenticationContext.isAuthenticated === false) {
    return <Navigate to={'/'} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;