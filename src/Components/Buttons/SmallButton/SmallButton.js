import { Button } from '@material-ui/core';
import useStyles from './stylesSmallButton';

const SmallButton = ({onClick, name}) => {

  const classes = useStyles();

  return (
    <Button 
      className={classes.buttonSmall}
      variant='contained'
      size='small'
      disableElevation={true}
      onClick={onClick}>{name}</Button>
  );
};

export default SmallButton;