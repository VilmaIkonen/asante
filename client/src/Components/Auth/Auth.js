import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { signup, signin } from '../../actions/authActions'
import Input from './Input';
import Icon from './icon'
import useStyles from './stylesAuth';
import {AUTH} from '../../Constants/actionTypes'

const formInitialState = {firstname: '', lastname: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {

  const classes = useStyles();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(formInitialState);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword); // previous state needed to toggle between states

  const handleSubmit = (event) => {
    event.preventDefault();
    if(isSignUp) {
      dispatch(signup(formData, history)) //action = signup. formData and history send with it
    }
    else {
      dispatch(signin(formData, history))
    }
  }

  // used to get formData. Spread all other properties and change just the one being changed, input in specific name --> value
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const switchMode = () => {
    setFormData(formInitialState);
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setShowPassword(false);
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
        <Typography variant='h5'>{isSignUp ? 'Sign up' : 'Sign in'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>  
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input name='firstname' label='First name' handleChange={handleChange} fullWidth autoFocus half />
                <Input name='lastname' label='Last name' handleChange={handleChange} fullWidth half />
              </>
            )} 
            <Input name='email' label='Email address' handleChange={handleChange} type='email' />
            <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            {isSignUp ? <Input name='confirmPassword' label='Repeat password' handleChange={handleChange} type='password' /> : null}
          </Grid>           
          <Button type='submit' fullWidth variant='contained' className={classes.submit}>
            {isSignUp ? 'Sign up' : 'Sign in'}
          </Button> {/* On click, button submits firm data (handleSubmit) */}
          <GoogleLogin 
            clientId='new client id, old one deleted after exposure'
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
                {isSignUp ? 'Already have an account? Sign in!' : "Don't have an account yet? Sign up!" }
              </Button>
            </Grid>
          </Grid>  
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;