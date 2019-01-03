import * as React from 'react';
import { NavLink } from 'react-router-dom';
import getRoute from '../../../router/util/getRoute';

/**
 * This component proxies the react router NavLink so you don't have to add
 * the localization every time you want to render out a link.
 *
 * @param activeLocale The active locale mapped from the store
 * @param to The to path that will be localized with the active locale
 * @param children The children that will be rendered inside of the link
 * @param dispatch We do not want to apply this to the nav link so filter it out
 * @param props All the props we want to automatically pass to the children
 * @constructor
 */
const LocalizedNavLink = ({ activeLocale, to, children, dispatch, ...props }) => {
  return (
    <NavLink to={getRoute(to, activeLocale)} {...props}>
      {children}
    </NavLink>
  );
};

export default LocalizedNavLink;
