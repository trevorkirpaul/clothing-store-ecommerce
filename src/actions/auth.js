import axios from 'axios';
import { SIGN_IN, TOKEN, CREA_USER, VERIFY_EMAIL } from '../config';

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
            id: data.user._id,
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
        // if verified email & account
        if (data.active === true) {
          localStorage.setItem('token', data.token);
          dispatch({
            type: 'AUTH:SUCCESSFUL_SIGN_IN',
            auth: {
              token: data.token,
              loading: false,
              id: data.id,
            },
          });
        } else {
          dispatch({
            type: 'AUTH:FAILED_EMAIL_UNVERIFIED',
            auth: {
              loading: false,
              error: false,
              unverifiedEmail: true,
            },
          });
        }
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

export const signUp = (email, password) => {
  return dispatch => {
    dispatch({
      type: 'AUTH:CLICKED_SIGN_UP',
      auth: {
        loading: true,
      },
    });
    axios
      .post(CREA_USER, { email, password })
      .then(({ data }) => {
        dispatch({
          type: 'AUTH:SUCCESSFUL_ACCOUNT_CREATION',
          auth: {
            loading: false,
            error: false,
            message: data.message,
            accountCreated: data.accountCreated,
          },
        });
      })
      .catch(error => {
        dispatch({
          type: 'AUTH:FAILED_SIGN_UP',
          auth: {
            error: error.response.data.error,
            loading: false,
          },
        });
      });
  };
};

export const verifyEmail = token => {
  return dispatch => {
    dispatch({
      type: 'AUTH:BEGIN_VERIFY_EMAIL',
      auth: {
        loading: true,
      },
    });
    axios
      .post(VERIFY_EMAIL, { token })
      .then(({ data }) => {
        dispatch({
          type: 'AUTH:SUCCESSFUL_VERIFY_EMAIL',
          auth: {
            loading: false,
            error: false,
            token: data.token,
            id: data.id,
            message: data.message,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: 'AUTH:FAILED_VERIFY_EMAIL',
          auth: {
            loading: false,
            error: false,
          },
        });
      });
  };
};
