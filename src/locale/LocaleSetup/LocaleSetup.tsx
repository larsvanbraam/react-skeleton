import * as React from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import configManager from '../../config/configManager';
import { PropertyNames, VariableNames } from '../../data/enum/configNames';
import LocaleProvider from '../LocaleProvider';
import { setActiveLocale } from '../../store/actions/localeActions';
import store from '../../store';
import Param from '../../data/enum/Param';

class LocaleSetup extends React.Component<RouteComponentProps<any>> {
  private static activateLocale(locale): void {
    store.dispatch(setActiveLocale(locale));
  }

  private static wrapWithLocaleProvider(children: any): any {
    if (configManager.getVariable(VariableNames.LOCALE_ENABLED)) {
      return <LocaleProvider>{children}</LocaleProvider>;
    }
    return children;
  }

  /**
   * @private
   * @method static defaultLocale
   */
  private static getDefaultLocale(): string {
    return configManager.getProperty(PropertyNames.DEFAULT_LOCALE);
  }

  public componentDidMount(): void {
    if (configManager.getVariable(VariableNames.LOCALE_ENABLED)) {
      LocaleSetup.activateLocale(
        this.props.match.params[Param.LOCALE] || LocaleSetup.getDefaultLocale(),
      );
    }
  }

  public render() {
    if (!this.props.match.params[Param.LOCALE]) {
      return <Redirect to={`/${LocaleSetup.getDefaultLocale()}`} />;
    }
    return LocaleSetup.wrapWithLocaleProvider(this.props.children);
  }
}

export default LocaleSetup;
