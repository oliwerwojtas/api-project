import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailsReducer";
import genresReducer from "./genresReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
  genres: genresReducer,
});

export default rootReducer;
