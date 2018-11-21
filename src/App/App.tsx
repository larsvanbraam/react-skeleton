import * as styles from './app.scss';

import * as React from 'react';
import { hot } from 'react-hot-loader';

import Header from '../component/layout/Header';
import LocaleSetup from '../locale/LocaleSetup';

class App extends React.Component<{ deviceState: number; locale: string }> {
  public render() {
    return (
      <div className={styles.app}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default hot(module)(App);
