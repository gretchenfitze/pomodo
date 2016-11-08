import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
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
    const { seconds, active, timerType, onStartClick, onFormInput,
      startingTime, settingsVisibility, actions } = this.props;
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
          onSettingsClick={() => actions.toggleSettings()}
        />
      </div>
    );
  }
}

TimerContainer.propTypes = {
  seconds: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  settingsVisibility: PropTypes.bool.isRequired,
  timerType: PropTypes.string.isRequired,
  startingTime: PropTypes.object.isRequired,
  onStartClick: PropTypes.func.isRequired,
  onFormInput: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

const mapStateToProps = (state, { params }) => {
  const { seconds, active, startingTime, settingsVisibility } = state.timer;
  const { timerType } = params || 'work';
  return { timerType, seconds, active, startingTime, settingsVisibility };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
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
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimerContainer));
