import { combineReducers } from 'redux';
import app from './app';
import locale from './locale';
import { VariableNames } from '../../data/enum/configNames';
import configManager from '../../config/configManager';

export default combineReducers({
  app,
  ...(configManager.getVariable(VariableNames.LOCALE_ENABLED) ? { locale } : {}),
});
