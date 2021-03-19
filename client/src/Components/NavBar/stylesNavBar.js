import { makeStyles } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import { COLORS_SOFT, COLORS_FRESH, COLORS_BREEZE, FONTS } from '../../Constants/styleConstants';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 5,
    backgroundColor: COLORS_FRESH.colorMain,
    margin: '2rem 0',    
  },
  brandContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems: 'center',
    marginTop: '2rem'
  },
  heading: {
    color: COLORS_FRESH.colorDark,
    fontFamily: FONTS.font1,
    fontWeight: 'bold',
    paddingTop: '1rem',
    textDecoration: 'none',
    fontSize: '7rem',
    fontWeight:'400'
  },
  heading2: {
    color: COLORS_FRESH.colorDark,
    fontFamily: FONTS.font2,
    padding: '1rem',
    fontSize: '2rem'
  },
  toolbar: {
    paddingBottom: '2rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  userProfile: {
    display: 'flex',
    justifyContent: 'flex-start',
    width:'400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: FONTS.font2,
    color: COLORS_FRESH.colorThird,
    margin: '0 2rem'
  },
  avatar: {
    color: COLORS_FRESH.colorThird,
    backgroundColor: COLORS_FRESH.colorFourthOpacity50,
    fontFamily: FONTS.font2
  },
  signin: {
    backgroundColor: COLORS_FRESH.colorSecondary,
    color: COLORS_FRESH.colorLight,
    fontFamily: FONTS.font2
  },
  logout: {
    backgroundColor: COLORS_FRESH.colorSecondary,
    color: COLORS_FRESH.colorLight,
    fontFamily: FONTS.font2
  }
}));