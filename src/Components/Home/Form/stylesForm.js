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
    borderRadius: '15px',
    border: 'none',
    '& input::placeholder': {
      fontSize: '1rem', 
      padding:'.5rem'
    }
  },
  fileInput: {
    width: '92%',
  },
  buttonSubmit: {
    borderRadius: '10px',
    margin: '2rem 0 1rem',
    padding: '.8rem 1.6rem',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.dark.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.light.main
    }
  },
  buttonClear: {
    borderRadius: '10px',
    marginBottom: '1rem',
    padding: '.8rem 1.6rem',
    backgroundColor: theme.palette.light.main,
    color: theme.palette.dark.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.dark.main
    }
  }
}));