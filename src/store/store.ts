import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware as ThunkMiddleware)),
);

export default store;
