import { createMuiTheme } from '@material-ui/core/styles';

const themeBreeze = createMuiTheme({
  palette: {
    primary: {
      main: '#887492',
      light: '#a2cdc7',
      light2: '#daebe8',
      dark: '#306c63'           
    },
    secondary: {
      main: '#d7f7fc',
      light: '#dff9fd',
      dark: '#acc6ca'       
    },
    third: {
      main: '#025955',
      light: '#357a77',
      dark: '#024744'      
    },
    bg: {
      main: '#434B57',
      dark: '#1B1E22'      
    },
    light: {
      main: '#ffffff'
    },
    dark: {
      main: '#013230' 
    },
    accent: {
      main: '#92025d'
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

export default themeBreeze