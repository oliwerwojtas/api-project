import axios from "axios";
import { allGenres } from "../api";
export const loadGenres = () => async (dispatch) => {
  const genresData = await axios.get(allGenres());

  console.log(genresData);

  dispatch({
    type: "LOADING_GENRES",
    payload: {
      genres: genresData.data.results,
    },
  });
};