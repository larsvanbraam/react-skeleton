import * as styles from './formatters.scss';

import * as React from 'react';

import Wrapper from '../../component/general/Wrapper';
import LocalizedText from '../../util/locale/LocalizedText';
import { renderParagraphs } from '../../util/locale/LocaleHelper';
import replaceFormatter from '../../util/locale/formatter/replaceFormatter';

class Formatters extends React.Component {
  public render() {
    return (
      <section className={styles.formatters}>
        <Wrapper>
          <h2>
            <LocalizedText id="formatters.heading" />
          </h2>
          <LocalizedText id="formatters.paragraphs" render={renderParagraphs} />
          <section>
            <h3>
              <LocalizedText id="formatters.example.replacement.heading" />
            </h3>
            <pre>
              <LocalizedText id="formatters.example.replacement.text" />
            </pre>
            <pre>
              <LocalizedText
                id="formatters.example.replacement.text"
                formatters={[
                  {
                    formatter: replaceFormatter,
                    args: {
                      animal: 'dog',
                    },
                  },
                ]}
              />
            </pre>
          </section>
        </Wrapper>
      </section>
    );
  }
}

export default Formatters;
