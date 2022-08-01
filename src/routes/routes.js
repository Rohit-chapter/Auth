import { LinkedInCallback } from 'react-linkedin-login-oauth2';

import HomePage from "pages/home-page/HomePage";
import LoginPage from "pages/login-page/LoginPage";
import RegistrationPage from 'pages/registration-page/RegistrationPage';

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: <LoginPage />
  },
  {
    path: '/registration',
    name: 'Registration',
    component: <RegistrationPage />
  },
  {
    path: '/home',
    name: 'HomePage',
    component: <HomePage />
  },
  {
    path: '/linkedin',
    name: 'Linkedin',
    component: <LinkedInCallback />
  }
];

export default routes;