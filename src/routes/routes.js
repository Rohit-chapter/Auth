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
  }
];

export default routes;