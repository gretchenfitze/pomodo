import React, { PropTypes } from 'react';

const TimerButton = ({ children, onClick }) => (
  <div>
    <button onClick={onClick}> {children} </button>
  </div>
);

TimerButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default TimerButton;
