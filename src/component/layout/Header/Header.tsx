import * as styles from './header.scss';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import Wrapper from '../../general/Wrapper';
import routes from '../../../router/routes';
import Logo from '../../../asset/svg/logo.svg';
import LocaleSelector from '../../general/LocaleSelector';
import { VariableNames } from '../../../data/enum/configNames';
import configManager from '../../../config/configManager';

export const Header = ({ activeLocale }) => (
  <header className={styles.header}>
    <Wrapper>
      <div>
        <NavLink exact to={`/${activeLocale}/`}>
          <Logo className={styles.icon} />️<strong>React Skeleton</strong>
        </NavLink>
        {configManager.getVariable(VariableNames.LOCALE_ENABLED) ? <LocaleSelector /> : null}
      </div>
      <nav>
        {routes.map(({ name, path }) => (
          <NavLink key={path} exact to={path.replace(':locale', activeLocale)}>
            {name}
          </NavLink>
        ))}
      </nav>
    </Wrapper>
  </header>
);

export default Header;
