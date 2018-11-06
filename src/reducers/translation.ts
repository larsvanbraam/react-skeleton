import Action from '../data/enum/Action';

export default function app(state = { locale: 'en', translations: { ['en']: {} } }, action) {
  switch (action.type) {
    case Action.SET_LOCALE:
      return { ...state, ...{ locale: action.locale } };
    default:
      return state;
  }
}
