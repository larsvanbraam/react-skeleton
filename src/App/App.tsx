import * as styles from './app.scss';

import * as React from 'react';

import RouteWithSubRoutes from '../router/util/RouteWithSubRoutes';
import routes, { notFoundPath } from '../router/routes';
import { Redirect, Switch } from 'react-router';

class App extends React.Component<{ deviceState: number; activeLocale: any }> {
  public render() {
    return (
      <div className={styles.app}>
        <Switch>
          {routes.map(route => (
            <RouteWithSubRoutes key={route.path} {...route} />
          ))}
          <Redirect to={notFoundPath} />
        </Switch>
      </div>
    );
  }
}

export default App;
