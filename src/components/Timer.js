import React, { PropTypes } from 'react';

const Timer = ({ minutes, seconds }) => (
  <div>
    <h1>{minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}</h1>
  </div>
);

Timer.propTypes = {
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

export default Timer;
