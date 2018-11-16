import * as React from 'react';
import { get } from 'lodash';
import LocaleContext from '../LocaleContext';

interface ILocaleProviderProps {
  activeLocale: string;
  translations: { [key: string]: string };
}

class LocaleProvider extends React.Component<ILocaleProviderProps> {
  /**
   * Retrieve the text from the translations, if it's not found we return the original id
   * @param id
   */
  public getTranslation(id: string): string {
    return get(this.props.translations, id) || id;
  }

  public render() {
    return (
      <LocaleContext.Provider
        value={{
          activeLocale: this.props.activeLocale,
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
