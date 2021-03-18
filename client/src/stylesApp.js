import { makeStyles } from '@material-ui/core';
import { COLORS, FONTS } from './Constants/styleConstants';

export default makeStyles((theme) => ({

  mainContainer: {
    backgroundColor: COLORS.colorBackground,
  },
  // For mobile devices, moving Form on top:
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
    flexDirection: "column-reverse",
    } 
  }
}));