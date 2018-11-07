import { combineReducers } from 'redux';
import app from './app';
import locale from './locale';

export default combineReducers({
  app,
  locale,
});
