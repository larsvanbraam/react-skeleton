import * as styles from './header.scss';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import Wrapper from '../../general/Wrapper';
import routes from '../../../router/routes';
import Logo from '../../../asset/svg/logo.svg';
import LocaleSelector from '../../general/LocaleSelector';

export const Header = () => (
  <header className={styles.header}>
    <Wrapper>
      <div>
        <NavLink exact to="/">
          <Logo className={styles.icon} />️<strong>React Skeleton</strong>
        </NavLink>
        <LocaleSelector />
      </div>
      <nav>
        {routes.map(({ name, path }) => (
          <NavLink key={path} exact to={path}>
            {name}
          </NavLink>
        ))}
      </nav>
    </Wrapper>
  </header>
);

export default Header;
