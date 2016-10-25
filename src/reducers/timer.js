import { RESET, TOGGLE_TIMER, TICK, STOP } from '../constants/TimerConst';

const initialState = {
  timerType: 'work',
  minutes: 25,
  seconds: 0,
  active: false,
};

const timer = (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        minutes: action.minutes,
        seconds: 0,
        active: false,
      };
    case TICK:
      return {
        ...state,
        minutes: !state.seconds ? state.minutes - 1 : state.minutes,
        seconds: !state.seconds ? 59 : state.seconds - 1,
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
