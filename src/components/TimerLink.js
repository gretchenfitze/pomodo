import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const TimerLink = ({ children, timerType }) => (
  <Link
    to={timerType}
    style={{
      textDecoration: 'none',
    }}
    activeStyle={{
      color: 'red',
      textDecoration: 'none',
    }}
  >
    {children}
  </Link>
);

TimerLink.propTypes = {
  children: PropTypes.string.isRequired,
  timerType: PropTypes.string.isRequired,
};

export default TimerLink;
