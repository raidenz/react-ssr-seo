/**
 * Redux Store for client
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error
});

const preloadedState = window.__PRELOADED_STATE__ || {};
const middlewares = [thunk, logger];
delete window.__PRELOADED_STATE__;

/*
format
*/
const store = createStore(
  rootReducer,
  preloadedState,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

// export const store = createStore(rootReducer, applyMiddleware(thunk))
