import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './stylesSignIn';
import { signin } from '../../../actions/authActions';
import LargeButton from '../../Buttons/LargeButton/LargeButton';
import InputLarge from '../../Inputs/InputLarge';

const formInitialState = {email: '', password: ''};

export default function SignIn() {

  const classes = useStyles();
  const [formData, setFormData] = useState(formInitialState);
  const dispatch = useDispatch();
  const history = useHistory();

  // Form submission:
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(formData, history)) //action = signin. formData and history send with it
  }

  // used to get formData. Spread all other properties and change just the one being changed, input in specific name --> value
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <>  
    <Typography variant='h3'>Sign in</Typography> 
    <form className={classes.form} onSubmit={handleSubmit}>    
        <Grid container>
          <InputLarge 
            label='Email'
            name='email' 
            onChange={handleChange} 
            type='email'
            required
            autoFocus='true'
          />
          <InputLarge 
            label='Password'
            placeholder='Password'
            name='password' 
            onChange={handleChange} 
            type='password'
            required
          />
        </Grid>           
        <LargeButton name='Sign in'/>      
     </form>  
    </> 
  );
}
