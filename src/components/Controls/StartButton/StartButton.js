import React, { PropTypes } from 'react';
import style from '../../style/button.css';

const StartButton = ({ onClick, active }) => (
  <button
    className={`app__controls_start ${style.app__button} ${active ? style.app__button_active : ' '}`}
    onClick={onClick}
  >
    {active ? 'Pause' : 'Start'}
  </button>
);

StartButton.propTypes = {
  active: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

export default StartButton;
