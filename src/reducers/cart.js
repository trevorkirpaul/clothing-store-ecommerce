const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CART:LOAD_CART':
      return { ...action.cart };
    case 'CART:RECIEVE_CART':
      return { ...action.cart };
    case 'CART:ERROR':
      return { ...action.cart };
    default:
      return state;
  }
};
