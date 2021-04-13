import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { signup } from '../../actions/authActions'
import InputLarge from '../Inputs/InputLarge';
import LargeButton from '../Buttons/LargeButton'
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
      <Typography variant='h3'>Sign up</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>  
        <Grid container>
          <InputLarge 
            name='firstname' 
            placeholder='First name' 
            onChange={handleChange}
            required
          />
          <InputLarge 
            name='lastname' 
            placeholder='Last name' 
            onChange={handleChange}
            required
          />      
          <InputLarge 
            name='email' 
            placeholder='Email address' 
            onChange={handleChange} 
            type='email'
            required
          />
          <InputLarge 
            name='password' 
            placeholder='Password' 
            onChange={handleChange} 
            type='password'
            required
          />
          <InputLarge 
            name='confirmPassword' 
            placeholder='Repeat password' 
            onChange={handleChange} 
            type='password'
            required
          />
        </Grid>           
        <LargeButton name='Sign up'/>
      </form>
    </>
  );
};

export default SignUp;