import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/TimerActions';
import Timer from '../components/Timer';
import TimerButton from '../components/TimerButton';
import notify from '../utilities/notify';

let timerId;

class TimerContainer extends React.Component {
  componentDidUpdate(prevProps) {
    const { minutes, seconds, timerType } = prevProps;
    if ((!minutes) && (seconds === 1)) {
      clearInterval(timerId);
      prevProps.actions.timerStop();
      notify(timerType);
    }
  }

  render() {
    const { timerType, minutes, seconds, onTimerChose, onTimerControl, active } = this.props;
    return (
      <div>
        <TimerButton onClick={() => onTimerChose('Work')}>Work</TimerButton>
        <TimerButton onClick={() => onTimerChose('Short break')}>Short break</TimerButton>
        <TimerButton onClick={() => onTimerChose('Long break')}>Long break</TimerButton>
        <Timer timerType={timerType} minutes={minutes} seconds={seconds} />
        <TimerButton onClick={() => onTimerControl(active)}>
          {active ? 'Pause' : 'Start'}
        </TimerButton>
      </div>
    );
  }
}

TimerContainer.propTypes = {
  timerType: PropTypes.string.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  onTimerChose: PropTypes.func.isRequired,
  onTimerControl: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { timerType, minutes, seconds, active } = state.timer;
  return { timerType, minutes, seconds, active };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
  onTimerChose: (timerType) => {
    clearInterval(timerId);
    dispatch(actions.setTimerType(timerType));
  },
  onTimerControl: (active) => {
    Notification.requestPermission();
    if (!active) timerId = setInterval(() => { dispatch(actions.timerTick()); }, 1000);
    else clearInterval(timerId);
    dispatch(actions.toggleTimer());
  },
  timerStop: () => dispatch(actions.timerStop()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);
