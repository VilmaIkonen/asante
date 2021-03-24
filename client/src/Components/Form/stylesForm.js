import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.light30,
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
    backgroundColor: theme.palette.fourth.main
  },
  fileInput: {
    width: '92%',
    margin: '1rem 0'
  },
  buttonSubmit: {
    marginBottom: '1rem',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.light.main
  },
  buttonClear: {
    marginBottom: '1rem',
    backgroundColor: theme.palette.fourth.main,
    color: theme.palette.third.main 
  }
}));