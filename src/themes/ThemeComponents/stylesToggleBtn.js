import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  togglebtn: {
    backgroundColor: theme.palette.primary.light2,
    '&:hover': {     
      backgroundColor: theme.palette.secondary.main
    }
  }
}));