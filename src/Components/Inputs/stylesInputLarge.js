import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  input: {
    backgroundColor: theme.palette.fourth.main,
    borderRadius: '10px',
    border: 'none',
    margin: '1rem 0',
    padding: '.5rem 1rem',
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: 400,
    fontSize: '1.2rem',
    height: '5vh' 
  } 
}));