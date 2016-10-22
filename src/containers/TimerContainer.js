import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/TimerActions';
import Timer from '../components/Timer';
import TimerType from '../components/TimerType';
import TimerControl from '../components/TimerControl';

const TimerContainer = ({ timerType, minutes, seconds, onTimerChose, onTimerControl, active }) => (
  <div>
    <TimerType onClick={() => onTimerChose('Work')}>Work</TimerType>
    <TimerType onClick={() => onTimerChose('Short break')}>Short break</TimerType>
    <TimerType onClick={() => onTimerChose('Long break')}>Long break</TimerType>
    <Timer timerType={timerType} minutes={minutes} seconds={seconds} />
    <TimerControl onClick={() => onTimerControl()}>
      {active ? 'Pause' : 'Start'}
    </TimerControl>
  </div>
);

const mapStateToProps = state => ({
  timerType: state.timer.timerType,
  minutes: state.timer.minutes,
  seconds: state.timer.seconds,
  active: state.timer.active,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
  onTimerChose: (timerType) => {
    dispatch(actions.setTimerType(timerType));
  },
  onTimerControl: () => {
    dispatch(actions.toggleTimer());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);
