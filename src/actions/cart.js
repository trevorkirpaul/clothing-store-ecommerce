import axios from 'axios';
import { CART_GET, CHECK_CODE, REMOVE_CODE, SHIP_OPTIONS_GET } from '../config';

export const getCart = token => {
  return dispatch => {
    dispatch({
      type: 'CART:LOAD_CART',
      loading: true,
    });
    axios
      .get(CART_GET, token)
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

export const removePromoCode = userID => {
  return dispatch => {
    dispatch({
      type: 'CART:CHECKING_PROMO_CODE',
      loading: true,
      error: false,
      message: 'Removing promo code from server...',
    });
    axios
      .post(REMOVE_CODE, { userID })
      .then(({ data }) => {
        dispatch({
          type: 'CART:REMOVE_PROMO_CODE',
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

// get shipping options

export const getShippingOptions = () => {
  return dispatch => {
    dispatch({
      type: 'CART:LOADING_SHIPPING_OPTIONS',
      loading: true,
      error: false,
      message: 'fetching options from database',
    });
    axios
      .get(SHIP_OPTIONS_GET)
      .then(({ data }) => {
        dispatch({
          type: 'CART:RECIEVE_SHIPPING_OPTIONS',
          loading: false,
          error: false,
          message: 'succesfully recieved options',
          options: data.options,
        });
      })
      .catch(() => {
        dispatch({
          type: 'CART:ERROR',
          loading: false,
          error: true,
        });
      });
  };
};

export const setShipping = option => ({
  type: 'CART:SELECT_SHIPPING_OPTION',
  option,
});
