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
import routes from './router/routes';
import RouteWithSubRoutes from './router/RouteWithSubRoutes';
import Param from './data/enum/Param';

// Add the listener for the device state
deviceStateTracker.addEventListener(DeviceStateEvent.STATE_UPDATE, (event: DeviceStateEvent) =>
  store.dispatch(setDeviceState(event.data.state)),
);

// Update the store with the new device state when it changes
store.dispatch(setDeviceState(deviceStateTracker.currentDeviceState.state));

// Render out the root component
render(
  <Provider store={store}>
    <Router>
      <Route
        path={`/:${Param.LOCALE}?`}
        render={props => (
          <LocaleSetup {...props}>
            <App {...props}>
              {routes.map(route => (
                <RouteWithSubRoutes key={route.path} {...route} />
              ))}
            </App>
          </LocaleSetup>
        )}
      />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
