import Home from './pages/home/Home';

export const routes = [
  {
    path: process.env.PUBLIC_URL + '/',
    name: 'Home',
    component: Home,
    menu: null,
  },
];
