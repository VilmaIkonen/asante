import React from 'react';
import { AppBar, Button, Toolbar, Typography, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './stylesNavBar'
import logo from '../../images/logo.svg'

const NavBar = () => {

  const classes = useStyles();

  const user = null;

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
    <div className={classes.brandContainer}>
      <img className={classes.logo} src={logo}></img>
      <Typography 
      // component={Link} to='/' 
      className={classes.heading} variant="h1" align="center">Asante</Typography>      
    </div>
      <Typography className={classes.heading2} variant="h2" align="center">Thank your or congratulate your colleague for a job well done!</Typography>
      <Toolbar className={classes.toolbar}>
        {/* Conditional rendering: content depending whether user is logged in or not */}
        {user ? (
          <div className={classes.userProfile}>
            <Avatar className={classes.avatar} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant='h6'>{user.result.name}
            </Typography>
            <Button className={classes.logout} variant='contained'>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to='/auth' variant='contained'>Sign in</Button>
        )}
      </Toolbar>
   </AppBar>
  );
};

export default NavBar;