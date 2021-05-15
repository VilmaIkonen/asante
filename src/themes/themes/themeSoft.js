import { createMuiTheme } from '@material-ui/core/styles';

const themeSoft = createMuiTheme({
  palette: {
    primary: {
      light: '#7988a0',
      light2: '#bcc4d0',
      dark: '#192e4e',
      main: '#1f3961'      
    },
    secondary: {
      light: '#ffc3bc',
      dark: '#ffc3bc',
      main: '#ffc3bc' 
    },
    third: {
      light: '#18133e',
      dark: '#18133e',
      main: '#18133e'
    },
    bg: {
      main: '#fafafa',
      dark: '#dedede'
    },
    light: {
      main: '#ffffff'
    },
    dark: {
      main: '#16132c' 
    } 
  },
  typography: {
    fontFamily: {
      font1: "'Shadows Into Light', cursive",
      font2: "'Source Sans Pro', sans-serif"
    },
    h1: {
      fontFamily: "'Shadows Into Light', cursive",
      fontWeight: 550,
      fontSize: '8rem'
    },
    h2: {
      fontFamily: "'Source Sans Pro', sans-serif",
      fontWeight: 400,
      fontSize: '2.2rem'
    },
    h3: {
      fontFamily: "'Shadows Into Light', cursive",
      fontSize: '2rem',
      fontWeight: 500
    },
    h4: {
      fontFamily: "'Source Sans Pro', sans-serif",
      fontSize: '1.8rem'
    },
    h5: {
      fontFamily: "'Source Sans Pro', sans-serif",
      fontSize: '1.6rem'
    },
    body1: {
      fontFamily: "'Source Sans Pro', sans-serif",
      fontWeight: 400,
      fontSize: '1.4rem'
    },
    body2: {
      fontFamily: "'Source Sans Pro', sans-serif",
      fontWeight: 400,
      fontSize: '1.2rem',
      marginTop: '1rem'
    },
    button: {
      fontFamily: "'Source Sans Pro', sans-serif",
      fontWeight: 600
    }
  }
}); 

export default themeSoft