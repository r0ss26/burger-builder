import React from 'react';
import PropTypes from 'prop-types';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggleButton from './SideDrawerToggleButton/SideDrawerToggleButton';

const Toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <SideDrawerToggleButton onClick={props.onSideDrawerToggle} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

Toolbar.propTypes = {
  onSideDrawerToggle: PropTypes.func
}

export default Toolbar;
