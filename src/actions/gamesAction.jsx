import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  getPlatforms,
  searchGameURL,
} from "../configs/endpoints";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const platformsData = await axios.get(getPlatforms());
  const allData = await axios.get(popularGamesURL());
  console.log(platformsData);
  console.log(popularData);
  console.log(allData.data.count);
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingData.data.results,
      platforms: platformsData.data.results,
      allGames: allData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchedData = await axios.get(searchGameURL(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchedData.data.results,
    },
  });
};
