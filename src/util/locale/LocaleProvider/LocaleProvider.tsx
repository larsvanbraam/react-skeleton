import * as React from 'react';
import LocaleContext from '../LocaleContext';
import { get } from 'lodash';

interface ILocaleProviderProps {
  locale: string;
  translations: { [key: string]: string };
}

class LocaleProvider extends React.Component<ILocaleProviderProps> {
  /**
   * Retrieve the text from the translations
   */
  public getTranslation(id: string): string {
    return get(this.props.translations, id) || id;
  }

  public render() {
    return (
      <LocaleContext.Provider
        value={{
          locale: this.props.locale,
          translations: this.props.translations,
          getTranslation: this.getTranslation.bind(this),
        }}
      >
        {this.props.children}
      </LocaleContext.Provider>
    );
  }
}

export default LocaleProvider;