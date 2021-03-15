import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined';
import GoogleLogin from 'react-google-login';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

import Input from './Input';
import Icon from './icon'
import useStyles from './stylesAuth';
import {AUTH} from '../../Constants/actionTypes'

const Auth = () => {

  const classes = useStyles();
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword); // previous state needed to toggle between states

  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

  const switchMode = () => {
    setIsSignedUp((prevIsSignedUp) => !prevIsSignedUp);
    handleShowPassword(false);
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj;  // optional chaining: returns undefined if res is null/undefined. Prevents producing long error messages
    const token = res?.tokenId;

    try {
      dispatch({type: AUTH, data: {result, token}}) //dispatch action: AUTH and send payload in:result+token
      // after dispatch, re-direct back to Home
      history.push('/')
    } 
    catch (err) {
      console.log(err)
    }
  }

  const googleFailure = () => {
    console.log('Google sign in failed')
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutLinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignedUp ? 'Sign up' : 'Sign in'}</Typography>
        <form classname={classes.form} onSubmit={handleSubmit}>  
          <Grid>
            {isSignedUp && (
              <>
                <Input name='firstname' label='First name' handleChange={handleChange} 
                // autoFocus 
                half />
                <Input name='lastname' label='Last name' handleChange={handleChange} half />
              </>
            )} 
            <Input name='email' label='Email address' handleChange={handleChange} type='email' />
            <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            {isSignedUp && <Input name='confirmPassword' label='Repeat password' handleChange={handleChange} type='password'/>}
          </Grid> 
          <Button type='submit' fullWidth variant='contained' className={classes.submit}>
            {isSignedUp ? 'Sign up' : 'Sign in'}
          </Button> 
          <GoogleLogin 
            clientId='231551948894-09054roflj5do8jevivd2dce0jlhqqmn.apps.googleusercontent.com'
            render={(renderProps) => (
              <Button 
                className={classes.googleButton}
                color='primary' 
                fullWidth 
                onClick={renderProps.onClick} 
                disabled={renderProps.disabled} 
                startIcon={<Icon/>} 
                variant='contained'>
              Google sign in
              </Button>
            )}
            // handlers for successfull and failed logins
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          /> 
          <Grid container justify='flex-end'>
            <Grid type='item'>
              <Button onClick={switchMode}>
                {isSignedUp ? 'Already have an account? Sign in!' : "Don't have an account yet? Sign up!" }
              </Button>
            </Grid>
          </Grid>  
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;