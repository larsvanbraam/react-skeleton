import * as styles from './about.scss';

import * as React from 'react';

import Wrapper from '../../component/general/Wrapper';
import LocalizedText from '../../util/locale/LocalizedText';
import { renderParagraphs } from '../../util/locale/LocaleHelper';

class About extends React.Component {
  public render() {
    return (
      <section className={styles.about}>
        <Wrapper>
          <h2>
            <LocalizedText id="about.heading" />
          </h2>
          <LocalizedText id="about.paragraphs" render={renderParagraphs} />
        </Wrapper>
      </section>
    );
  }
}

export default About;
