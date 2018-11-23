import * as styles from './header.scss';
import * as React from 'react';

import Wrapper from '../../general/Wrapper';
import routes from '../../../router/routes';
import Logo from '../../../asset/svg/logo.svg';
import LocaleSelector from '../../general/LocaleSelector';
import { VariableNames } from '../../../data/enum/configNames';
import configManager from '../../../config/configManager';
import LocalizedNavLink from '../../../locale/component/LocalizedNavLink';

const Header = () => (
  <header className={styles.header}>
    <Wrapper>
      <div>
        <LocalizedNavLink exact to="/">
          <Logo className={styles.icon} />️<strong>React Skeleton</strong>
        </LocalizedNavLink>
        {configManager.getVariable(VariableNames.LOCALE_ENABLED) ? <LocaleSelector /> : null}
      </div>
      <nav>
        {routes.map(({ name, path }) => (
          <LocalizedNavLink exact key={path} to={path}>
            {name}
          </LocalizedNavLink>
        ))}
      </nav>
    </Wrapper>
  </header>
);

export default Header;
