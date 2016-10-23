export const setTimerType = timerType => ({
  type: 'SET_TIMER_TYPE',
  timerType,
});

export const toggleTimer = () => ({
  type: 'TOGGLE_TIMER',
});

export const timerTick = () => ({
  type: 'TICK',
});

export const timerStop = () => ({
  type: 'STOP',
});
