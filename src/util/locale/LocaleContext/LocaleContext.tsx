import * as React from 'react';

export interface ILocaleContext {
  activeLocale: string;
  translations: { [key: string]: any };
  getTranslation: (id: string) => any;
}

const LocaleContext = React.createContext<ILocaleContext>({
  activeLocale: null,
  translations: {},
  getTranslation: null,
});

export default LocaleContext;
