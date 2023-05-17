import { combineReducers } from "redux";
import gamesSlice from "./gamesSlice";
import detailSlice from "./detailsSlice";
import genresSlice from "./genresSlice";
import favoritesSlice from "./favoritesSlice";

const rootReducer = combineReducers({
  games: gamesSlice,
  detail: detailSlice,
  genres: genresSlice,
  favorites: favoritesSlice,
});

export default rootReducer;
