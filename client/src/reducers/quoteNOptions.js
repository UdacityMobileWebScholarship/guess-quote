const initialState = {
  quoteNOption: { options: [] },
  selectedAnswer: { value: "", is_correct: false }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUOTE_N_OPTIONS":
      return Object.assign({}, state, {
        quoteNOption: action.payload.quoteNOption
      });
    case "SET_SELECTED_ANSWER":
      return Object.assign({}, state, {
        selectedAnswer: action.payload.selectedAnswer
      });
    default:
      return state;
  }
};
