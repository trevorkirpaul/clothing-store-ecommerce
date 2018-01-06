import axios from 'axios';
import { CART_GET, CHECK_CODE } from '../config';

const tokenObject = {
  headers: {
    authorization: localStorage.getItem('token'),
  },
};

export const getCart = token => {
  return dispatch => {
    dispatch({
      type: 'CART:LOAD_CART',
      loading: true,
    });
    axios
      .get(CART_GET, tokenObject)
      .then(({ data }) => {
        dispatch({
          type: 'CART:RECIEVE_CART',
          loading: false,
          error: false,
          contents: data.cart,
          discount: data.discount,
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

export const checkPromoCode = (codePhrase, userID) => {
  return dispatch => {
    dispatch({
      type: 'CART:CHECKING_PROMO_CODE',
      loading: true,
      error: false,
      message: 'Sending code to server top verify...',
    });
    axios
      .post(CHECK_CODE, { userID, codePhrase })
      .then(({ data }) => {
        dispatch({
          type: 'CART:RECIEVE_PROMO_CODE',
          loading: false,
          error: false,
          message: data.message,
          discount: {
            codePhrase: data.codePhrase,
            amount: data.amount,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: 'CART:ERROR',
          error: true,
          loading: false,
        });
      });
  };
};
