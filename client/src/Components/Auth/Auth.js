import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import useStyles from './stylesAuth'
import Input from './Input';

const Auth = () => {

  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const notRegisteredUser = false;
  const handleSubmit = () => {}
  const handleChange = () => {}
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword); // toggling showpassword: if off, turn of, if on, turn off (callback function on previous state, what ever it was)

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={5}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography variant='h5'>{notRegisteredUser ? 'Sign up' : 'Sign in'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {notRegisteredUser ? (
              <>
                <Input name='firstName' label='First name' handleChange={handleChange} autoFocus half/>
                <Input name='lastName' label='Last name' handleChange={handleChange} half/>
              </>
            ) : null}
            <Input name='email' label='Email address' handleChange={handleChange} type='email'/>
            <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
            {/* below show only if on the Sign up form */}
            {notRegisteredUser ? <Input name='confirmPassword' label='Confirm password' handleChange={handleChange} type='password'/> : null }
          </Grid>
          <Button className={classes.submit} type='submit' fullWidth variant='contained'>
            {notRegisteredUser ? 'Sign up' : 'Sign in'}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;