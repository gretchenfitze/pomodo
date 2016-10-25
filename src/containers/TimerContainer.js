import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions/TimerActions';
import Timer from '../components/Timer';
import TimerButton from '../components/TimerButton';
import TimerLink from '../components/TimerLink';
import notify from '../utilities/notify';

let timerId;

const getMinutesForTimer = (timerType) => {
  switch (timerType) {
    case 'work': return 25;
    case 'short-break': return 5;
    case 'long-break': return 15;
    default: throw new Error(`Unknown timer type: ${timerType}.`);
  }
};

class TimerContainer extends React.Component {
  constructor(props) {
    super(props);
    const mins = getMinutesForTimer(props.params.timerType || 'work');
    props.actions.resetTimer(mins);
    Notification.requestPermission();
  }

  componentWillReceiveProps({ params, actions }) {
    if (this.props.params.timerType !== params.timerType) {
      clearInterval(timerId);
      actions.resetTimer(getMinutesForTimer(params.timerType));
    }
  }

  componentDidUpdate({ minutes, seconds, timerType, actions, params }) {
    if ((!minutes) && (!seconds)) {
      clearInterval(timerId);
      notify(timerType);
      actions.resetTimer(getMinutesForTimer(params.timerType));
    }
  }

  render() {
    const { minutes, seconds, onTimerControl, active } = this.props;
    return (
      <div>
        <TimerButton>
          <TimerLink timerType="work">Work</TimerLink>
        </TimerButton>

        <TimerButton>
          <TimerLink timerType="short-break">Short break</TimerLink>
        </TimerButton>

        <TimerButton>
          <TimerLink timerType="long-break">Long break</TimerLink>
        </TimerButton>

        <Timer minutes={minutes} seconds={seconds} />
        <TimerButton onClick={() => onTimerControl(active)}>
          {active ? 'Pause' : 'Start'}
        </TimerButton>
      </div>
    );
  }
}

TimerContainer.propTypes = {
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  onTimerControl: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

const mapStateToProps = (state, { params }) => {
  const { minutes, seconds, active } = state.timer;
  const { timerType } = params || 'work';
  return { timerType, minutes, seconds, active };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
  onTimerControl: (active) => {
    dispatch(actions.toggleTimer());
    if (!active) timerId = setInterval(() => { dispatch(actions.timerTick()); }, 1000);
    else clearInterval(timerId);
  },
  resetTimer: () => dispatch(actions.resetTimer()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimerContainer));
