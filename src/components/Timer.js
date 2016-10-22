import React, { PropTypes } from 'react';

const Timer = ({ timerType, minutes, seconds }) => (
  <div>
    <h2>{timerType} for</h2>
    <h1>{minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}</h1>
  </div>
);

Timer.propTypes = {
  timerType: PropTypes.string.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

export default Timer;
