import App from './App';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import configManager from '../config/configManager';
import { VariableNames } from '../data/enum/configNames';

const mapStateToProps = ({ app, locale }) => ({
  deviceState: app.deviceState,
  ...(configManager.getVariable(VariableNames.LOCALE_ENABLED)
    ? {
        activeLocale: locale.activeLocale,
      }
    : {}),
});

export default connect(mapStateToProps)(hot(module)(App));
