import { createMuiTheme } from '@material-ui/core/styles';

const themeFresh = createMuiTheme({
  palette: {
    primary: {
      light30: '#5fa5364d',
      light50: '#5fa53680',
      main: '#5fa536'      
    },
    secondary: {
      light30: '#e6a3794d',
      light50: '#e6a37980',
      main: '#e6a379' 
    },
    third: {
      light30: '#1919194d',
      light50: '#19191980',
      main: '#191919'
    },
    fourth: {
      light50: '#f7f7f780',
      main: '#f7f7f7'
    },
    light: {
      main: '#ffffff'
    },
    dark: {
      main: '#000000' 
    } 
  },
  typography: {
    fontFamily: {
      font1: "'Shadows Into Light', cursive",
      font2: "'Source Sans Pro', sans-serif"
    },
    h1: {
      fontFamily: "'Shadows Into Light', cursive",
      fontWeight: 400,
      fontSize: '7rem'
    },
    h2: {
      fontFamily: "'Source Sans Pro', sans-serif",
      fontSize: '2.2rem'
    },
    h3: {
      fontFamily: "'Shadows Into Light', cursive",
      fontSize: '2rem'
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
      fontWeight: 300,
      fontSize: '1.2rem'
    },
    button: {
      fontFamily: "'Source Sans Pro', sans-serif",
      fontWeight: 600
    }
  }
});

const themeBreeze = createMuiTheme({
  palette: {
    primary: {
      light30: '#459a8e4d',
      light50: '#459a8e80',
      main: '#459a8e'      
    },
    secondary: {
      light30: '#d7f7fc4d',
      light50: '#d7f7fc80',
      main: '#d7f7fc' 
    },
    third: {
      light30: '#0259554d',
      light50: '#02595580',
      main: '#025955'
    },
    fourth: {
      light50: '#f7f7f780',
      main: '#f7f7f7'
    },
    light: {
      main: '#ffffff'
    },
    dark: {
      main: '#015450' 
    } 
  },
  typography: {
    fontFamily: {
      font1: "'Shadows Into Light', cursive",
      font2: "'Source Sans Pro', sans-serif"
    },
    h1: {
      fontFamily: "'Shadows Into Light', cursive",
      fontWeight: 400,
      fontSize: '7rem'
    },
    h2: {
      fontFamily: "'Source Sans Pro', sans-serif",
      fontSize: '2.2rem'
    },
    h3: {
      fontFamily: "'Shadows Into Light', cursive",
      fontSize: '2rem'
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
      fontWeight: 300,
      fontSize: '1.2rem'
    },
    button: {
      fontFamily: "'Source Sans Pro', sans-serif",
      fontWeight: 600
    }
  }
}); 

const themeSoft = createMuiTheme({
  palette: {
    primary: {
      light30: '#06234f4d',
      light50: '#06234f80',
      main: '#06234f'      
    },
    secondary: {
      light30: '#ffc3bc4d',
      light50: '#ffc3bc80',
      main: '#ffc3bc' 
    },
    third: {
      light30: '#18133e4d',
      light50: '#18133e80',
      main: '#18133e'
    },
    fourth: {
      light50: '#f7f7f780',
      main: '#f7f7f7'
    },
    light: {
      main: '#ffffff'
    },
    dark: {
      main: '#16132c' 
    } 
  }
}); 


export {themeFresh, themeBreeze, themeSoft};