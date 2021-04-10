import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.third.main
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  heading: {
    marginBottom: '2rem'
  },
  input: {
    backgroundColor: theme.palette.fourth.main,
    '& input::placeholder': {fontSize: '1rem'}
  },
  fileInput: {
    width: '92%',
    margin: '1rem 0'
  },
  buttonSubmit: {
    margin: '2rem 0 1rem',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.dark.main
  },
  buttonClear: {
    marginBottom: '1rem',
    backgroundColor: theme.palette.fourth.main,
    color: theme.palette.third.main 
  }
}));