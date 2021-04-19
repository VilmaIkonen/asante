import { Button } from '@material-ui/core';
import useStyles from './stylesLargeButton';

const AccordionButton = ({onClick}) => {

  const classes = useStyles();

  return (
    <Button 
      className={classes.buttonSubmit}
      variant='contained'
      size='large'
      fullWidth
      onClick={onClick}
      disableElevation={true}>Signin with email</Button>
  );
};

export default AccordionButton;