import * as React from 'react';
import configManager from '../../config/configManager';
import { VariableNames, PropertyNames } from '../../data/enum/configNames';
import LocaleProvider from '../LocaleProvider';
import { setActiveLocale } from '../../store/actions/localeActions';
import store from '../../store';

const LocaleSetup = ({ children }) => {
  if (configManager.getVariable(VariableNames.LOCALE_ENABLED)) {
    // Add the default locale and activate it when it's loaded!
    const locale = configManager.getProperty(PropertyNames.DEFAULT_LOCALE);
    // Activate the default locale
    store.dispatch(setActiveLocale(locale));
    // Wrap the app in the locale provider
    return <LocaleProvider>{children}</LocaleProvider>;
  }

  return children;
};

export default LocaleSetup;
