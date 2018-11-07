import Action from '../../data/enum/Action';

export default function app(state = { deviceState: null }, action) {
  switch (action.type) {
    case Action.SET_DEVICE_STATE:
      return { ...state, ...{ deviceState: action.deviceState } };
    default:
      return state;
  }
}
