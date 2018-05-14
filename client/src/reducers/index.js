import { combineReducers } from "redux";
import sample from "./sample";
import quoteNOptions from "./quoteNOptions";

const rootReducer = combineReducers({
  sample,
  quoteNOptions
});

export default rootReducer;
