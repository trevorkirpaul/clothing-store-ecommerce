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

// this is dispatched after order is submit in CHeckoutContainer
// when user clicks ok in the dialog popup
// this resets all local state to before cartItems added
// or shipping selected
// NOTE: promoCode is pulled from DB so we ignore that
export const clear = () => {
  return dispatch => {
    dispatch({
      type: 'CHECKOUT:CLIENT_CONFIRM',
      order: false,
    });
    dispatch({
      type: 'CART:CLEAR_SHIPPING_OPTION',
      option: false,
    });
  };
};
