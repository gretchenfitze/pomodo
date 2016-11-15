import React, { PropTypes } from 'react';
import SettingsInputField from './SettingsInputField/SettingsInputField';
import style from './Settings.css';

let work;
let shortBreak;
let longBreak;

const Settings = ({ onFormInput, startingTime, settingsVisibility }) => (
  <form className={`${style.app__settings} ${settingsVisibility ? ' ' : style.app__settings_invisible}`}>
    <SettingsInputField
      timerType="work"
      text="Work"
      startingTime={startingTime}
      ref={(ref) => { work = ref; }}
      onFormInput={onFormInput}
    />
    <br />
    <SettingsInputField
      timerType="shortBreak"
      text="Short break"
      startingTime={startingTime}
      ref={(ref) => { work = ref; }}
      onFormInput={onFormInput}
    />
    <br />
    <SettingsInputField
      timerType="longBreak"
      text="Long break"
      startingTime={startingTime}
      ref={(ref) => { work = ref; }}
      onFormInput={onFormInput}
    />
  </form>
);

Settings.propTypes = {
  onFormInput: PropTypes.func.isRequired,
  startingTime: PropTypes.object.isRequired,
  settingsVisibility: PropTypes.bool,
};

export default Settings;
