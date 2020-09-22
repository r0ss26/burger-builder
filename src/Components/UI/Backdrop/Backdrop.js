import React from 'react';
import PropTypes from 'prop-types';

import classes from './Backdrop.module.css';
const Backdrop = props =>
  props.show ? (
    <div onClick={props.onClick} className={classes.Backdrop}></div>
  ) : null;

Backdrop.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func
}

export default Backdrop;
