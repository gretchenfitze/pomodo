import React from 'react';
import TimerButton from './TimerButton';
import TimerLink from './TimerLink';

const TimerTypes = () => (
  <div>
    <TimerButton>
      <TimerLink timerType="work">Work</TimerLink>
    </TimerButton>

    <TimerButton>
      <TimerLink timerType="shortBreak">Short break</TimerLink>
    </TimerButton>

    <TimerButton>
      <TimerLink timerType="longBreak">Long break</TimerLink>
    </TimerButton>
  </div>
);

export default TimerTypes;
