const initialState = {
  minutes: 25,
  seconds: 0,
  timerType: 'Work',
  active: false,
};

const getMinutesForTimer = (timerType) => {
  switch (timerType) {
    case 'Work': return 25;
    case 'Short break': return 5;
    case 'Long break': return 15;
    default: throw new Error(`Unknown timer type: ${timerType}.`);
  }
};

const timer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TIMER_TYPE':
      return {
        ...state,
        timerType: action.timerType,
        minutes: getMinutesForTimer(action.timerType),
        seconds: 0,
        active: false,
      };
    case 'TICK':
      return {
        ...state,
        minutes: !state.seconds ? state.minutes - 1 : state.minutes,
        seconds: !state.seconds ? 59 : state.seconds - 1,
      };
    case 'TOGGLE_TIMER':
      return {
        ...state,
        active: !state.active,
      };
    case 'STOP':
      return {
        ...state,
        active: false,
      };
    default:
      return state;
  }
};

export default timer;
