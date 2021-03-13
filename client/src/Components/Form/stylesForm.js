import { makeStyles } from '@material-ui/core/styles';
import { COLORS, FONTS } from '../../Constants/styleConstants'

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: COLORS.colorTextSecondary,
    color: COLORS.colorTextPrimary
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
    backgroundColor: COLORS.colorButtonSubmit,
    color: COLORS.colorTextSecondary 
  },
  buttonClear: {
    backgroundColor: COLORS.colorButtonClear,
    color: COLORS.colorTextPrimary,
    fontFamily: FONTS.fontText 
  }
}));