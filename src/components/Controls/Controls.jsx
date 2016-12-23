import React, { PropTypes } from 'react';
import ColorButton from './ColorButton/ColorButton';
import StartButton from './StartButton/StartButton';
import SettingsButton from './SettingsButton/SettingsButton';
import style from '../style/flex-wrapper.css';

const Controls = ({ active, onColorClick, onStartClick, onSettingsClick }) => (
  <div className={`app__controls ${style.app__wrapper}`}>
    <ColorButton onClick={onColorClick} />
    <StartButton active={active} onClick={onStartClick} />
    <SettingsButton onClick={onSettingsClick} />
  </div>
);

Controls.propTypes = {
  active: PropTypes.number,
  onColorClick: PropTypes.func.isRequired,
  onStartClick: PropTypes.func.isRequired,
  onSettingsClick: PropTypes.func.isRequired,
};

export default Controls;
