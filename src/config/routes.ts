import Home from '../page/Home';
import Formatters from '../page/Formatters';

export default [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    name: 'Formatters',
    path: '/formatters',
    component: Formatters,
  },
];
