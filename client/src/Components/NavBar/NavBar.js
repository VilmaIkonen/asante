import React, { useState, useEffect } from 'react';
import { AppBar, Button, Toolbar, Typography, Avatar } from '@material-ui/core';
import { Link, useHistory, useLocation  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import useStyles from './stylesNavBar'
import { useTheme } from '@material-ui/core/styles';
import logo from '../../images/logoSecondary.svg'
import { LOGOUT } from '../../Constants/actionTypes'

const NavBar = () => {

  const classes = useStyles();
  const theme = useTheme();
  // setting user with the info from authReducer ('profile'), fetching the actual user info from local storage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({type: LOGOUT});
    // Re-directed to home:
    history.push('/');
    // user set to null after logout:
    setUser(null);
  }

  // For Json webtoken, re-navigating automatically to main page after login
  useEffect(() => {
    const token = user?.token;
    // check if token has expired:
    if(token) {
      const decodedToken = decode(token);
      if(decodedToken.exp * 1000 < new Date().getTime()) {
        return logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
    // following line removes console warning about useEffect midding dependencies:
    // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [location]) // when location changes, set the user profile (name and avatar) on navbar
 
  return (
    <>  
    <AppBar className={classes.appBar} position="static">
    <div className={classes.brandContainer}>
      <img className={classes.logo} src={logo} alt='logo'></img>
      <Typography 
      component={Link} to='/' 
      className={classes.heading} variant="h1" align="center">Asante</Typography>      
    </div>
      <Typography className={classes.heading2} variant="h2" align="center">Thank or congratulate your colleague for a job well done!</Typography>      
    </AppBar>
    <Toolbar className={classes.toolbar}>
    {/* Conditional rendering: content depending whether user is logged in or not */}
    {user ? (
      <>
      <div className={classes.userProfile}>
        <Avatar className={classes.avatar} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
        <Typography className={classes.userName} variant='body1'>{user.result.name}
        </Typography>
      </div>
      <Button className={classes.logout} variant='contained' onClick={logout}>Logout</Button>
      </>
    ) : (
      <Button className={classes.signin} component={Link} to='/auth' variant='contained'>Sign in</Button>
    )}
  </Toolbar>
  </>
  );
};

export default NavBar;