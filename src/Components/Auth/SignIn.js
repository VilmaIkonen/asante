import React, { useState } from 'react';
import { Avatar, Button, Grid, Typography } from '@material-ui/core';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { signin } from '../../actions/authActions'
import Input from './Input';
import useStyles from './stylesAuth';
import { AUTH } from '../../Constants/actionTypes'

const formInitialState = {email: '', password: ''};

const SignIn = () => {

  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(formInitialState);
  const dispatch = useDispatch();
  const history = useHistory();
    
  // previous state needed to toggle between states:
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword); 

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(formData, history)) //action = signin. formData and history send with it
  }

  // used to get formData. Spread all other properties and change just the one being changed, input in specific name --> value
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  // Functions for Google sign in:
  const googleSuccess = async (res) => {
    const result = res?.profileObj;  // optional chaining: returns undefined if res is null/undefined. Prevents producing long error messages
    const token = res?.tokenId;

    try {
      dispatch({type: AUTH, data: {result, token}}) // dispatch action: AUTH and send payload in:result+token
      history.push('/') // after dispatch, re-direct back to Home
    } 
    catch (err) {
      console.log(err)
    }
  }

  const googleFailure = () => {
    console.log('Google sign in failed')
  }

  return (    
    <>
      <Avatar className={classes.avatar}>
        <LockOutLinedIcon />
      </Avatar>
      <Typography variant='h3'>Sign in</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>  
        <Grid container>
          <Input name='email' label='Email address' handleChange={handleChange} type='email'/>
          <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
        </Grid>           
        <Button type='submit' fullWidth variant='contained' size='large' className={classes.submit}>Sign in</Button>
        <GoogleLogin 
          clientId='new client id, old one deleted after exposure'  
          className={classes.googleButton}      
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy='single_host_origin'
        /> 
        <Grid container justify='flex-end'>
        </Grid>  
      </form>
   </>
  );
};

export default SignIn;