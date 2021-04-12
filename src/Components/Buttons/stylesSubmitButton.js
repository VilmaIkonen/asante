import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
  } 
}));