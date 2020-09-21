import React from 'react';
import classes from './Backdrop.module.css';
const Backdrop = props =>
  props.show ? (
    <div onClick={props.onModalClosed} className={classes.Backdrop}></div>
  ) : null;

export default Backdrop;
