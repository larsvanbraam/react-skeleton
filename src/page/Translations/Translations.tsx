import * as styles from './translations.scss';

import * as React from 'react';

import Wrapper from '../../component/general/Wrapper';
import LocalizedText from '../../locale/component/LocalizedText';
import { renderParagraphs } from '../../locale/LocaleHelper';
import replaceFormatter from '../../locale/util/formatter/replaceFormatter';
import pluralFormatter from '../../locale/util/formatter/pluralFormatter';
import Header from '../../component/layout/Header';

class Translations extends React.Component {
  state = {
    replaceValue: 'fox',
    dogCount: 1,
  };

  /**
   * @private
   * @method handleReplaceValueChange
   */
  private handleReplaceValueChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({ ...this.state, ...{ replaceValue: event.currentTarget.value } });
  }

  /**
   * @private
   * @method handleCountChange
   */
  private handleCountChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({ ...this.state, ...{ dogCount: parseInt(event.currentTarget.value, 10) } });
  }

  public render() {
    return (
      <section className={styles.translations}>
        <Header />
        <Wrapper>
          <section>
            <h2>
              <LocalizedText id="translations.introduction.heading" />
            </h2>
            <LocalizedText id="translations.introduction.paragraphs" render={renderParagraphs} />
            <div className={styles.example}>
              <h3>Default example</h3>
              <pre>{'<LocalizedText id="translation.selector" />'}</pre>
              <h3>Formatters example</h3>
              <pre>
                {`<LocalizedText
  id="translation.selector"
  formatters="[
    {
      formatter: replaceFormatter,
      args: {
        varToReplace: 'valueToReplaceVarWith'
      }
    }
  ]"/>`}
              </pre>
              <h3>Render example</h3>
              <pre>
                {`<LocalizedText
  id="translation.selector"
  render="(translation) => <p>{translation}</p>"/>`}
              </pre>
              <h3>Render with formatters example</h3>
              <pre>
                {`<LocalizedText
  id="translation.selector"
  formatters="[
    {
      formatter: replaceFormatter,
      args: {
        varToReplace: 'valueToReplaceVarWith'
      }
    }
  ]"
  render="(translation, applyFormatters) => <p>{applyFormatters(translation)}</p>"/>`}
              </pre>
            </div>
          </section>
          <section>
            <h2>
              <LocalizedText id="translations.formatters.heading" />
            </h2>
            <LocalizedText id="translations.formatters.paragraphs" render={renderParagraphs} />
            <div className={styles.example}>
              <h3>
                <LocalizedText id="translations.formatters.example.replacement.heading" />
              </h3>
              <p>
                <LocalizedText id="translations.formatters.example.replacement.description" />
              </p>
              <div>
                <h4>Source</h4>
                <pre>
                  <LocalizedText id="translations.formatters.example.replacement.text" />
                </pre>
              </div>
              <div>
                <h4>Input</h4>
                <input
                  type="text"
                  value={this.state.replaceValue}
                  onChange={this.handleReplaceValueChange.bind(this)}
                />
              </div>
              <div>
                <h4>Result</h4>
                <pre>
                  <LocalizedText
                    id="translations.formatters.example.replacement.text"
                    formatters={[
                      {
                        formatter: replaceFormatter,
                        args: {
                          animal: this.state.replaceValue,
                        },
                      },
                    ]}
                  />
                </pre>
              </div>
            </div>
            <div className={styles.example}>
              <h3>
                <LocalizedText id="translations.formatters.example.plural.heading" />
              </h3>
              <p>
                <LocalizedText id="translations.formatters.example.plural.description" />
              </p>
              <div>
                <h4>Source</h4>
                <pre>
                  <LocalizedText id="translations.formatters.example.plural.text" />
                </pre>
              </div>
              <div>
                <h4>Input</h4>
                <input
                  type="number"
                  value={this.state.dogCount}
                  onChange={this.handleCountChange.bind(this)}
                />
              </div>
              <div>
                <h4>Result</h4>
                <pre>
                  <LocalizedText
                    id="translations.formatters.example.plural.text"
                    formatters={[
                      {
                        formatter: pluralFormatter,
                        args: {
                          count: this.state.dogCount,
                        },
                      },
                    ]}
                  />
                </pre>
              </div>
            </div>
          </section>
        </Wrapper>
      </section>
    );
  }
}

export default Translations;
