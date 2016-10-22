import React, { PropTypes } from 'react';

const TimerControl = ({ children, onClick }) => (
  <div>
    <button onClick={onClick}>{children}</button>
  </div>
);

TimerControl.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TimerControl;
