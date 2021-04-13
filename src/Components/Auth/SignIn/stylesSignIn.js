import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  accordion: {
    backgroundColor: theme.palette.primary.light
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.light.main,
    borderRadius: '10px',
  }  
}));