import { Button } from '@material-ui/core';
import useStyles from './stylesSubmitButton';

const SubmitButton = ({onClick, icon, name}) => {

  const classes = useStyles();

  return (
    <Button 
      className={classes.buttonSubmit}
      variant='contained'
      size='large'
      type='submit'
      fullWidth
      disableElevation='true'
      onClick={onClick}
      startIcon={icon}>{name}</Button>
  );
};

export default SubmitButton;