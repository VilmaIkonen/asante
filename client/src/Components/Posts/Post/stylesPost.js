import { makeStyles } from '@material-ui/core/styles';
import { COLORS_SOFT, COLORS_FRESH, COLORS_BREEZE, FONTS } from '../../../Constants/styleConstants'

export default makeStyles({
  font: {
    fontFamily: FONTS.font2,
    marginBottom: '1rem'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '.3rem',
    height: '100%',
    position: 'relative',
    backgroundColor: COLORS_FRESH.colorMainOpacity30
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  overlay: {
    display:' inline-flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    fontWeight:'bold',
    color: COLORS_FRESH.colorThird,
    width: '90%',
    padding: '0rem'
  },
  container: {
    color: COLORS_FRESH.colorThird,
  },
  message: {
    marginBottom: '1.5rem'
  },
  creator: {
    fontSize: '1.2rem'
  },
  cardActions: {   
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0rem'
  },
  likeDelete: {   
    marginBottom: '0rem'
  }
});