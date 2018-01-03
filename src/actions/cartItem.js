import axios from 'axios';
import { CART_ADD, CART_REMOVE } from '../config';

export const addItem = item => {
  return dispatch => {
    dispatch({
      type: 'CART:START_TRANSACTION',
      loading: true,
    });
    axios
      .post(CART_ADD, { item })
      .then(({ data }) => {
        dispatch({
          type: 'CART:ADD_ITEM',
          loading: false,
          error: false,
          message: data.message,
        });
      })
      .catch(err => {
        dispatch({
          type: 'CART:ERROR',
          loading: false,
          error: err.response.data.error,
        });
      });
  };
};

export const removeItem = item => {
  return dispatch => {
    dispatch({
      type: 'CART:START_TRANSACTION',
      loading: true,
    });
    axios
      .put(CART_REMOVE, { cartItem: item })
      .then(({ data }) => {
        dispatch({
          type: 'CART:REMOVE_ITEM',
          loading: false,
          error: false,
          message: data.message,
          contents: data.cart,
        });
      })
      .catch(err => {
        dispatch({
          type: 'CART:ERROR',
          loading: false,
          error: err.response.data.error,
        });
      });
  };
};
