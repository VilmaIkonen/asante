import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './stylesNavBar';
import logo from '../../images/logo.svg';

const Header = () => {

  const classes = useStyles();

  return (  
    <AppBar elevation='0' className={classes.appBar} position="static">
    <div className={classes.brandContainer}>
      <img className={classes.logo} src={logo} alt='logo'></img>
      <Typography 
      component={Link} to='/' 
      className={classes.heading} variant="h1" align="center">Asante</Typography>      
    </div>
      <Typography className={classes.heading2} variant="h2" align="center">Thank or congratulate your colleague for a job well done!</Typography>      
    </AppBar>
  );
};

export default Header;