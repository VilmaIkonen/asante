import React, { useState } from 'react';
import { Avatar, Button, Grid, Typography } from '@material-ui/core';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { signup } from '../../actions/authActions'
import Input from './Input';
import useStyles from './stylesAuth';

const formInitialState = {firstname: '', lastname: '', email: '', password: '', confirmPassword: ''};

const SignUp = () => {

  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(formInitialState);
  const dispatch = useDispatch();
  const history = useHistory();
    
  // previous state needed to toggle between states:
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword); 

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(formData, history)) //action = signup. formData and history send with it
  }

  // used to get formData. Spread all other properties and change just the one being changed, input in specific name --> value
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <>
      <Avatar className={classes.avatar}>
        <LockOutLinedIcon />
      </Avatar>
      <Typography variant='h3'>Sign up</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>  
        <Grid container>
          <Input name='firstname' label='First name' handleChange={handleChange} fullWidth/>
          <Input name='lastname' label='Last name' handleChange={handleChange} fullWidth/>      
          <Input name='email' label='Email address' handleChange={handleChange} type='email'/>
          <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
          <Input name='confirmPassword' label='Repeat password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
        </Grid>           
        <Button type='submit' fullWidth variant='contained' size='large' className={classes.submit}>Sign up</Button>
        <Grid container justify='flex-end'>
        </Grid>  
      </form>
    </>
  );
};

export default SignUp;