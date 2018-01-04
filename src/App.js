import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './components/router/AppRouter';
import { tokenAuth } from './actions/auth';
import { getCart } from './actions/cart';
import { getAllProducts } from './actions/products';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = configureStore();

class App extends Component {
  componentDidMount() {
    // if token exists, automatically sign in
    const token = localStorage.getItem('token');
    if (token) {
      store.dispatch(tokenAuth(token));
      store.dispatch(getCart(token));
      store.dispatch(getAllProducts());
    }
  }
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <AppRouter />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
