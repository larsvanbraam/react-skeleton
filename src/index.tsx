import 'modernizr';
import './asset/style/main.scss';

import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';

import App from './App';
import reducers from './reducers';
import { setDeviceState } from './actions';
import deviceStateTracker from './util/deviceStateTracker';
import { DeviceStateEvent } from 'seng-device-state-tracker';

// Create the redux store
const store = createStore(
  reducers,
  window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__'](),
);

// Add the listener for the device state
deviceStateTracker.addEventListener(DeviceStateEvent.STATE_UPDATE, (event: DeviceStateEvent) =>
  store.dispatch(setDeviceState(event.data.state)),
);

// Update the store with the new device state when it changes
store.dispatch(setDeviceState(deviceStateTracker.currentDeviceState.state));

// Render out the root component
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);