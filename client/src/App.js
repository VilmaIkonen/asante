import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';
import { themeFresh, themeBreeze, themeSoft } from './Constants/themes';

const App = () => {

  return (
    <ThemeProvider theme={themeFresh}>
      <CssBaseline>
        <BrowserRouter>
          <Container maxwidth="lg">
            <NavBar/>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/auth' exact component={Auth}/>
            </Switch>
          </Container>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>

  )
};

export default App;