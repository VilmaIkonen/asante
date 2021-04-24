import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import GoogleLogin from 'react-google-login';

import useStyles from './stylesSignIn';
import { signin } from '../../../actions/authActions';
import googleIcon from '../../../images/btn_google_light_normal_ios.svg';
import LargeButton from '../../Buttons/LargeButton/LargeButton';
import AccordionButton from '../../Buttons/LargeButton/AccordionButton'
import InputLarge from '../../Inputs/InputLarge';
import { AUTH } from '../../../Constants/actionTypes';

const formInitialState = {email: '', password: ''};

export default function SignIn() {

  const classes = useStyles();
  const [openAcc, setOpenAcc] = useState(false);
  const [formData, setFormData] = useState(formInitialState);
  const dispatch = useDispatch();
  const history = useHistory();

   // Toggling accordion
  const handleChangeAcc= (panel) => (event, newOpenAcc) => {
    setOpenAcc(newOpenAcc ? panel : false);
  }; 

  // Form submission:
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
    <Typography variant='h3'>Sign in</Typography> 
    <form className={classes.form} onSubmit={handleSubmit}>    
      <MuiAccordion className={classes.accordion} openAcc={openAcc === 'panel'} onChange={handleChangeAcc('panel')}elevation={0}>
        <MuiAccordionSummary component={AccordionButton}/>
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
    </MuiAccordion> 
    <GoogleLogin
        clientId='new client id, old one deleted after exposure'  
        render={(renderProps) => (
          <Button className={classes.googleButton} fullWidth onClick={renderProps.onClick}><img src={googleIcon} alt='Google icon'/>
            Google Sign In
          </Button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy='single_host_origin'
      />
    </form>  
    </> 
  );
}
