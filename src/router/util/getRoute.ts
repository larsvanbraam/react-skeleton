import { RouteName } from '../routes';
import getRoutePathByName from './getRoutePathByName';
import { generatePath } from 'react-router';

/**
 * The base interface for all route objects
 */
interface IRouteBase {
  search?: string;
  hash?: string;
  state?: { [key: string]: any };
}

/**
 * Providing a route by it's pathname
 */
interface IRoutePathObject extends IRouteBase {
  pathname: string;
}

/**
 * Fetching a route by it's name instead of providing the full path
 */
interface IRouteNameObject extends IRouteBase {
  name: RouteName;
  params?: { [key: string]: string };
}

/**
 * Helper method that can be used to easily retrieve parsed route objects. It will accept
 * the default react-router formats as described on the docs. But it will also accept the
 * route name as defined in the routes.ts file. Also it allows you to provided the params that
 * need to be replaced within the pathname.
 *
 * Note: If localisation is enabled you will need to provide the active locale separately.
 *
 * @param to
 * @param activeLocale
 */
export default function(
  to: string | IRouteNameObject | IRoutePathObject,
  activeLocale: string,
): string | IRoutePathObject {
  // Create the default object that will be populated with the route data
  let routeObject: IRoutePathObject = { pathname: '' };
  // The default param is the active locale
  let routeParams = { locale: activeLocale };
  // This is the base on which the pattern will be build.
  let pattern = routeObject.pathname;

  if (typeof to === 'object') {
    const { name, params, ...rest } = to as IRouteNameObject;
    const { pathname } = to as IRoutePathObject;
    routeObject = { ...routeObject, ...rest };
    routeParams = { ...routeParams, ...params };
    if (name) {
      pattern = getRoutePathByName(name);
    } else if (pathname) {
      pattern = pathname;
    } else {
      throw new Error(`Missing name or pathname in provided route object. ${JSON.stringify(to)}`);
    }
  } else {
    pattern = Object.values(RouteName).includes(to) ? getRoutePathByName(to as RouteName) : to;
  }

  // Generate the path using the react-router method.
  routeObject.pathname = generatePath(pattern, routeParams);

  return routeObject;
}
