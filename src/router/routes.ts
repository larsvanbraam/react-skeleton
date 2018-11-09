import Home from '../page/Home';
import Translations from '../page/Translations';

export default [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    name: 'Translations',
    path: '/translations',
    component: Translations,
  },
];
