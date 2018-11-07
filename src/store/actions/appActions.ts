import Action from '../../data/enum/Action';

export function setDeviceState(deviceState) {
  return {
    deviceState,
    type: Action.SET_DEVICE_STATE,
  };
}
