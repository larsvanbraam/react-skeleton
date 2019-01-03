import routes, { RouteName } from '../routes';

/**
 * Retrieve the route path that is linked to the name
 * @param name The name of the route that you want the path for
 */
export default function(name: RouteName): string {
  const route = routes.find(route => route.name === name);
  if (!route) throw new Error(`Cannot find route for name: ${name}`);
  return route.path;
}
