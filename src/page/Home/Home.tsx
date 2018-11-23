import * as styles from './Home.scss';

import * as React from 'react';

import Wrapper from '../../component/general/Wrapper';
import LocalizedText from '../../locale/component/LocalizedText';
import Header from '../../component/layout/Header';

class Home extends React.Component {
  public state = {
    replaceCount: 5,
  };

  public render() {
    return (
      <section className={styles.home}>
        <Header />
        <Wrapper>
          <h2>
            <LocalizedText id="home.heading" />
          </h2>
          <p>
            <LocalizedText id={'home.paragraph'} />
          </p>
          <pre>{`$ yarn clean`}</pre>
        </Wrapper>
      </section>
    );
  }
}

export default Home;
