import React, { PropTypes } from 'react';
import style from './SettingsButton.css';
import SettingsIcon from './SettingsButton.svg';

const SettingsButton = ({ onClick }) => (
  <button className={style.app__controls_settings} onClick={onClick}>
    <SettingsIcon height="8vh" width="8vh" />
  </button>
);

SettingsButton.propTypes = {
  onClick: PropTypes.func,
};

export default SettingsButton;
