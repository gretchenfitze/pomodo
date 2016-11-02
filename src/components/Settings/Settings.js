import React, { PropTypes } from 'react';
import SettingsInputField from './SettingsInputField/SettingsInputField';
import style from './Settings.css';

let work;
let shortBreak;
let longBreak;

const Settings = ({ onFormInput, startingTime }) => (
  <div className="invisible settings-wrapper">
    <form className={style.settingsForm}>
      <SettingsInputField
        timerType="work"
        text="Work :"
        startingTime={startingTime}
        ref={(ref) => { work = ref; }}
        onFormInput={onFormInput}
      />
      <br />
      <SettingsInputField
        timerType="shortBreak"
        text="Short break :"
        startingTime={startingTime}
        ref={(ref) => { work = ref; }}
        onFormInput={onFormInput}
      />
      <br />
      <SettingsInputField
        timerType="longBreak"
        text="Long break :"
        startingTime={startingTime}
        ref={(ref) => { work = ref; }}
        onFormInput={onFormInput}
      />
    </form>
  </div>
);

Settings.propTypes = {
  onFormInput: PropTypes.func.isRequired,
};

export default Settings;
