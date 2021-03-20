import { makeStyles } from '@material-ui/core/styles';
import { COLORS_SOFT, COLORS_FRESH, COLORS_BREEZE, FONTS } from '../../../Constants/styleConstants'

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '.3rem',
    height: '100%',
    position: 'relative',
    backgroundColor: COLORS_FRESH.colorMainOpacity50,
    zIndex: '100'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    zIndex: '1'
  },
  border: {
    border: 'solid'
  },
  fullHeightCard: {
    height: '100%'
  },
  overlay: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    fontWeight:'bold',
    color: COLORS_FRESH.colorTextPrimary,
    fontFamily: FONTS.fontText
    // mixBlendMode: 'difference'  
    ,
    zIndex: '1'
  },
  creatorCreatedEdit: {
    fontFamily: FONTS.fontText,
    color: COLORS_FRESH.colorTextPrimary
  },
  overlay2: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    color: COLORS_FRESH.colorTextPrimary,
    fontWeight:'bold',
    // mixBlendMode: 'difference'  
    
    zIndex: '1'
  },
  grid: {
    display: 'flex'
  },
  message: {
    fontFamily: FONTS.fontText,
    color: COLORS_FRESH.colorTextPrimary,
  },
  recipient: {
    padding: '0 1rem',
    fontFamily: FONTS.fontHeadingEmphasis,
    color: COLORS_FRESH.colorTextPrimary,   
  },
  cardActions: {
    padding: '0 1rem .5rem 1rem',
    display: 'flex',
    justifyContent: 'space-between'
  },
  likeDeleteButton: {
    color: COLORS_FRESH.colorIconsPrimary,
    fontFamily: FONTS.fontText
  }
});