import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions/TimerActions';
import Timer from '../components/Timer';
import TimerTypes from '../components/TimerTypes';
import TimerButton from '../components/TimerButton';
import TimerSettings from '../components/TimerSettings';
import notify from '../utilities/notify';

let timerId;

class TimerContainer extends React.Component {
  constructor({ actions, params }) {
    super();
    actions.resetTimer(params.timerType || 'work');
    Notification.requestPermission();
  }

  componentWillReceiveProps({ params, actions }) {
    if (this.props.params.timerType !== params.timerType) {
      clearInterval(timerId);
      actions.resetTimer(params.timerType);
    }
  }

  componentDidUpdate({ seconds, timerType, actions }) {
    if (!seconds) {
      clearInterval(timerId);
      notify(timerType);
      actions.resetTimer(timerType);
    }
  }

  render() {
    const { seconds, onTimerControl, active, onSubmit, timerType } = this.props;
    return (
      <div>
        <TimerTypes />
        <Timer minutes={Math.floor(seconds / 60)} seconds={seconds % 60} />
        <TimerButton onClick={() => onTimerControl(active)}>
          {active ? 'Pause' : 'Start'}
        </TimerButton>
        <TimerSettings
          onClick={() => {
            //
          }}
          onSubmit={event => onSubmit(event, timerType)}
        />
      </div>
    );
  }
}

TimerContainer.propTypes = {
  seconds: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  onTimerControl: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  startingTime: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  timerType: PropTypes.string.isRequired,
};

const mapStateToProps = (state, { params }) => {
  const { seconds, active, startingTime } = state.timer;
  const { timerType } = params || 'work';
  return { timerType, seconds, active, startingTime };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
  onTimerControl(active) {
    dispatch(actions.toggleTimer());
    if (!active) timerId = setInterval(() => { dispatch(actions.timerTick()); }, 1000);
    else clearInterval(timerId);
  },
  onSubmit(event, timerType) {
    event.preventDefault();
    dispatch(actions.setTimer({
      work: event.target.work.value * 60,
      shortBreak: event.target.shortBreak.value * 60,
      longBreak: event.target.longBreak.value * 60,
    }));
    dispatch(actions.resetTimer(timerType));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimerContainer));
