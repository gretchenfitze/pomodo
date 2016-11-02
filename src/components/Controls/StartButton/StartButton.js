import React, { PropTypes } from 'react';
import style from './StartButton.css';

const StartButton = ({ onClick, active }) => (
  <button
    className={`${style.startButton} ${active ? style.active : style.nonActive}`}
    onClick={onClick}
  >
    {active ? 'Pause' : 'Start'}
  </button>
);

StartButton.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default StartButton;
