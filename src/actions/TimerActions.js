import { RESET, TOGGLE_TIMER, TICK, SET_TIMER } from '../constants/TimerActionTypes';

export const resetTimer = timerType => ({
  type: RESET,
  timerType,
});

export const toggleTimer = () => ({
  type: TOGGLE_TIMER,
});

export const timerTick = () => ({
  type: TICK,
});

export const setTimer = startingTime => ({
  type: SET_TIMER,
  startingTime,
});
