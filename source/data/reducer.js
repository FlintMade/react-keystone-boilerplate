import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import posts from './posts';

export default combineReducers({
  router: routerStateReducer,
  posts
});
