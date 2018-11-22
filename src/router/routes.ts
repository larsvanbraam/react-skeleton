import Home from '../page/Home';
import Translations from '../page/Translations';
import { localizeRoutes } from '../locale/util/localeUtils';
import IRoute from './interface/IRoute';
import { PropertyNames, VariableNames } from '../data/enum/configNames';
import configManager from '../config/configManager';

/**
 * Enum containing all the names of the routes that are used in the application
 *
 * Example usage:
 * ```typescript
 * ...
 * HOME = 'home',
 * ...
 * ```
 */
export enum RouteName {
  HOME = 'home',
  TRANSLATIONS = 'translations',
}

/**
 * Array containing all the routes that are used in the application
 *
 * Example usage:
 * ```typescript
 * ...
 * {
 *   name: RouteName.HOME,
 *   path: '/',
 *   component: Home,
 *   exact: true,
 * },
 * ...
 * ```
 */
const routes: Array<IRoute> = [
  {
    name: RouteName.HOME,
    path: '/',
    component: Home,
    exact: true,
  },
  {
    name: RouteName.TRANSLATIONS,
    path: '/translations',
    component: Translations,
  },
];

const localeRoutingEnabled =
  configManager.getVariable(VariableNames.LOCALE_ENABLED) &&
  configManager.getVariable(VariableNames.LOCALE_ROUTING_ENABLED);

export default (localeRoutingEnabled ? localizeRoutes(routes) : routes);
