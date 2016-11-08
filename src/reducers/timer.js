import { RESET, SET_TIMER, TICK, TOGGLE_SETTINGS, TOGGLE_TIMER } from '../constants/TimerActionTypes';

const timer = (state = [], action) => {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        seconds: state.startingTime[action.timerType],
        active: false,
      };
    case SET_TIMER:
      return {
        ...state,
        startingTime: {
          work: action.startingTime.work,
          shortBreak: action.startingTime.shortBreak,
          longBreak: action.startingTime.longBreak,
        },
      };
    case TICK:
      return {
        ...state,
        seconds: state.seconds - 1,
      };
    case TOGGLE_SETTINGS:
      return {
        ...state,
        settingsVisibility: !state.settingsVisibility,
      };
    case TOGGLE_TIMER:
      return {
        ...state,
        active: !state.active,
      };
    default:
      return state;
  }
};

export default timer;
