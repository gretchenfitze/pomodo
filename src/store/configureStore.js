import { createStore } from 'redux';
import throttle from 'lodash.throttle';
import appReducers from '../reducers';
import { loadState, saveState } from '../localStorage';

const configureStore = () => {
  const persistedState = loadState() || {
    timer: {
      startingTime: {
        work: 1500,
        shortBreak: 300,
        longBreak: 900,
      },
      seconds: 1,
      active: false,
      settingsVisibility: false,
    },
  };

  const store = createStore(
    appReducers,
    persistedState,
  );

  store.subscribe(throttle(() => {
    saveState({
      timer: store.getState().timer,
    });
  }, 1000));

  return store;
};

export default configureStore;
