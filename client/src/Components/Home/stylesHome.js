import { makeStyles } from '@material-ui/core';
// import { COLORS, FONTS } from '../../Constants/styleConstants';

export default makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: theme.palette.fourth.main
  },
  // For mobile devices, moving Form on top:
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
    flexDirection: "column-reverse",
    } 
  }
}));