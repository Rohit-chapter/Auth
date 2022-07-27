import { LinkedInCallback } from "react-linkedin-login-oauth2";

import HomePage from "pages/home-page/HomePage";
import LoginPage from "pages/login-page/LoginPage";
import ScrollspyPage from "pages/scrollspy-page/ScrollspyPage";

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
    name: 'Linkedin',
    component: <LinkedInCallback />
  },
  {
    path: '/scrollspy',
    name: 'Scrollspy',
    component: <ScrollspyPage />
  }
];

export default routes;