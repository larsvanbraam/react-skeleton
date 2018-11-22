import * as React from 'react';
import { match, Redirect } from 'react-router-dom';
import configManager from '../../config/configManager';
import { PropertyNames, VariableNames } from '../../data/enum/configNames';
import LocaleProvider from '../LocaleProvider';
import { setActiveLocale } from '../../store/actions/localeActions';
import store from '../../store';
import Param from '../../data/enum/Param';
import { isValidLocale, updateLocaleURL } from '../util/localeUtils';

/**
 * The LocaleSetup will prepare the application to work with localization, when localization
 * is turned on it will conditionally wrap the application in a LocaleProvider to provide
 * child components with the LocaleContext. if localized routing is also enabled it will
 * also make sure that the application has a valid route in the url when initialized.
 */
class LocaleSetup extends React.Component<{ match: match<{ [Param.LOCALE]: string }> }> {
  /**
   * A shorthand static value for retrieving the default locale from the config manager.
   */
  private static DEFAULT_LOCALE = configManager.getProperty(PropertyNames.DEFAULT_LOCALE);

  /**
   * A shorthand static value for checking if locale is actually enabled.
   */
  private static LOCALE_ENABLED = configManager.getVariable(VariableNames.LOCALE_ENABLED);

  /**
   * A shorthand static value for checking if locale routing is actually enabled.
   */
  private static LOCALE_ROUTING_ENABLED = configManager.getVariable(
    VariableNames.LOCALE_ROUTING_ENABLED,
  );

  /**
   * If the locale is enabled we want to wrap the application in a LocaleProvider that provides
   * all child components with the LocaleContext so we can render out localized text.
   * @param children The child components that should be wrapped with the LocaleProvider
   */
  private static wrapWithLocaleProvider(children: React.ReactNode): any {
    if (LocaleSetup.LOCALE_ENABLED) {
      return <LocaleProvider>{children}</LocaleProvider>;
    }
    return children;
  }

  /**
   * When the component is mounted we want to check if a valid locale is provided in the url.
   * If no locale is provided we fallback to the default locale or if an invalid locale is
   * provided we also fallback to the default locale.
   */
  public componentDidMount(): void {
    if (LocaleSetup.LOCALE_ENABLED) {
      const locale = this.props.match.params[Param.LOCALE];
      const defaultLocale = LocaleSetup.DEFAULT_LOCALE;

      store.dispatch(setActiveLocale(locale || defaultLocale));

      if (!isValidLocale(locale)) {
        updateLocaleURL(defaultLocale, locale);
      }
    }
  }

  public render() {
    if (LocaleSetup.LOCALE_ROUTING_ENABLED && !this.props.match.params[Param.LOCALE]) {
      return <Redirect to={`/${LocaleSetup.DEFAULT_LOCALE}`} />;
    }
    return LocaleSetup.wrapWithLocaleProvider(this.props.children);
  }
}

export default LocaleSetup;
