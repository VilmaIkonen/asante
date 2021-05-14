import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Components/NavBar/Header';
import SubHeader from './Components/NavBar/SubHeader';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';
import CustomThemeProvider from './themes/ThemeComponents/CustomThemeProvider'

const App = () => {

  return (
    <CustomThemeProvider>
      <CssBaseline>
        <BrowserRouter>
          <Container maxWidth={false}>
            <Switch>
              <Route path='/' exact><Header/><SubHeader/><Home/></Route>
              <Route path='/auth' exact><Header/><Auth/></Route>
            </Switch>
          </Container>
        </BrowserRouter>
      </CssBaseline>
    </CustomThemeProvider>
  )
};

export default App;