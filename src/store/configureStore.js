import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import auth from '../reducers/auth';
import cart from '../reducers/cart';
import products from '../reducers/products';
import product from '../reducers/productItem';
import checkout from '../reducers/checkout';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth,
      cart,
      products,
      product,
      checkout,
      form: formReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
