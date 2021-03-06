import 'modernizr';
import './asset/style/main.scss';

import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import store from './store';
import { setDeviceState } from './store/actions/appActions';
import deviceStateTracker from './util/deviceStateTracker';
import { DeviceStateEvent } from 'seng-device-state-tracker';
import LocaleSetup from './locale/LocaleSetup';
import Param from './data/enum/Param';
import waitForStyleSheetsLoaded from './util/waitForStyleSheetsLoaded';

// Add the listener for the device state
deviceStateTracker.addEventListener(DeviceStateEvent.STATE_UPDATE, (event: DeviceStateEvent) =>
  store.dispatch(setDeviceState(event.data.state)),
);

// Update the store with the new device state when it changes
store.dispatch(setDeviceState(deviceStateTracker.currentDeviceState.state));

// Render out the root component
function bootstrap() {
  render(
    <Provider store={store}>
      <Router>
        <Route
          path={`/:${Param.LOCALE}?`}
          render={({ match, location }) => (
            <LocaleSetup match={match}>
              <App {...location} />
            </LocaleSetup>
          )}
        />
      </Router>
    </Provider>,
    document.getElementById('app'),
  );
}

if (process.env.NODE_ENV !== 'production') {
  waitForStyleSheetsLoaded(document).then(() => bootstrap());
} else {
  bootstrap();
}
