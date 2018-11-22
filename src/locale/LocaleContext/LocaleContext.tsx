import * as React from 'react';

/**
 * Create an interface for the localeContext so we get fancy auto completion
 * on the provider consumers.
 */
export interface ILocaleContext {
  activeLocale: string;
  translations: { [key: string]: any };
  getTranslation: (id: string) => any;
}

/**
 * The localeContext that is used to pass along the translations and the methods that
 * are required to easily retrieve the translations from the Redux store.
 */
const LocaleContext = React.createContext<ILocaleContext>({
  activeLocale: null,
  translations: {},
  getTranslation: null,
});

export default LocaleContext;
