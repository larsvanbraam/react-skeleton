import * as React from 'react';

const LocaleContext = React.createContext({
  locale: null,
  translations: {},
  getTranslation: null,
});

export default LocaleContext;
