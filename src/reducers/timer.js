import { RESET, TOGGLE_TIMER, TICK, SET_TIMER } from '../constants/TimerActionTypes';

const initialState = {
  startingTime: {
    work: 1500,
    shortBreak: 300,
    longBreak: 900,
  },
  seconds: 1,
  active: false,
};

const timer = (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        seconds: state.startingTime[action.timerType],
        active: false,
      };
    case TICK:
      return {
        ...state,
        seconds: state.seconds - 1,
      };
    case TOGGLE_TIMER:
      return {
        ...state,
        active: !state.active,
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
    default:
      return state;
  }
};

export default timer;
