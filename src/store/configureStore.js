import { createStore } from 'redux';
import appReducers from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
    appReducers,
    initialState,
  );
  return store;
}
