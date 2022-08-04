import { Route, Routes } from "react-router-dom";
import { LinkedInCallback } from "react-linkedin-login-oauth2";

import LoginPage from "pages/login-page/LoginPage";
import RegistrationPage from "pages/registration-page/RegistrationPage";
import HomePage from "pages/home-page/HomePage";
import ProtectedRoute from "./ProtectedRoute";

function RouteComponent() {

  function renderLoginPageRoute() {

    const loginRouteProperties = {
      path: '/',
      element: <LoginPage />
    };

    return <Route {...loginRouteProperties} />;

  }

  function renderRegistrationPageRoute() {

    const registrationRouteProperties = {
      path: '/registration',
      element: <RegistrationPage />
    };

    return <Route {...registrationRouteProperties} />;

  }

  function renderLinkedinCallbackRoute() {

    const linkedinRouteProperties = {
      path: '/linkedin',
      element: <LinkedInCallback />
    };

    return <Route {...linkedinRouteProperties} />;

  }

  function renderHomePageRoute() {

    const homeRouteProperties = {
      path: '/home/*',
      element: (
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      )
    };

    return (
      <Route {...homeRouteProperties} />
    );

  }

  return (
    <Routes>
      {renderLoginPageRoute()}
      {renderRegistrationPageRoute()}
      {renderLinkedinCallbackRoute()}
      {renderHomePageRoute()}
    </Routes>
  );
}

export default RouteComponent;