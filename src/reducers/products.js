const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'PRODUCTS:LOADING':
      return { ...action.contents };
    case 'PRODUCTS:RECIEVE_ALL':
      return { ...action.contents };
    case 'PRODUCTS:ERROR':
      return { ...action.contents };
    default:
      return state;
  }
};
