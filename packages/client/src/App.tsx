import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ApolloProvider } from '@apollo/react-common';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme/theme';
import Routes from './Routes';
import apolloClient from './apolloClient';

const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}
