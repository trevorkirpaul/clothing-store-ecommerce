const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CART:LOAD_CART':
      return {
        ...state,
        loading: action.loading,
      };
    case 'CART:START_TRANSACTION':
      return {
        ...state,
        loading: action.loading,
      };
    case 'CART:RECIEVE_CART':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        contents: action.contents,
      };
    case 'CART:ADD_ITEM':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        message: action.message,
      };
    case 'CART:ERROR':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
};
