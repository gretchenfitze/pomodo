import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions/TimerActions';
import TimerTypes from '../components/TimerTypes/TimerTypes';
import Timer from '../components/Timer/Timer';
import Settings from '../components/Settings/Settings';
import Controls from '../components/Controls/Controls';
import notify from '../utilities/notify';

class TimerContainer extends React.Component {
  constructor({ params, onTimerReset }) {
    super();
    onTimerReset(params.timerType);
    Notification.requestPermission();
  }

  componentWillReceiveProps({ params, onTimerReset }) {
    if (this.props.params.timerType !== params.timerType) {
      onTimerReset(params.timerType);
    }
  }

  componentDidUpdate({ seconds, timerType, onTimerReset }) {
    if (!seconds) {
      notify(timerType);
      onTimerReset(timerType);
    }
  }

  render() {
    const { seconds, active, timerType, startingTime, settingsVisibility,
      onStartPauseClick, onFormInput, onSettingsClick } = this.props;
    return (
      <div>
        <TimerTypes />
        <Timer minutes={Math.floor(seconds / 60)} seconds={seconds % 60} />
        <Settings
          onFormInput={event => onFormInput({
            ...startingTime,
            [event.target.id]: event.target.value * 60,
          }, timerType)}
          startingTime={startingTime}
          settingsVisibility={settingsVisibility}
        />
        <Controls
          active={active}
          onStartClick={() => onStartPauseClick(active)}
          onSettingsClick={() => onSettingsClick()}
        />
      </div>
    );
  }
}

TimerContainer.propTypes = {
  params: PropTypes.object.isRequired,
  seconds: PropTypes.number.isRequired,
  active: PropTypes.number,
  timerType: PropTypes.string.isRequired,
  startingTime: PropTypes.object.isRequired,
  settingsVisibility: PropTypes.bool,
  onStartPauseClick: PropTypes.func.isRequired,
  onFormInput: PropTypes.func.isRequired,
  onSettingsClick: PropTypes.func.isRequired,
  onTimerReset: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { params }) => {
  const { seconds, active, startingTime, settingsVisibility } = state.timer;
  const { timerType } = params || 'work';
  return { seconds, active, timerType, startingTime, settingsVisibility };
};

export default withRouter(connect(mapStateToProps, {
  onStartPauseClick: actions.toggleTimer,
  onFormInput: actions.setTimer,
  onSettingsClick: actions.toggleSettings,
  onTimerReset: actions.resetTimer,
})(TimerContainer));
