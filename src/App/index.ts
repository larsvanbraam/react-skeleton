import App from './App';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

const mapStateToProps = ({ app }) => ({
  deviceState: app.deviceState,
});

export default connect(mapStateToProps)(hot(module)(App));
