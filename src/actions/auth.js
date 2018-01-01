import axios from 'axios';
import { SIGN_IN } from '../config';

export const connectSignIn = (email, password) => {
  return dispatch => {
    dispatch({
      type: 'AUTH:CLICKED_SIGN_IN',
      auth: {
        loading: true,
      },
    });
    axios
      .post(SIGN_IN, { email, password })
      .then(({ data }) => {
        // if valid
        dispatch({
          type: 'AUTH:SUCCESSFUL_SIGN_IN',
          auth: {
            token: data.token,
            loading: false,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: 'AUTH:FAILED_SIGN_IN',
          auth: {
            loading: false,
          },
        });
      });
  };
};

export const signOut = () => {
  return dispatch => {
    dispatch({
      type: 'AUTH:CLICKED_SIGN_OUT',
      auth: {
        loading: true,
      },
    });
    localStorage.removeItem('token');
    dispatch({
      type: 'AUTH:SUCCESSFUL_SIGN_OUT',
      auth: {
        loading: false,
        token: null,
      },
    });
  };
};
