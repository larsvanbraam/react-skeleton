import Home from '../page/Home';
import Translations from '../page/Translations';

export default [
  {
    name: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    name: 'Translations',
    path: '/translations',
    component: Translations,
  },
];
