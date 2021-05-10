import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  customError: {
    color: theme.palette.accent.main,
    padding: '0 0 0 1rem',
    marginTop: '0'
  }  
}));