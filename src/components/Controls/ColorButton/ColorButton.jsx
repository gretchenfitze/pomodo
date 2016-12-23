import React, { PropTypes } from 'react';
import style from './ColorButton.css';

const ColorButton = ({ onClick }) => (
  <button className={style.app__controls_color} onClick={onClick} />
);

ColorButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ColorButton;
