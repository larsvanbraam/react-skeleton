import 'modernizr';
import './asset/style/main.scss';

import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import App from './App';
import store from './store/store';
import { setDeviceState } from './store/actions/appActions';
import { setActiveLocale } from './store/actions/localeActions';
import deviceStateTracker from './util/deviceStateTracker';
import { DeviceStateEvent } from 'seng-device-state-tracker';
import LocaleProvider from './locale/LocaleProvider';
import configManager from './config/configManager';
import { VariableNames } from './data/enum/configNames';

// Add the listener for the device state
deviceStateTracker.addEventListener(DeviceStateEvent.STATE_UPDATE, (event: DeviceStateEvent) =>
  store.dispatch(setDeviceState(event.data.state)),
);

// Update the store with the new device state when it changes
store.dispatch(setDeviceState(deviceStateTracker.currentDeviceState.state));

// Add the default locale and activate it when it's loaded!
const locale = configManager.getVariable(VariableNames.DEFAULT_LOCALE);
// Activate the default locale
store.dispatch(setActiveLocale(locale));

// Render out the root component
render(
  <Provider store={store}>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </Provider>,
  document.getElementById('app'),
);
