import Header from './Header';

import { connect } from 'react-redux';
import { VariableNames } from '../../../data/enum/configNames';
import configManager from '../../../config/configManager';

const mapStateToProps = ({ locale }) => ({
  ...(configManager.getVariable(VariableNames.LOCALE_ENABLED)
    ? {
        activeLocale: locale.activeLocale,
      }
    : {}),
});

export default connect(mapStateToProps)(Header);
