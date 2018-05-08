const initialState = {
  quoteNOption: { options: [] }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUOTE_N_OPTIONS":
      return Object.assign({}, state, {
        quoteNOption: action.payload.quoteNOption
      });
    default:
      return state;
  }
};
