import { combineReducers } from 'redux';
import timer from './timer';
import todos from './todos';

export default combineReducers({
  todos,
  timer,
});
