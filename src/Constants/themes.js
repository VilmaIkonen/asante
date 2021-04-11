import { createMuiTheme } from '@material-ui/core/styles';

const themeFresh = createMuiTheme({
  palette: {
    primary: {
      light: '#5fa5364d',
      dark: '#5fa53680',
      main: '#5fa536'      
    },
    secondary: {
      light: '#e6a3794d',
      dark: '#e6a37980',
      main: '#e6a379' 
    },
    third: {
      light: '#1919194d',
      dark: '#19191980',
      main: '#191919'
    },
    fourth: {
      dark: '#f7f7f780',
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
      main: '#459a8e',
      light: '#a2cdc7',
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
    fourth: {
      main: '#fafafa',
      dark: '#dedede'      
    },
    light: {
      main: '#ffffff'
    },
    dark: {
      main: '#013230' 
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

const themeSoft = createMuiTheme({
  palette: {
    primary: {
      light: '#06234f4d',
      dark: '#06234f80',
      main: '#06234f'      
    },
    secondary: {
      light: '#ffc3bc4d',
      dark: '#ffc3bc80',
      main: '#ffc3bc' 
    },
    third: {
      light: '#18133e4d',
      dark: '#18133e80',
      main: '#18133e'
    },
    fourth: {
      dark: '#f7f7f780',
      main: '#f7f7f7'
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


export {themeFresh, themeBreeze, themeSoft};