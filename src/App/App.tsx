import * as styles from './app.scss';

import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import routes from '../config/routes';
import Header from '../component/layout/Header';
import RouteWithSubRoutes from '../util/RouteWithSubRoutes';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className={styles.app}>
          <Header />
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
