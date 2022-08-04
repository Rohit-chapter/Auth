import Home from "components/home-page/home/Home";

const authenticationRoutesData = [
  {
    path: '',
    label: 'Home',
    element: <Home />
  },
  {
    path: 'users',
    label: 'Users',
    element: <h1>Users main</h1>
  },
  {
    path: 'profile',
    label: 'Profile',
    element: <h1>Profile main</h1>
  },
];

export default authenticationRoutesData;