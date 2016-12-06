import expect from 'expect';
import configureStore from '../../../src/store/configureStore';
import { RESET, SET_TIMER, START, STOP, TICK, TOGGLE_SETTINGS } from '../../../src/constants/TimerActionTypes';

describe('Store', () => {
  const store = configureStore();

  it('initializes', () => {
    const actual = store.getState();
    const expected = {
      timer: {
        startingTime: {
          work: 1500,
          shortBreak: 300,
          longBreak: 900,
        },
        seconds: 1,
      },
    };
    expect(actual).toEqual(expected);
  });

  it('works with the series of actions', () => {
    const actions = [
      {
        type: TOGGLE_SETTINGS,
      },
      {
        type: SET_TIMER,
        startingTime: {
          work: 150,
          shortBreak: 30,
          longBreak: 90,
        },
      },
      {
        type: RESET,
        timerType: 'work',
      },
      {
        type: START,
        active: 1,
      },
      {
        type: TICK,
      },
      {
        type: TICK,
      },
      {
        type: STOP,
      },
    ];

    actions.forEach(action => store.dispatch(action));
    const actual = store.getState();
    const expected = {
      timer: {
        startingTime: {
          work: 150,
          shortBreak: 30,
          longBreak: 90,
        },
        seconds: 148,
        settingsVisibility: true,
        active: null,
      },
    };

    expect(actual).toEqual(expected);
  });
});
