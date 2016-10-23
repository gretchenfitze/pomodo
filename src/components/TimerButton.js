import React, { PropTypes } from 'react';

const TimerType = ({ children, onClick }) => (
  <div>
    <button onClick={onClick}> {children} </button>
  </div>
);

TimerType.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TimerType;
