import * as React from 'react';
import Home from '../page/Home';
import Translations from '../page/Translations';
import { localizeRoutes } from '../locale/util/localeUtils';

export interface IRoute {
  name: string;
  path: string;
  component: React.ComponentClass;
  exact?: boolean;
  localize?: boolean;
  children?: Array<IRoute>;
}

const routes: Array<IRoute> = [
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

// export default routes;
export default localizeRoutes(routes);
