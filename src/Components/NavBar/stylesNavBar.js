import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.fourth.main
  },
  brandContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    marginTop: '2rem',
    padding: '0 2rem'
  },
  [theme.breakpoints.down('sm')]: {
    brandContainer: {
    flexDirection: "column",
    } 
  },
  [theme.breakpoints.up('lg')]: {
    brandContainer: {
    flexDirection: "column",
    } 
  },
  heading: {
    color: theme.palette.primary.dark,
    paddingTop: '1rem',
    textDecoration: 'none'
  },
  [theme.breakpoints.down('sm')]: {
    logo: {
    display: "none",
    } 
  },
  heading2: {
    color: theme.palette.primary.main,
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
    backgroundColor: theme.palette.secondary.dark,
    fontWeight: 500,
    fontSize: '1.6rem',
    padding: '1.6rem'
  },
  signin: {
    borderRadius: '10px',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.dark.main,
    fontWeight: 700,
    padding: '.8rem 1.6rem',
    '&:hover': {     
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.dark.main
    }
  },
  logout: {
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