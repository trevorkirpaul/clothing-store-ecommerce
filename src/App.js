import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './components/router/AppRouter';
import { tokenAuth } from './actions/auth';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TokenAuthLoader from './components/InitLoad/TokenAuthLoader';

const store = configureStore();

class App extends Component {
  componentDidMount() {
    // if token exists, automatically sign in
    const token = localStorage.getItem('token');
    if (token) {
      store.dispatch(tokenAuth(token));
      this.setState({ open: true });
    }
  }

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div>
            <AppRouter />
            <TokenAuthLoader />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
