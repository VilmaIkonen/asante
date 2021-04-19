import { Button } from '@material-ui/core';
import useStyles from './stylesLargeButton';

const LargeButton = ({onClick, icon, name}) => {

  const classes = useStyles();

  return (
    <Button 
      className={classes.buttonSubmit}
      variant='contained'
      size='large'
      type='submit'
      fullWidth
      disableElevation={true}
      onClick={onClick}
      startIcon={icon}>{name}</Button>
  );
};

export default LargeButton;