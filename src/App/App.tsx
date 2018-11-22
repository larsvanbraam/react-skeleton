import * as styles from './app.scss';

import * as React from 'react';

import Header from '../component/layout/Header';
import RouteWithSubRoutes from '../router/util/RouteWithSubRoutes';
import routes from '../router/routes';

class App extends React.Component<{ deviceState: number }> {
  public render() {
    return (
      <div className={styles.app}>
        <Header />
        {routes.map(route => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
      </div>
    );
  }
}

export default App;
