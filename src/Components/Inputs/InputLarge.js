import { Grid, InputBase } from '@material-ui/core';
import useStyles from './stylesInputLarge';

const InputLarge = ({label, required, name, type, value, onChange,  multiline, autoFocus}) => {

  const classes = useStyles();

  return (
    <Grid container>
      <p className={classes.label}>{label}</p>
    <InputBase
      className={classes.input}
      fullWidth
      required={required}
      name={name}    
      type={type}   
      value={value} 
      onChange={onChange}
      multiline={multiline}    
      autoFocus={autoFocus}
    /></Grid>
  );
};

export default InputLarge;