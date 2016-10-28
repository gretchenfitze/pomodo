import { RESET, TOGGLE_TIMER, TICK } from '../constants/TimerConst';

export const resetTimer = seconds => ({
  type: RESET,
  seconds,
});

export const toggleTimer = () => ({
  type: TOGGLE_TIMER,
});

export const timerTick = () => ({
  type: TICK,
});
