import Action from '../data/enum/Action';

export function setLocale(locale) {
  return {
    locale,
    type: Action.SET_LOCALE,
  };
}
