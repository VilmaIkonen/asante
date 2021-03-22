import { createMuiTheme } from '@material-ui/core/styles';

const themeFresh = createMuiTheme({
  palette: {
    primary: {
      light30: '#ceeb4c4d',
      light50: '#ceeb4c80',
      main: '#ceeb4c'      
    },
    secondary: {
      light30: '#db7b404d',
      light50: '#db7b4080',
      main: '#db7b40' 
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