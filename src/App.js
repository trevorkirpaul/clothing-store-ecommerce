import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './components/router/AppRouter';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
