import axios from 'axios';
import { CART_GET } from '../config';

const tokenObject = {
  headers: {
    authorization: localStorage.getItem('token'),
  },
};

export const getCart = token => {
  return dispatch => {
    dispatch({
      type: 'CART:LOAD_CART',
      cart: {
        loading: true,
      },
    });
    axios
      .get(CART_GET, tokenObject)
      .then(({ data }) => {
        dispatch({
          type: 'CART:RECIEVE_CART',
          cart: {
            loading: false,
            contents: data.cart,
          },
        });
      })
      .catch(err => {
        dispatch({
          type: 'CART:ERROR',
          cart: {
            loading: false,
            error: err.response.data.error,
          },
        });
      });
  };
};
