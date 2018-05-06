const initialState = {
  question: { options: [] }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUOTE_N_OPTIONS":
      return Object.assign({}, state, { question: action.payload.question });
    default:
      return state;
  }
};
