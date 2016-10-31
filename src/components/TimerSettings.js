import React, { PropTypes } from 'react';

let work;
let shortBreak;
let longBreak;

const TimerSettings = ({ onSubmit }) => (
  <div>
    <form onSubmit={onSubmit} className="timer-settings-form invisible">
      <label htmlFor="work">
        Work:
        <input
          type="number"
          min="1"
          max="90"
          step="1"
          defaultValue="25"
          id="work"
          ref={(ref) => { work = ref; }}
        />
      </label> <br />
      <label htmlFor="shortBreak">
        Short break:
        <input
          type="number"
          min="1"
          max="90"
          step="1"
          defaultValue="5"
          id="shortBreak"
          ref={(ref) => { shortBreak = ref; }}
        />
      </label> <br />
      <label htmlFor="longBreak">
        Long break:
        <input
          type="number"
          min="5"
          max="90"
          step="1"
          defaultValue="15"
          id="longBreak"
          ref={(ref) => { longBreak = ref; }}
        />
      </label> <br />
      <button className="timer-submit-settings timer-button" type="submit">OK</button>
    </form>
  </div>
);

TimerSettings.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TimerSettings;
