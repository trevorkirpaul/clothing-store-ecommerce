const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'PRODUCT:LOADING':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case 'PRODUCT:RECIEVE_ITEM':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        product: action.product,
      };
    case 'PRODUCT:ERROR':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
};
