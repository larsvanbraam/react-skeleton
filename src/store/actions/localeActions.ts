import Action from '../../data/enum/Action';
import axios from 'axios';
import configManager from '../../config/configManager';
import { PropertyNames, VariableNames } from '../../data/enum/configNames';
import store from '../store';
import { isValidLocale, updateLocaleURL } from '../../locale/util/localeUtils';

/**
 * Action used to update the active locale
 * @param locale
 */
export function setActiveLocale(locale) {
  return dispatch => {
    // We first check if the locale is actually supported
    const validatedLocale = isValidLocale(locale)
      ? locale
      : configManager.getProperty(PropertyNames.DEFAULT_LOCALE);
    // We need to check the current store to avoid duplicate xhr requests
    const { translations, activeLocale } = store.getState().locale;
    // Update the history url
    updateLocaleURL(locale, activeLocale);
    // Check if the desired locale has already been loaded, if not try to load it!
    return Promise.all([
      !translations[validatedLocale] ? dispatch(addLocale(validatedLocale)) : Promise.resolve(),
    ]).then(() =>
      dispatch({
        locale: validatedLocale,
        type: Action.SET_ACTIVE_LOCALE,
      }),
    );
  };
}

/**
 * Action used to add a new locale to the store.
 *
 * @param locale
 */
export function addLocale(locale) {
  return dispatch => {
    // Run the request to load the translation file
    return axios
      .get(`${configManager.getVariable(VariableNames.VERSIONED_STATIC_ROOT)}locale/${locale}.json`)
      .then(({ data }) => {
        if (typeof data === 'string') {
          throw new Error(`Error: /locale/${locale}.json is invalid JSON`);
        }
        // Store the data if it's all good
        return dispatch({
          locale,
          translations: data,
          type: Action.ADD_LOCALE,
        });
      });
  };
}
