import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import content from './content';

export default combineReducers({
  router: routerReducer,
  content
});
