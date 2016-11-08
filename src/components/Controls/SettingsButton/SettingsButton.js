import React, { PropTypes } from 'react';
import style from './SettingsButton.css';
import SettingsIcon from './SettingsButton.svg';


const TimerButton = ({ onClick }) => (
  <button className={style.app__controls_settings} onClick={onClick}>
    <SettingsIcon height="8vh" width="8vh" />
  </button>
);

TimerButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default TimerButton;
