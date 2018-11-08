import * as styles from './home.scss';

import * as React from 'react';

import Wrapper from '../../component/general/Wrapper';
import LocalizedText from '../../util/locale/LocalizedText';
import { renderParagraphs } from '../../util/locale/LocaleHelper';
import replaceFormatter from '../../util/locale/formatter/replaceFormatter';
import pluralFormatter from '../../util/locale/formatter/pluralFormatter';

class Home extends React.Component {
  public state = {
    replaceCount: 5,
  };

  public render() {
    return (
      <section className={styles.home}>
        <Wrapper>
          <h2>
            <LocalizedText id="home.heading" />
          </h2>
          <LocalizedText
            id="home.paragraphs"
            render={renderParagraphs}
            formatters={[
              {
                formatter: replaceFormatter,
                args: {
                  count: this.state.replaceCount,
                },
              },
              {
                formatter: pluralFormatter,
                args: {
                  count: this.state.replaceCount,
                },
              },
            ]}
          />
        </Wrapper>
      </section>
    );
  }
}

export default Home;
