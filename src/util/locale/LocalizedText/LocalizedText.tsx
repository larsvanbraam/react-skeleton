import * as React from 'react';
import LocaleContext from '../LocaleContext';
import { ILocaleContext } from '../LocaleContext/LocaleContext';

interface LocalizedTextProps {
  id: string;
  render?: (data: any) => React.ReactNode;
}

export default class LocalizedText extends React.Component<LocalizedTextProps> {
  /**
   * Render the translation either through the render method or return the
   * translated string if no render method is provided.
   *
   * @param context
   */
  public renderTranslation(context: ILocaleContext): React.ReactNode {
    // Get the translation from the context
    const translation = context.getTranslation(this.props.id);

    // Use the custom render method if it's provided
    if (this.props.render) {
      return this.props.render(translation);
    }

    // Return the translation if no custom render method is provided
    return translation;
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
