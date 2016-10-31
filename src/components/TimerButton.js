import React, { PropTypes } from 'react';

const TimerButton = ({ children, onClick }) => (
  <button className="timer-button" onClick={onClick}> {children} </button>
);

TimerButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default TimerButton;
