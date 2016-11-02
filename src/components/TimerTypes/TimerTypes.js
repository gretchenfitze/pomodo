import React from 'react';
import style from '../style/flex-wrapper.css';
import TypeLink from './TypeLink/TypeLink';

const TimerTypes = () => (
  <div className={style.wrapper}>
    <TypeLink timerType="work">Work</TypeLink>
    <TypeLink timerType="shortBreak">Short break</TypeLink>
    <TypeLink timerType="longBreak">Long break</TypeLink>
  </div>
);

export default TimerTypes;
