import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';

import classes from './SideDrawer.module.css';

const SideDrawer = (props) => {
  const attachedClasses = [classes.SideDrawer, classes.Close]
  if (props.showSideDrawer) {
    attachedClasses.pop();
    attachedClasses.push(classes.Open)
  }
  
  return (
    <>
      <BackDrop show={props.showSideDrawer} onClick={props.onSideDrawerToggle}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
