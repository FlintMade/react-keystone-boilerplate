/* global __DEVELOPMENT__ */
/* global __CLIENT__ */
/* global __DEVTOOLS__ */

import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import createMiddleware from '../middleware/clientMiddleware';
import transitionMiddleware from '../middleware/transitionMiddleware';

export default function createStore(reduxReactRouter, getRoutes, createHistory, client, data) {
  const middleware = [createMiddleware(client), transitionMiddleware];

  let finalCreateStore;
  if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
    const { persistState } = require('redux-devtools');
    const DevTools = require('../containers/DevTools');
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(_createStore);
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore);
  }

  finalCreateStore = reduxReactRouter({ getRoutes, createHistory })(finalCreateStore);

  const reducer = require('../data/reducer');
  const store = finalCreateStore(reducer, data);

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('../data/reducer', () => {
      store.replaceReducer(require('../data/reducer'));
    });
  }

  return store;
}