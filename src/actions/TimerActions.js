import { CHANGE_THEME, RESET, SET_TIMER, START, STOP, TICK, TOGGLE_SETTINGS } from '../constants/TimerActionTypes';

export const resetTimer = timerType => (dispatch, getState) => {
  clearInterval(getState().timer.active);
  dispatch({
    type: RESET,
    timerType,
  });
};

export const setTimer = (startingTime, timerType) => (dispatch, getState) => {
  clearInterval(getState().timer.active);
  dispatch([
    {
      type: SET_TIMER,
      startingTime,
    },
    {
      type: RESET,
      timerType,
    },
  ]);
};

export const toggleTimer = (active, interval) => (dispatch, getState) => {
  if (!active) {
    const timerId = setInterval(() => {
      dispatch({
        type: TICK,
      });
    }, interval);

    dispatch({
      type: START,
      active: timerId,
    });
  } else {
    clearInterval(getState().timer.active);
    dispatch({
      type: STOP,
    });
  }
};

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

export const changeTheme = () => ({
  type: CHANGE_THEME,
});
