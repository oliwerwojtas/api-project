import { combineReducers } from "redux";
import gamesSlice from "./gamesSlice";
import detailSlice from "./detailsSlice";
import genresSlice from "./genresSlice";

const rootReducer = combineReducers({
  games: gamesSlice,
  detail: detailSlice,
  genres: genresSlice,
});

export default rootReducer;
