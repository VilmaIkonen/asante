import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 5,
    margin: '2rem 0',    
  },
  brandContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems: 'center',
    marginTop: '2rem'
  },
  heading: {
    color: theme.palette.third.main,
    paddingTop: '1rem',
    textDecoration: 'none'
  },
  heading2: {
    color: theme.palette.third.main,
    padding: '1rem',    
  },
  toolbar: {
    paddingBottom: '2rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  userProfile: {
    display: 'flex',
    justifyContent: 'flex-start',
    width:'400px'
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.third.main,
    margin: '0 2rem'
  },
  avatar: {
    color: theme.palette.third.main,
    backgroundColor: theme.palette.secondary.light50,
    fontWeight: 400    
  },
  signin: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.light.main,
    fontWeight: 600
  },
  logout: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.light.main,
    fontWeight: 600
  }
}));