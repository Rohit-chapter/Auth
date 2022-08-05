import Home from "components/home-page/home/Home";
import Users from "components/home-page/users/Users";

const authenticationRoutesData = [
  {
    path: '',
    label: 'Home',
    element: <Home />
  },
  {
    path: 'users',
    label: 'Users',
    element: <Users />
  },
  {
    path: 'profile',
    label: 'Profile',
    element: <h1>Profile main</h1>
  },
];

export default authenticationRoutesData;