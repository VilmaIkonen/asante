import { createMuiTheme } from '@material-ui/core/styles';

const themeSoft = createMuiTheme({
  palette: {
    primary: {
      light: '#06234f4d',
      dark: '#06234f',
      main: '#06234f'      
    },
    secondary: {
      light: '#ffc3bc4d',
      dark: '#ffc3bc',
      main: '#ffc3bc' 
    },
    third: {
      light: '#18133e4d',
      dark: '#18133e',
      main: '#18133e'
    },
    fourth: {
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