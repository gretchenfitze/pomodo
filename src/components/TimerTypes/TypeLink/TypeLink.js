import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import style from '../../style/button.css';

const TypeLink = ({ children, timerType }) => (
  <Link
    to={timerType}
    style={{
      color: '#fff',
      textDecoration: 'none',
    }}
    activeStyle={{
      backgroundColor: '#fff',
      color: '#000',
      boxShadow: '0 0 25px #fff, 0 0 5px #fff',
    }}
    className={style.button}
  >
    {children}
  </Link>
);

TypeLink.propTypes = {
  children: PropTypes.string.isRequired,
  timerType: PropTypes.string.isRequired,
};

export default TypeLink;
