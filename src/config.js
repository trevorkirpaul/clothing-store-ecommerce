const url = 'http://192.168.1.137:3001';

export const API = {
  MAIN: `${url}`,
  SIGN_IN: `${url}/api/users/signin`,
  TOKEN: `${url}/`,
};

export const CREA_USER = `${url}/api/users`;
export const SIGN_IN = `${url}/api/users/signin`;
export const TOKEN = `${url}/`;
export const CART_GET = `${url}/api/cart`;
export const PROD_GET_ALL = `${url}/api/products`;
export const CART_ADD = `${url}/api/cartItem/add`;
export const CART_REMOVE = `${url}/api/cartItem/remove`;
export const PROD_GET_ONE = `${url}/api/product`;
export const PROD_IMAGE = `${url}/images/`;
export const CHECK_CODE = `${url}/api/promo-code`;
export const REMOVE_CODE = `${url}/api/promo-remove`;
export const CHECKOUT = `${url}/api/checkout`;
export const SHIP_OPTIONS_GET = `${url}/api/shipping`;
export const VERIFY_EMAIL = `${url}/api/users/verify`;
