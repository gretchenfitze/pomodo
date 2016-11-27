import React, { PropTypes } from 'react';
import StartButton from './StartButton/StartButton';
import SettingsButton from './SettingsButton/SettingsButton';
import style from '../style/flex-wrapper.css';

const Controls = ({ active, onStartClick, onSettingsClick }) => (
  <div className={`app__controls ${style.app__wrapper}`}>
    <StartButton active={active} onClick={onStartClick} />
    <SettingsButton onClick={onSettingsClick} />
  </div>
);

Controls.propTypes = {
  active: PropTypes.number,
  onStartClick: PropTypes.func.isRequired,
  onSettingsClick: PropTypes.func.isRequired,
};

export default Controls;
