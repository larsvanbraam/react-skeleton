import 'modernizr';
import './asset/style/main.scss';

import * as React from 'react';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { render } from 'react-dom';
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';

import App from './App';
import reducers from './reducers';
import { setDeviceState } from './actions/appActions';
import deviceStateTracker from './util/deviceStateTracker';
import { DeviceStateEvent } from 'seng-device-state-tracker';
import LocaleProvider from './util/locale/LocaleProvider';
import { addLocale, setActiveLocale } from './actions/localeActions';

// Create the redux store
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware as ThunkMiddleware)),
);

// Add the listener for the device state
deviceStateTracker.addEventListener(DeviceStateEvent.STATE_UPDATE, (event: DeviceStateEvent) =>
  store.dispatch(setDeviceState(event.data.state)),
);

// Update the store with the new device state when it changes
store.dispatch(setDeviceState(deviceStateTracker.currentDeviceState.state));

store.dispatch(addLocale('en')).then(() => {
  store.dispatch(setActiveLocale('en'));
});

// Render out the root component
render(
  <Provider store={store}>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </Provider>,
  document.getElementById('app'),
);
