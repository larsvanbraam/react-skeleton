declare function require(name: string): string;

import DeviceStateTracker from 'seng-device-state-tracker';
import configManager from './../config/configManager';
import DeviceState from '../data/enum/DeviceState';
import { VariableNames } from '../data/enum/configNames';

// Load the media queries data
const data = <any>require('../data/mediaQueries.json');

const deviceStateTracker = new DeviceStateTracker({
  mediaQueries: data.mediaQueries,
  deviceState: DeviceState,
  showStateIndicator: configManager.getVariable(VariableNames.SHOW_STATE_INDICATOR),
  reverseDeviceStateOrder: true,
});

export default deviceStateTracker;
