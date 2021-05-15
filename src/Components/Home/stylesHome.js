import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: theme.palette.bg.main
  },
  // For mobile devices, moving Form on top:
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
    flexDirection: "column-reverse",
    } 
  }
}));