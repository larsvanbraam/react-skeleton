import * as React from 'react';

const LocaleContext = React.createContext({
  locale: null,
  translations: {},
  getText: null,
  hasText: null,
});

export default LocaleContext;
