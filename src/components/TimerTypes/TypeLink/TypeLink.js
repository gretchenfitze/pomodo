import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import style from '../../style/button.css';

const TypeLink = ({ children, timerType }) => (
  <Link
    to={timerType}
    className={style.app__button}
    activeClassName={style.app__button_active}
  >
    {children}
  </Link>
);

TypeLink.propTypes = {
  children: PropTypes.string.isRequired,
  timerType: PropTypes.string.isRequired,
};

export default TypeLink;
