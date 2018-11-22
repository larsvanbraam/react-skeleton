import * as React from 'react';
import LocaleContext from '../LocaleContext';
import { ILocaleContext } from '../LocaleContext/LocaleContext';

/**
 * The localized text component is used to render out translated strings
 * from the provided matching json files. .
 */
class LocalizedText extends React.Component<{
  id: string;
  render?: (data: any, applyFormatters: (...args: Array<any>) => string) => React.ReactNode;
  formatters?: Array<{ formatter: (...args: Array<any>) => string; args?: any }>;
}> {
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
   * @param context The context of the LocaleContext that provides the translation data.
   */
  private renderTranslation(context: ILocaleContext): React.ReactNode {
    // Localization is disabled so we cannot get a translation;
    if (!context.getTranslation) return this.props.id;
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
    return <LocaleContext.Consumer>{this.renderTranslation.bind(this)}</LocaleContext.Consumer>;
  }
}

export default LocalizedText;
