import { RESET, TOGGLE_TIMER, TICK } from '../constants/TimerConst';

export const resetTimer = minutes => ({
  type: RESET,
  minutes,
});

export const toggleTimer = () => ({
  type: TOGGLE_TIMER,
});

export const timerTick = () => ({
  type: TICK,
});
