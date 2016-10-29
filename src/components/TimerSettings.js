import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TimerButton from './TimerButton';

let work;
let shortBreak;
let longBreak;

const TimerSettings = ({ onClick, onSubmit }) => (
  <div>
    <TimerButton onClick={onClick}> Settings </TimerButton>
    <form onSubmit={onSubmit} className="settings-form">
      <label htmlFor="work">
        Work time:
        <input
          type="number"
          min="5"
          max="90"
          step="5"
          defaultValue="25"
          id="work"
          ref={(ref) => { work = ref; }}
        />
      </label> <br />
      <label htmlFor="shortBreak">
        Short break time:
        <input
          type="number"
          min="5"
          max="90"
          step="5"
          defaultValue="5"
          id="shortBreak"
          ref={(ref) => { shortBreak = ref; }}
        />
      </label> <br />
      <label htmlFor="longBreak">
        Long break time:
        <input
          type="number"
          min="5"
          max="90"
          step="5"
          defaultValue="15"
          id="longBreak"
          ref={(ref) => { longBreak = ref; }}
        />
      </label> <br />
      <button type="submit">OK</button>
    </form>
  </div>
);

TimerSettings.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default TimerSettings;
