import { makeStyles } from '@material-ui/core';
// import { COLORS, FONTS } from '../../Constants/styleConstants';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.third.main
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.dark.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  input: {
    backgroundColor: theme.palette.fourth.main,
    marginBottom: '2rem'
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.dark.main
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    width: '100%',
    justifyContent: 'center'
  }
}));