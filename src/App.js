import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './components/router/AppRouter';
import { tokenAuth } from './actions/auth';
import { getCart } from './actions/cart';

const store = configureStore();

class App extends Component {
  componentDidMount() {
    // if token exists, automatically sign in
    const token = localStorage.getItem('token');
    if (token) {
      store.dispatch(tokenAuth(token));
      store.dispatch(getCart(token));
    }
  }
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
