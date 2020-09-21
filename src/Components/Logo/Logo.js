import React from 'react';

import classes from './Logo.module.css'
import BurgerLogo from '../../assets/burger-logo.png';

const Logo = () => (
  <div className={classes.Logo}>
    <img src={BurgerLogo} alt='Burger Image' />
  </div>
);

export default Logo;
