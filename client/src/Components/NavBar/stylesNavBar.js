import { makeStyles } from '@material-ui/core';
import { COLORS, FONTS } from '../../Constants/styleConstants';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 5,
    backgroundColor: COLORS.colorHeaderFooter,
    margin: '2rem 0',
    
  },
  brandContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  heading: {
    color: COLORS.colorTextSecondary,
    fontFamily: FONTS.fontHeadingEmphasis,
    fontWeight: 'bold',
    paddingTop: '1rem'
  },
  heading2: {
    color: COLORS.colorTextSecondary,
    fontFamily: FONTS.fontHeadingEmphasis,
    padding: '1rem'  
  },
  logo: {
   marginLeft: '2rem'
  },
  toolbar: {
    color: 'red'
  }
}));