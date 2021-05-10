import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { signup } from '../../../actions/authActions'
import InputLarge from '../../Inputs/InputLarge';
import LargeButton from '../../Buttons/LargeButton/LargeButton'
import useStyles from './stylesSignUp';
import Validator from '../../../services/validator'

const formInitialState = {firstname: '', lastname: '', email: '', password: '', confirmPassword: ''};

const SignUp = () => {

  const classes = useStyles();
  const [formData, setFormData] = useState(formInitialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState([])

  const [inputs] = useState([
    { id:'firstname', label:'First name',  name:'firstname', type:'text', autoFocus: 'true' },
    { id:'lastname', label:'Last name',  name:'lastname', type:'text', autoFocus: 'false' },
    { id:'email', label:'Email',  name:'email', type:'email', autoFocus: 'false' },
    { id:'password', label:'Password',  name:'password', type:'password', autoFocus: 'false' },
    { id:'confirmPassword', label:'Confirm password',  name:'confirmPassword', type:'password', autoFocus: 'false' }
  ])

  const handleSubmit = (event) => {
    event.preventDefault();
    setError([])
    const validation = Validator.signUp(formData)
    if (validation.length > 0) {
      setError(validation)
      return
    }
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
          {inputs.map((input) => (
            <InputLarge 
            key={input.id}
            id={input.id}
            label={input.label}
            name={input.name}           
            type={input.type}
            onChange={handleChange} 
            autoFocus={input.autoFocus}
            error={error.includes(input.id)}
          />
          ))}
            {error && (
              <p className={classes.customError}>
                {error[0]}
              </p>
            )}         
        </Grid>           
        <LargeButton name='Sign up'/>
      </form>
    </>
  );
};

export default SignUp;