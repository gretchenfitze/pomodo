import { RESET, SET_TIMER, TICK, TOGGLE_SETTINGS, TOGGLE_TIMER } from '../constants/TimerActionTypes';

export const resetTimer = timerType => ({
  type: RESET,
  timerType,
});

export const setTimer = startingTime => ({
  type: SET_TIMER,
  startingTime,
});

export const timerTick = () => ({
  type: TICK,
});

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

export const toggleTimer = () => ({
  type: TOGGLE_TIMER,
});
