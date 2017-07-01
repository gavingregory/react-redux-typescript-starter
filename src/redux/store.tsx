import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducer';
import thunk from 'redux-thunk';
import { State } from 'models';

declare var window:any;
let store = undefined;

if (process.env.NODE_ENV === 'development') {
  let composeEnhancers = undefined;
  // Development build: Debug features, logging, devtool extensions and a global reference on (window) to the redux store
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const logger = createLogger({ diff: true, collapsed: true });
  store = composeEnhancers(applyMiddleware(thunk, logger))(createStore)(reducer);
  (window as any).REDUX_STORE = store;

} else {
  let middleware = undefined;
  // Production build: no additional debug features
  middleware = applyMiddleware(thunk);
  store = createStore<State>(reducer, middleware);
}

export default store;
