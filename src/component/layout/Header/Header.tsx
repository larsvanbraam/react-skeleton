import * as styles from './header.scss';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import Wrapper from '../../general/Wrapper';
import routes from '../../../config/routes';
import Logo from '../../../asset/svg/logo.svg';

export const Header = () => (
  <header className={styles.header}>
    <Wrapper>
      <NavLink exact to="/">
        <Logo className={styles.icon} />️<strong>React Skeleton</strong>
      </NavLink>
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
