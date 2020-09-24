import React, { useState } from 'react';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';

import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';

import classes from './Layout.module.css';

const Layout = (props) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);  

  const handleToggleSideDrawer = () => {
    setSideDrawerOpen(!sideDrawerOpen)
  }

  return (
    <>
      <Toolbar onSideDrawerToggle={handleToggleSideDrawer}/>
      <SideDrawer showSideDrawer={sideDrawerOpen} onSideDrawerToggle={handleToggleSideDrawer} />
      <main className={classes.Content}>
        {props.children}
      </main>
    </>
  )
}

export default Layout;