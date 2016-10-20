import { createStore } from 'redux';
import appReducers from '../reducers';

export default function configureStore() {
  const store = createStore(appReducers);
  return store;
}
