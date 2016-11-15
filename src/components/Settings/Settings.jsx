import React, { PropTypes } from 'react';
import SettingsInputField from './SettingsInputField/SettingsInputField';
import style from './Settings.css';

const Settings = ({ onFormInput, startingTime, settingsVisibility }) => (
  <form className={`${style.app__settings} ${settingsVisibility ? ' ' : style.app__settings_invisible}`}>
    <SettingsInputField
      timerType="work"
      text="Work"
      startingTime={startingTime}
      onFormInput={onFormInput}
    />
    <br />
    <SettingsInputField
      timerType="shortBreak"
      text="Short break"
      startingTime={startingTime}
      onFormInput={onFormInput}
    />
    <br />
    <SettingsInputField
      timerType="longBreak"
      text="Long break"
      startingTime={startingTime}
      onFormInput={onFormInput}
    />
  </form>
);

Settings.propTypes = {
  onFormInput: PropTypes.func.isRequired,
  startingTime: PropTypes.shape({
    work: PropTypes.number.isRequired,
    shortBreak: PropTypes.number.isRequired,
    longBreak: PropTypes.number.isRequired,
  }).isRequired,
  settingsVisibility: PropTypes.bool,
};

export default Settings;
