import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL, getPlatforms } from "../api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const platformsData = await axios.get(getPlatforms());
  console.log(platformsData);

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingData.data.results,
      platforms: platformsData.data.results,
    },
  });
};
