import { CHANGE_THEME, RESET, SET_TIMER, START, STOP, TICK, TOGGLE_SETTINGS } from '../../constants/TimerActionTypes';

const timer = (state = [], action) => {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        seconds: state.startingTime[action.timerType],
        active: null,
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
    case START:
      return {
        ...state,
        active: action.active,
      };
    case STOP:
      return {
        ...state,
        active: null,
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
    case CHANGE_THEME:
      return {
        ...state,
        colorTheme: !state.colorTheme,
      };
    default:
      return state;
  }
};

export default timer;
