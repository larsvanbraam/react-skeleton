import * as React from 'react';
import LocaleContext from '../LocaleContext';
import { ILocaleContext } from '../LocaleContext/LocaleContext';

interface LocalizedTextProps {
  id: string;
  render?: (data: any, applyFormatters: (...args: Array<any>) => string) => React.ReactNode;
  formatters?: Array<{ formatter: (...args: Array<any>) => string; args: any }>;
}

export default class LocalizedText extends React.Component<LocalizedTextProps> {
  private static defaultProps = {
    formatters: [],
  };

  /**
   * @private
   * @method applyFormatters
   */
  private applyFormatters(translation: string): string {
    return this.props.formatters.reduce((currentTranslation, { formatter, args }) => {
      return formatter(currentTranslation, args);
    }, translation);
  }

  /**
   * Render the translation either through the render method or return the
   * translated string if no render method is provided.
   *
   * @param context
   */
  private renderTranslation(context: ILocaleContext): React.ReactNode {
    // Get the translation from the context
    const translation = context.getTranslation(this.props.id);

    // Use the custom render method if it's provided
    if (this.props.render) {
      return this.props.render(translation, this.applyFormatters.bind(this));
    }

    // Return the translation if no custom render method is provided
    return this.applyFormatters(translation);
  }

  public render() {
    return (
      <React.Fragment>
        <LocaleContext.Consumer>
          {context => this.renderTranslation(context)}
        </LocaleContext.Consumer>
      </React.Fragment>
    );
  }
}
