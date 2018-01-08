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
        itemAdded: action.itemAdded,
      };
    case 'CART:RECIEVE_CART':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        contents: action.contents,
        discount: action.discount,
      };
    case 'CART:ADD_ITEM':
      return {
        ...state,
        loading: action.loading,
        itemAdded: action.itemAdded,
        error: action.error,
        message: action.message,
      };
    case 'CART:REMOVE_ITEM':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        message: action.message,
        contents: action.contents,
      };
    case 'CART:CHECKING_PROMO_CODE':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        message: action.message,
      };
    case 'CART:RECIEVE_PROMO_CODE':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        message: action.message,
        discount: action.discount,
      };
    case 'CART:REMOVE_PROMO_CODE':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        message: action.message,
        discount: action.discount,
      };
    case 'CART:LOADING_SHIPPING_OPTIONS':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        message: action.message,
      };
    case 'CART:RECIEVE_SHIPPING_OPTIONS':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        message: action.message,
        shippingOptions: action.options,
      };
    case 'CART:SELECT_SHIPPING_OPTION':
      return {
        ...state,
        shippingOption: action.option,
      };

    case 'CART:CLEAR_SHIPPING_OPTION':
      return {
        ...state,
        shippingOption: action.option,
      };
    case 'CART:ERROR':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case 'CART:CONFIRM_ITEM_ADDED':
      return {
        ...state,
        itemAdded: action.itemAdded,
      };
    default:
      return state;
  }
};
