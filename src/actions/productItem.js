import axios from 'axios';
import { PROD_GET_ONE } from '../config';

export const getProduct = productID => {
  return dispatch => {
    dispatch({
      type: 'PRODUCT:LOADING',
      loading: true,
      error: false,
    });
    axios
      .post(PROD_GET_ONE, { productID })
      .then(({ data }) => {
        dispatch({
          type: 'PRODUCT:RECIEVE_ITEM',
          loading: false,
          error: false,
          product: data.product,
        });
      })
      .catch(() => {
        dispatch({
          type: 'PRODUCT:ERROR',
          loading: false,
          error: true,
        });
      });
  };
};
