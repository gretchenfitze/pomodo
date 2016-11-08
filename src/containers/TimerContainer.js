import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions/TimerActions';
import TimerTypes from '../components/TimerTypes/TimerTypes';
import Timer from '../components/Timer/Timer';
import Settings from '../components/Settings/Settings';
import Controls from '../components/Controls/Controls';
import notify from '../utilities/notify';

let timerId;

class TimerContainer extends React.Component {
  constructor({ params, onTimerReset }) {
    super();
    onTimerReset(params.timerType || 'work');
    Notification.requestPermission();
  }

  componentWillReceiveProps({ params, onTimerReset }) {
    if (this.props.params.timerType !== params.timerType) {
      clearInterval(timerId);
      onTimerReset(params.timerType);
    }
  }

  componentDidUpdate({ seconds, timerType, onTimerReset }) {
    if (!seconds) {
      clearInterval(timerId);
      notify(timerType);
      onTimerReset(timerType);
    }
  }

  render() {
    const { seconds, active, timerType, startingTime, settingsVisibility,
      onStartClick, onFormInput, onSettingsClick } = this.props;
    return (
      <div>
        <TimerTypes />
        <Timer minutes={Math.floor(seconds / 60)} seconds={seconds % 60} />
        <Settings
          onFormInput={event => onFormInput(event, timerType, startingTime)}
          startingTime={startingTime}
          settingsVisibility={settingsVisibility}
        />
        <Controls
          active={active}
          onStartClick={event => onStartClick(event, active)}
          onSettingsClick={() => onSettingsClick()}
        />
      </div>
    );
  }
}

TimerContainer.propTypes = {
  params: PropTypes.object.isRequired,
  seconds: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  timerType: PropTypes.string.isRequired,
  startingTime: PropTypes.object.isRequired,
  settingsVisibility: PropTypes.bool.isRequired,
  onStartClick: PropTypes.func.isRequired,
  onFormInput: PropTypes.func.isRequired,
  onSettingsClick: PropTypes.func.isRequired,
  onTimerReset: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { params }) => {
  const { seconds, active, startingTime, settingsVisibility } = state.timer;
  const { timerType } = params || 'work';
  return { seconds, active, timerType, startingTime, settingsVisibility };
};

const mapDispatchToProps = dispatch => ({
  onStartClick(event, active) {
    dispatch(actions.toggleTimer());
    if (!active) timerId = setInterval(() => { dispatch(actions.timerTick()); }, 1000);
    else clearInterval(timerId);
  },

  onFormInput(event, timerType, startingTime) {
    event.preventDefault();
    clearInterval(timerId);
    dispatch(actions.setTimer({
      ...startingTime,
      [event.target.id]: event.target.value * 60,
    }));
    dispatch(actions.resetTimer(timerType));
  },

  onSettingsClick() {
    dispatch(actions.toggleSettings());
  },

  onTimerReset(timerType) {
    dispatch(actions.resetTimer(timerType));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimerContainer));
