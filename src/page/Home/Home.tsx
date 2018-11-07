import * as styles from './home.scss';

import * as React from 'react';

import Wrapper from '../../component/general/Wrapper';
import LocalizedText from '../../util/locale/LocalizedText';
import { renderParagraphs } from '../../util/locale/LocaleHelper';

class Home extends React.Component {
  public render() {
    return (
      <section className={styles.home}>
        <Wrapper>
          <h2>
            <LocalizedText id="home.heading" />
          </h2>
          <LocalizedText id="home.paragraphs" render={renderParagraphs} />
        </Wrapper>
      </section>
    );
  }
}

export default Home;
