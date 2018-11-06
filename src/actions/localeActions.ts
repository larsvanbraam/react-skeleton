import Action from '../data/enum/Action';
import axios from 'axios';
import configManager from '../util/configManagerInstance';
import { VariableNames } from '../data/enum/configNames';

/**
 * Action used to update the active locale
 * @param locale
 */
export function setActiveLocale(locale) {
  return {
    locale,
    type: Action.SET_ACTIVE_LOCALE,
  };
}

/**
 * Actions used to set the store state to loading while the new locale is being loaded.
 *
 * @param locale
 */
export function loadingLocale(locale) {
  return {
    locale,
    type: Action.LOADING_LOCALE,
  };
}

/**
 * Action used to add a new locale to the store.
 *
 * @param locale
 */
export function addLocale(locale) {
  return dispatch => {
    // Update the store to know that we are adding a locale
    dispatch(this.loadingLocale(locale));
    // Run the request to load the translation file
    return axios
      .get(
        `${configManager.getVariable(VariableNames.VERSIONED_STATIC_ROOT)}/locale/${locale}.json`,
      )
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
