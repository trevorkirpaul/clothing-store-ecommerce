const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CHECKOUT:LOADING':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case 'CHECKOUT:CREATE_ORDER':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        message: action.message,
        order: action.order,
      };
    case 'CHECKOUT:CLIENT_CONFIRM':
      return {
        ...state,
        order: action.order,
      };
    case 'CHECKOUT:ERROR':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
};
