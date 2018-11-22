import trim from 'lodash/trim';
import Param from '../../data/enum/Param';

import configManager from '../../config/configManager';
import { PropertyNames } from '../../data/enum/configNames';
import IRoute from '../../router/interface/IRoute';

/**
 * Update the active locale in the URL
 * @param newLocale
 * @param oldLocale
 */
export function updateLocaleURL(newLocale: string, oldLocale: string): void {
  history.replaceState({}, '', window.location.pathname.replace(oldLocale, newLocale));
}

/**
 * Check if a locale is supported
 */
export function isValidLocale(locale: string): boolean {
  const locales = configManager.getProperty(PropertyNames.LOCALES);

  return locales.includes(locale);
}

/**
 * Prefix the current path with the provided prefix
 * @param path
 * @param prefix
 */
export function prefixPath(path: string, prefix: string) {
  return `/${prefix}/${trim(path, '/')}`;
}

/**
 * Modify the routes so they contain the locale param in them.
 * @param routes
 */
export function localizeRoutes(routes: Array<IRoute>) {
  return routes.map(route => {
    // we default to localizing
    if (route.localize !== false) {
      return {
        ...route,
        path: prefixPath(route.path, `:${Param.LOCALE}`),
      };
    }

    return { ...route };
  });
}
