import React from 'react'

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

export default SideDrawerToggleButton
