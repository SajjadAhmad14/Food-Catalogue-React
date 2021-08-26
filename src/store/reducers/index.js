import { combineReducers } from "redux";
// import categoryReducer from "./categoryReducer";
import foodReducer from "./foodReducer";

const rootReducer = combineReducers({
  foodReducer,
});

export default rootReducer;