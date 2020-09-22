import React from 'react'
import PropTypes from 'prop-types';

import classes from './SideDrawerToggleButton.module.css'

const SideDrawerToggleButton = (props) => {
  return (
    <div onClick={props.onClick} className={classes.SideDrawerToggleButton}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

SideDrawerToggleButton.propTypes = {
  onClick: PropTypes.func
}

export default SideDrawerToggleButton
