import { InputBase, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';  
import VisibilityOff from '@material-ui/icons/VisibilityOff'; 
import useStyles from './stylesInputLarge';

const InputLarge = ({required, name, label, type, placeholder, value, onChange,  multiline, autoFocus}) => {

  const classes = useStyles();

  return (
    <InputBase
      className={classes.input}
      fullWidth
      required={required}
      name={name}  
      label={label}    
      type={type}     
      placeholder={placeholder}   
      value={value} 
      onChange={onChange}
      multiline={multiline}    
      autoFocus={autoFocus}   
    />
  );
};

export default InputLarge;