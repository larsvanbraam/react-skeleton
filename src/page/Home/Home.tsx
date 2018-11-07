import * as styles from './home.scss';

import * as React from 'react';

import Wrapper from '../../component/general/Wrapper';
import LocalizedText from '../../util/locale/LocalizedText';

class Home extends React.Component {
  private static renderParagraphs(translation: string | Array<string>): React.ReactNode {
    return Array.isArray(translation)
      ? translation.map(item => <p key={item}>{item}</p>)
      : translation;
  }

  public render() {
    return (
      <section className={styles.home}>
        <Wrapper>
          <h2>
            <LocalizedText id="home.heading" />
          </h2>
          <LocalizedText id="home.paragraphs" render={Home.renderParagraphs} />
        </Wrapper>
      </section>
    );
  }
}

export default Home;
