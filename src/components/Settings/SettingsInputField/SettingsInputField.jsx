import React, { PropTypes } from 'react';
import style from './SettingsInputField.css';

const SettingsInputField = ({ timerType, text, onFormInput, startingTime }) => (
  <div className={style.app__settings_item}>
    <label htmlFor={timerType} className={style.app__settings_label}>
      {text}
    </label>
    <input
      type="number"
      min="1"
      max="90"
      step="1"
      defaultValue={startingTime[timerType] / 60}
      id={timerType}
      onChange={onFormInput}
      className={style.app__settings_input}
    />
  </div>
);

SettingsInputField.propTypes = {
  timerType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  startingTime: PropTypes.shape({
    work: PropTypes.number.isRequired,
    shortBreak: PropTypes.number.isRequired,
    longBreak: PropTypes.number.isRequired,
  }).isRequired,
  onFormInput: PropTypes.func.isRequired,
};

export default SettingsInputField ;
