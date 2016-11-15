import { applyMiddleware, createStore } from 'redux';
import throttle from 'lodash.throttle';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
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
    },
  };

  const middlewares = [thunk, multi];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const store = createStore(
    appReducers,
    persistedState,
    applyMiddleware(...middlewares),
  );

  store.subscribe(throttle(() => {
    saveState({
      timer: {
        startingTime: store.getState().timer.startingTime,
        seconds: 1,
      },
    });
  }, 1000));

  return store;
};

export default configureStore;
