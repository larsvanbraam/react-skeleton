import * as React from 'react';
import get from 'lodash/get';
import LocaleContext from '../LocaleContext';

/**
 * The LocaleProvider will wrap the children with the LocaleContext so we can easily call
 * the getTranslation method without having to map the store props every time.
 */
class LocaleProvider extends React.Component<{
  activeLocale: string;
  translations: { [key: string]: string };
}> {
  /**
   * Retrieve the text from the translations, if it's not found we return the original id
   * @param id The id of the translation, this is a dot notation of the object structure.
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
