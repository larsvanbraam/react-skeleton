import App from './App';
import { connect } from 'react-redux';

const mapStateToProps = ({ app }) => ({
  deviceState: app.deviceState,
});

export default connect(mapStateToProps)(App);
