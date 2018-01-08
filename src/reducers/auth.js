const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'AUTH:BEGIN_TOKEN_SIGN_IN':
      return { ...action.auth };
    case 'AUTH:CLICKED_SIGN_IN':
      return { ...action.auth };
    case 'AUTH:CLICKED_SIGN_OUT':
      return { ...action.auth };
    case 'AUTH:CLICKED_SIGN_UP':
      return { ...action.auth };
    case 'AUTH:SUCCESSFUL_TOKEN_SIGN_IN':
      return { ...action.auth };
    case 'AUTH:SUCCESSFUL_SIGN_IN':
      return {
        ...action.auth,
      };
    case 'AUTH:SUCCESSFUL_SIGN_OUT':
      return {
        ...action.auth,
      };
    case 'AUTH:FAILED_SIGN_IN':
      return {
        ...action.auth,
      };
    case 'AUTH:FAILED_SIGN_UP':
      return {
        ...action.auth,
      };
    default:
      return state;
  }
};
