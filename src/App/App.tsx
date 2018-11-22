import * as styles from './app.scss';

import * as React from 'react';
import { hot } from 'react-hot-loader';

import Header from '../component/layout/Header';

class App extends React.Component<{ deviceState: number; }> {
  public render() {
    console.log('App render triggered');
    return (
      <div className={styles.app}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default hot(module)(App);
