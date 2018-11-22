import * as styles from './header.scss';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import Wrapper from '../../general/Wrapper';
import routes from '../../../router/routes';
import Logo from '../../../asset/svg/logo.svg';
import LocaleSelector from '../../general/LocaleSelector';
import { VariableNames } from '../../../data/enum/configNames';
import configManager from '../../../config/configManager';
import Param from '../../../data/enum/Param';

class Header extends React.Component<{ activeLocale: string }> {
  /**
   * Localize the path by replacing the locale with the actual active locale
   * @param path
   */
  private localizePath(path: string): string {
    return path.replace(`:${Param.LOCALE}`, this.props.activeLocale || 'nl');
  }

  /**
   * @private
   * @method getNavLink
   */
  private getNavLink({ name, path }): React.ReactNode {
    return (
      <NavLink exact key={this.localizePath(path)} to={this.localizePath(path)}>
        {name}
      </NavLink>
    );
  }

  public render() {
    return (
      <header className={styles.header}>
        <Wrapper>
          <div>
            <NavLink exact to={this.localizePath(`/:${Param.LOCALE}/`)}>
              <Logo className={styles.icon} />️<strong>React Skeleton</strong>
            </NavLink>
            {configManager.getVariable(VariableNames.LOCALE_ENABLED) ? <LocaleSelector /> : null}
          </div>
          <nav>{routes.map(this.getNavLink.bind(this))}</nav>
        </Wrapper>
      </header>
    );
  }
}

export default Header;
