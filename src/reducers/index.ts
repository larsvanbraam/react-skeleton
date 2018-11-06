import { combineReducers } from 'redux';
import app from './app';
import translation from './translation';

export default combineReducers({
  app,
  translation,
});
