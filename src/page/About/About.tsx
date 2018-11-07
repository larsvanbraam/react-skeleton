import * as styles from './about.scss';

import * as React from 'react';

import Wrapper from '../../component/general/Wrapper';
import LocalizedText from '../../util/locale/LocalizedText';

class About extends React.Component {
  private static renderParagraphs(translation: string | Array<any>): React.ReactNode {
    return Array.isArray(translation)
      ? translation.map(item => <p key={item.value}>{item.value}</p>)
      : translation;
  }

  public render() {
    return (
      <section className={styles.about}>
        <Wrapper>
          <h2>
            <LocalizedText id="about.heading" />
          </h2>
          <LocalizedText id="about.paragraphs" render={About.renderParagraphs} />
        </Wrapper>
      </section>
    );
  }
}

export default About;
