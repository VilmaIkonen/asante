import { makeStyles } from '@material-ui/core/styles';
import { COLORS, FONTS } from '../../../Constants/styleConstants'

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: COLORS.colorCardBg
  },
  border: {
    border: 'solid'
  },
  fullHeightCard: {
    height: '100%'
  },
  card: {
    backgroundColor: COLORS.colorCardBg,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '.3rem',
    height: '100%',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    fontWeight:'bold',
    color: COLORS.colorTextPrimary,
    fontFamily: FONTS.fontText
    // mixBlendMode: 'difference'  
  },
  creatorCreatedEdit: {
    fontFamily: FONTS.fontText,
    color: COLORS.colorTextPrimary
  },
  overlay2: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    color: COLORS.colorTextPrimary,
    fontWeight:'bold',
    // mixBlendMode: 'difference'  
  },
  grid: {
    display: 'flex'
  },
  message: {
    fontFamily: FONTS.fontText,
    color: COLORS.colorTextPrimary,
  },
  recipient: {
    padding: '0 1rem',
    fontFamily: FONTS.fontHeadingEmphasis,
    color: COLORS.colorTextPrimary,   
  },
  cardActions: {
    padding: '0 1rem .5rem 1rem',
    display: 'flex',
    justifyContent: 'space-between'
  },
  likeDeleteButton: {
    color: COLORS.colorIconsPrimary,
    fontFamily: FONTS.fontText
  }
});