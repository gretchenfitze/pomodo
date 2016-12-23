import expect from 'expect';
import { CHANGE_THEME, RESET, SET_TIMER, START, STOP, TICK, TOGGLE_SETTINGS } from '../../../src/constants/TimerActionTypes';
import reducer from '../../../src/reducers/timer/timer';

describe('Timer reducer', () => {
  const initialState = {
    startingTime: {
      work: 1500,
      shortBreak: 300,
      longBreak: 900,
    },
    seconds: 100,
  };

  it('handles timer reset', () => {
    const action = {
      type: RESET,
      timerType: 'work',
    };
    const expected = {
      startingTime: {
        work: 1500,
        shortBreak: 300,
        longBreak: 900,
      },
      seconds: 1500,
      active: null,
    };
    const actual = reducer(initialState, action);
    expect(actual).toEqual(expected);
  });

  it('handles setting timer', () => {
    const action = {
      type: SET_TIMER,
      startingTime: {
        work: 2000,
        shortBreak: 300,
        longBreak: 750,
      },
    };
    const expected = {
      startingTime: {
        work: 2000,
        shortBreak: 300,
        longBreak: 750,
      },
      seconds: 100,
    };
    const actual = reducer(initialState, action);
    expect(actual).toEqual(expected);
  });

  it('handles timer start', () => {
    const action = {
      type: START,
      active: 420,
    };
    const expected = {
      startingTime: {
        work: 1500,
        shortBreak: 300,
        longBreak: 900,
      },
      seconds: 100,
      active: 420,
    };
    const actual = reducer(initialState, action);
    expect(actual).toEqual(expected);
  });

  it('handles timer stop', () => {
    const action = {
      type: STOP,
    };
    const expected = {
      startingTime: {
        work: 1500,
        shortBreak: 300,
        longBreak: 900,
      },
      seconds: 100,
      active: null,
    };
    const actual = reducer(initialState, action);
    expect(actual).toEqual(expected);
  });

  it('handles timer tick', () => {
    const action = {
      type: TICK,
    };
    const expected = {
      startingTime: {
        work: 1500,
        shortBreak: 300,
        longBreak: 900,
      },
      seconds: 99,
    };
    const actual = reducer(initialState, action);
    expect(actual).toEqual(expected);
  });

  it('handles toggling settings', () => {
    const action = {
      type: TOGGLE_SETTINGS,
    };
    const expected = {
      startingTime: {
        work: 1500,
        shortBreak: 300,
        longBreak: 900,
      },
      seconds: 100,
      settingsVisibility: true,
    };
    const actual = reducer(initialState, action);
    expect(actual).toEqual(expected);
  });

  it('handles theme changing', () => {
    const action = {
      type: CHANGE_THEME,
    };
    const expected = {
      startingTime: {
        work: 1500,
        shortBreak: 300,
        longBreak: 900,
      },
      seconds: 100,
      colorTheme: true,
    };
    const actual = reducer(initialState, action);
    expect(actual).toEqual(expected);
  });
});
