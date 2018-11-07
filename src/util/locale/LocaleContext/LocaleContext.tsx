import * as React from 'react';

const LocaleContext = React.createContext({
  activeLocale: null,
  translations: {},
  getTranslation: null,
});

export default LocaleContext;
