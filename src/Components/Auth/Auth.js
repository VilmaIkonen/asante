import React, { useState } from 'react';
import { Container, Button, Paper } from '@material-ui/core';

import SignIn from './SignIn'
import SignUp from './SignUp'
import useStyles from './stylesAuth';

const Auth = () => {

  const classes = useStyles();
  const [isSignUp, setIsSignUp] = useState(false);

  // for swithching between sign in and sign up options, clear form data and do not show pswd:
  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);   
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        {isSignUp 
        ?        
        <>
          <SignUp/>   
          <Button onClick={switchMode}>{isSignUp ? 'Already have an account? Sign in!' : "Don't have an account yet? Sign up!" }</Button>
        </>
        : 
        <>
          <SignIn/> 
          <Button onClick={switchMode}>
          {isSignUp ? 'Already have an account? Sign in!' : "Don't have an account yet? Sign up!" }
          </Button>
        </>     
        }      
      </Paper>
   </Container>
  );
};

export default Auth;