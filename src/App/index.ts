import App from './App';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

const mapStateToProps = ({ app, locale }) => ({
  deviceState: app.deviceState,
  activeLocale: locale.activeLocale,
});

export default connect(mapStateToProps)(hot(module)(App));
