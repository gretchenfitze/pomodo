import React from 'react';
import TimerLink from './TimerLink';

const TimerTypes = () => (
  <div className="timer-type-wrapper">
    <TimerLink timerType="work">Work</TimerLink>
    <TimerLink timerType="shortBreak">Short break</TimerLink>
    <TimerLink timerType="longBreak">Long break</TimerLink>
  </div>
);

export default TimerTypes;
