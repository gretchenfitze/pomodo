import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import expect from 'expect';
import { resetTimer, setTimer, toggleTimer, toggleSettings } from '../actions/TimerActions';
import { RESET, SET_TIMER, START, STOP, TICK, TOGGLE_SETTINGS } from '../constants/TimerActionTypes';

const middlewares = [thunk, multi];
const mockStore = configureMockStore(middlewares);

describe('Timer actions', () => {
  const initialState = {
    timer: {
      startingTime: {
        work: 1500,
        shortBreak: 300,
        longBreak: 900,
      },
      seconds: 100,
    },
  };

  it('creates action to reset timer', () => {
    const expectedActions = [{
      type: RESET,
      timerType: 'work',
    }];
    const store = mockStore(initialState);
    store.dispatch(resetTimer('work'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates action to set timer', () => {
    const expectedActions = [
      {
        type: SET_TIMER,
        startingTime: 400,
      },
      {
        type: RESET,
        timerType: 'shortBreak',
      },
    ];
    const store = mockStore(initialState);
    store.dispatch(setTimer(400, 'shortBreak'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates action to start timer', () => {
    const expectedActions = [{
      type: START,
    },
      {
        type: TICK,
      }];
    const store = mockStore(initialState);
    store.dispatch(toggleTimer(false, 1000));
    expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
  });

  it('creates action to stop timer', () => {
    const expectedActions = [{
      type: STOP,
    }];
    const store = mockStore(initialState);
    store.dispatch(toggleTimer(true, 1000));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates action to toggle timer settings', () => {
    const expectedActions = [{
      type: TOGGLE_SETTINGS,
    }];
    const store = mockStore(initialState);
    store.dispatch(toggleSettings());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
