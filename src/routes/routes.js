import { LinkedInCallback } from "react-linkedin-login-oauth2";

import HomePage from "pages/home-page/HomePage";
import LoginPage from "pages/login-page/LoginPage";

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: <LoginPage />
  },
  {
    path: '/home',
    name: 'HomePage',
    component: <HomePage />
  },
  {
    path: '/linkedin',
    name: 'linkedin',
    component: <LinkedInCallback />
  }
];

export default routes;