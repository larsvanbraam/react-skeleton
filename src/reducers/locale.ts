import Action from '../data/enum/Action';

export default function app(state = { activeLocale: null, translations: {} }, action) {
  switch (action.type) {
    case Action.SET_ACTIVE_LOCALE:
      return { ...state, ...{ activeLocale: action.locale } };
    case Action.ADD_LOCALE:
      return { ...state, ...{ translations: { [action.locale]: action.translations } } };
    default:
      return state;
  }
}
