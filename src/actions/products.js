import axios from 'axios';
import { PROD_GET_ALL } from '../config';

export const getAllProducts = () => {
  return dispatch => {
    dispatch({
      type: 'PRODUCTS:LOADING',
      contents: {
        loading: true,
      },
    });
    axios
      .get(PROD_GET_ALL)
      .then(({ data }) => {
        dispatch({
          type: 'PRODUCTS:RECIEVE_ALL',
          contents: {
            loading: false,
            items: data.products,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: 'PRODUCTS:ERROR',
          contents: {
            loading: false,
            error: true,
          },
        });
      });
  };
};
