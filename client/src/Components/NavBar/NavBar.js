import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import useStyles from './stylesNavBar'

const NavBar = () => {

  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h1" align="center">Asante</Typography>
      <Typography className={classes.heading2} variant="h2" align="center">Thank your or congratulate your colleague for a job well done!</Typography>
   </AppBar>
  );
};

export default NavBar;