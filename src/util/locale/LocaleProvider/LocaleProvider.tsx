import * as React from 'react';
import LocaleContext from '../LocaleContext';

interface ILocaleProviderProps {
  locale: string;
  translations: { [locale: string]: { [key: string]: string } };
}

class LocaleProvider extends React.Component<ILocaleProviderProps> {
  /**
   * Retrieve the text from the translations
   */
  public getText(id: string): string {
    return this.props.translations[this.props.locale][id] || id;
  }

  /**
   * Check if the translations contain the provided id
   */
  public hasText(id: string): boolean {
    return this.props.translations[this.props.locale][id] !== undefined;
  }

  public render() {
    return (
      <LocaleContext.Provider
        value={{
          locale: this.props.locale,
          translations: this.props.translations,
          getText: this.getText.bind(this),
          hasText: this.hasText.bind(this),
        }}
      >
        {this.props.children}
      </LocaleContext.Provider>
    );
  }
}

export default LocaleProvider;
