import 'modernizr';
import './asset/style/main.scss';

import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import App from './App';
import store from './store';
import { setDeviceState } from './store/actions/appActions';
import deviceStateTracker from './util/deviceStateTracker';
import { DeviceStateEvent } from 'seng-device-state-tracker';
import LocaleSetup from './locale/LocaleSetup';

// Add the listener for the device state
deviceStateTracker.addEventListener(DeviceStateEvent.STATE_UPDATE, (event: DeviceStateEvent) =>
  store.dispatch(setDeviceState(event.data.state)),
);

// Update the store with the new device state when it changes
store.dispatch(setDeviceState(deviceStateTracker.currentDeviceState.state));

// Render out the root component
render(
  <Provider store={store}>
    <LocaleSetup>
      <App />
    </LocaleSetup>
  </Provider>,
  document.getElementById('app'),
);
