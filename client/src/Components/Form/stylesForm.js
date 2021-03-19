import { makeStyles } from '@material-ui/core/styles';
import { COLORS_SOFT, COLORS_FRESH, COLORS_BREEZE, FONTS } from '../../Constants/styleConstants'

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: COLORS_FRESH.colorTextSecondary,
    color: COLORS_FRESH.colorTextPrimary
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  heading: {
    fontFamily: FONTS.fontText
  },
  fileInput: {
    width: '92%',
    margin: '1rem 0',
    fontFamily: FONTS.fontText
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: COLORS_FRESH.colorButtonSubmit,
    color: COLORS_FRESH.colorTextSecondary 
  },
  buttonClear: {
    backgroundColor: COLORS_FRESH.colorButtonClear,
    color: COLORS_FRESH.colorTextPrimary,
    fontFamily: FONTS.fontText 
  }
}));