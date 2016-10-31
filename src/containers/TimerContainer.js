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
import SettingsIcon from '../utilities/settings.svg';

let timerId;

const hideSettingsForm = () => {
  document.querySelector('.timer-settings-form').classList.toggle('invisible');
};

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
        <TimerSettings onSubmit={event => onSubmit(event, timerType)} />
        <div className="timer-footer-wrapper">
          <TimerButton onClick={event => onTimerControl(event, active)}>
            {active ? 'Pause' : 'Start'}
          </TimerButton>
          <TimerButton
            onClick={() => {
              hideSettingsForm();
            }}
          >
            <SettingsIcon height="8vh" width="8vh" />
          </TimerButton>
        </div>
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
  onTimerControl(event, active) {
    dispatch(actions.toggleTimer());
    if (!active) timerId = setInterval(() => { dispatch(actions.timerTick()); }, 1000);
    else clearInterval(timerId);
    event.target.classList.toggle('active');
  },
  onSubmit(event, timerType) {
    event.preventDefault();
    clearInterval(timerId);
    dispatch(actions.toggleTimer());
    dispatch(actions.setTimer({
      work: event.target.work.value * 60,
      shortBreak: event.target.shortBreak.value * 60,
      longBreak: event.target.longBreak.value * 60,
    }));
    dispatch(actions.resetTimer(timerType));
    hideSettingsForm();
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimerContainer));
