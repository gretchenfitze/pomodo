import React, { PropTypes } from 'react';
import style from './SettingsInputField.css';

const SettingsInputField = ({ timerType, text, onFormInput, startingTime }) => (
  <label htmlFor={timerType}>
    {text}
    <input
      type="number"
      min="1"
      max="90"
      step="1"
      defaultValue={startingTime[timerType] / 60}
      id={timerType}
      onChange={onFormInput}
      className={style.inputField}
    />
  </label>
);

SettingsInputField.propTypes = {
  timerType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  startingTime: PropTypes.object.isRequired,
  onFormInput: PropTypes.func.isRequired,
};

export default SettingsInputField ;
