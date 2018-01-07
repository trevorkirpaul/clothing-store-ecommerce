import axios from 'axios';
import { CHECKOUT } from '../config';

export const create = ({ userID, cartItems, discount, shipping }) => {
  return dispatch => {
    dispatch({
      type: 'CHECKOUT:LOADING',
      loading: true,
      error: false,
    });
    axios
      .post(CHECKOUT, { userID, cartItems, discount, shipping })
      .then(({ data }) => {
        dispatch({
          type: 'CHECKOUT:CREATE_ORDER',
          message: data.message,
          order: data.order,
          error: false,
          loading: false,
        });
      })
      .catch(() => {
        dispatch({
          type: 'CHECKOUT:ERROR',
          loading: false,
          error: true,
        });
      });
  };
};

export const clear = () => ({
  type: 'CHECKOUT:CLIENT_CONFIRM',
  order: null,
});
