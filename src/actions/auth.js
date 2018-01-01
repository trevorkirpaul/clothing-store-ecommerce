import axios from 'axios';
import { SIGN_IN, TOKEN } from '../config';

const tokenObject = {
  headers: {
    authorization: localStorage.getItem('token'),
  },
};

export const tokenAuth = token => {
  return dispatch => {
    dispatch({
      type: 'AUTH:BEGIN_TOKEN_SIGN_IN',
      auth: {
        loading: true,
      },
    });
    axios
      .get(TOKEN, tokenObject)
      .then(({ data }) => {
        dispatch({
          type: 'AUTH:SUCCESSFUL_TOKEN_SIGN_IN',
          auth: {
            loading: false,
            token: localStorage.getItem('token'),
            user: data.user,
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

export const signIn = (email, password) => {
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
        localStorage.setItem('token', data.token);
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
