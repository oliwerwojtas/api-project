import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
  game: gamesReducer,
});

export default rootReducer;
