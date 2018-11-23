import * as React from 'react';
import { RouteName } from '../routes';

export default interface IRoute {
  name: RouteName;
  path: string;
  component: React.ComponentClass | React.FunctionComponent;
  exact?: boolean;
  localize?: boolean;
  children?: Array<IRoute>;
}
