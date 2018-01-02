import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import auth from '../reducers/auth';
import cart from '../reducers/cart';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth,
      cart,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
