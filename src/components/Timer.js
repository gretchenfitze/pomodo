import React, { PropTypes } from 'react';

const Timer = ({ minutes, seconds }) => (
  <div className="timer-clock">{minutes < 10 ? `0${minutes}` : minutes}:
    {seconds < 10 ? `0${seconds}` : seconds}</div>
);

Timer.propTypes = {
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

export default Timer;
