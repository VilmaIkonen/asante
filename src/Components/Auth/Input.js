import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';  
import VisibilityOff from '@material-ui/icons/VisibilityOff';  
import useStyles from './stylesAuth';

const Input = ({name, label, handleChange, autoFocus, type, handleShowPassword}) => {

  const classes = useStyles();

  return (
 
      <TextField
        className={classes.input}
        name={name}
        onChange={handleChange}
        variant='outlined'
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputLabelProps={{style: {fontSize: '1rem'}}}
        InputProps={name === 'password' ? {
          endAdornment : (
          <InputAdornment position='end'>
            <IconButton onClick={handleShowPassword}>
              {type === 'password' ? <Visibility/> : <VisibilityOff/>}
            </IconButton>
          </InputAdornment>
          )
        } : null}
      />
   
  );
};

export default Input;