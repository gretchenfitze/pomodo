import React, { PropTypes } from 'react';
import StartButton from './StartButton/StartButton';
import SettingsButton from './SettingsButton/SettingsButton';
import style from '../style/flex-wrapper.css';

const Controls = ({ active, onStartClick, onSettingsClick }) => (
  <div className={style.wrapper}>
    <StartButton active={active} onClick={event => onStartClick(event, active)} />
    <SettingsButton onClick={onSettingsClick} />
  </div>
);

Controls.propTypes = {
  active: PropTypes.bool.isRequired,
  onStartClick: PropTypes.func.isRequired,
  onSettingsClick: PropTypes.func.isRequired,
};

export default Controls;
