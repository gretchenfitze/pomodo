import { RESET, TOGGLE_TIMER, TICK } from '../constants/TimerConst';

const initialState = {
  timerType: 'work',
  seconds: 1500,
  active: false,
};

const timer = (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        seconds: action.seconds,
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
    default:
      return state;
  }
};

export default timer;
