import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions/TimerActions';
import TimerTypes from '../components/TimerTypes/TimerTypes';
import Timer from '../components/Timer/Timer';
import Settings from '../components/Settings/Settings';
import Controls from '../components/Controls/Controls';
import notify from '../utilities/notify';
import style from './TimerContainer.css';
import colors from '../components/style/colors.css';

export class TimerContainer extends React.Component {
  constructor({ timerType, onTimerReset }) {
    super();
    onTimerReset(timerType);
    if ('Notification' in window) {
      Notification.requestPermission();
    }
  }

  componentWillReceiveProps({ timerType, onTimerReset }) {
    if (this.props.timerType !== timerType) {
      onTimerReset(timerType);
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
      onStartPauseClick, onColorClick, onFormInput, onSettingsClick, colorTheme } = this.props;
    return (
      <div className={`${style.app} ${colorTheme ? 'white' : 'black'}`}>
        <TimerTypes colorTheme={colorTheme} />
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
          onColorClick={onColorClick}
          onStartClick={() => onStartPauseClick(active, 1000)}
          onSettingsClick={onSettingsClick}
          colorTheme={colorTheme}
        />
      </div>
    );
  }
}

TimerContainer.propTypes = {
  seconds: PropTypes.number.isRequired,
  active: PropTypes.number,
  timerType: PropTypes.string.isRequired,
  startingTime: PropTypes.shape({
    work: PropTypes.number.isRequired,
    shortBreak: PropTypes.number.isRequired,
    longBreak: PropTypes.number.isRequired,
  }).isRequired,
  settingsVisibility: PropTypes.bool,
  onColorClick: PropTypes.func.isRequired,
  onStartPauseClick: PropTypes.func.isRequired,
  onFormInput: PropTypes.func.isRequired,
  onSettingsClick: PropTypes.func.isRequired,
  onTimerReset: PropTypes.func.isRequired,
  colorTheme: PropTypes.bool,
};

export const mapStateToProps = (state, { params }) => {
  const { seconds, active, startingTime, settingsVisibility, colorTheme } = state.timer;
  const { timerType } = params;
  return { seconds, active, timerType, startingTime, settingsVisibility, colorTheme };
};

export default withRouter(connect(mapStateToProps, {
  onStartPauseClick: actions.toggleTimer,
  onFormInput: actions.setTimer,
  onSettingsClick: actions.toggleSettings,
  onTimerReset: actions.resetTimer,
  onColorClick: actions.changeTheme,
})(TimerContainer));
