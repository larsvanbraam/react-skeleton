import LocalizedNavLink from './LocalizedNavLink';
import { connect } from 'react-redux';
import configManager from '../../../config/configManager';
import { VariableNames } from '../../../data/enum/configNames';

const mapStateToProps = ({ locale }) => ({
  ...(configManager.getVariable(VariableNames.LOCALE_ENABLED)
    ? {
        activeLocale: locale.activeLocale,
      }
    : {}),
});

export default connect(mapStateToProps)(LocalizedNavLink);
