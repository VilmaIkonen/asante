import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '.3rem',
    height: '100%',
    position: 'relative',
    backgroundColor: theme.palette.primary.light30
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  overlay: {
    display:' inline-flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    fontWeight:'bold',
    width: '90%',
    padding: '0rem'
  },
  container: {
    color: theme.palette.third.main
  },
  recipient: {
    marginBottom: '2rem'
  },
  message: {
    marginBottom: '1.5rem'
  },
  creator: {
    fontSize: '1.2rem',
    marginBottom: '1.2rem'
  },
  cardActions: {   
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0rem'
  },
  likeDelete: {   
    marginBottom: '0rem'
  }
}));