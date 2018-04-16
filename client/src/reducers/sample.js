import { SAMPLE_ACTION } from "../actions/sample";

const initialState = {
  message: null
};

const sample = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return Object.assign({}, state, { message: action.payload.message });

    default:
      return state;
  }
};

export default sample;
