import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  buttonSmall: {
    borderRadius: '10px',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.dark.main,
    fontWeight: 800,
    padding: '.8rem 1.6rem',
    '&:hover': {     
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.dark.main
    }
  }
}));