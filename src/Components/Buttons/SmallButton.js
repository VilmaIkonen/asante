import { Button } from '@material-ui/core';
import useStyles from './stylesAuth';

const SmallButton = ({name, onClick}) => {

  const classes = useStyles();

  return (
    <Button id="input-button" onClick={onClick}>{name}</Button>
  );
};

export default SmallButton;