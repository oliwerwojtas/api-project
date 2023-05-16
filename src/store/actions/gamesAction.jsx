import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  getPlatforms,
  searchGameURL,
} from "../../configs/endpoints";

export const loadGames = createAsyncThunk("games/loadGames", async () => {
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const platformsData = await axios.get(getPlatforms());
  const allData = await axios.get(popularGamesURL());

  return {
    popular: popularData.data.results,
    newGames: newGamesData.data.results,
    upcoming: upcomingData.data.results,
    platforms: platformsData.data.results,
    allGames: allData.data.results,
  };
});

export const fetchSearch = createAsyncThunk("games/fetchSearch", async (game_name) => {
  const searchedData = await axios.get(searchGameURL(game_name));
  return {
    searched: searchedData.data.results,
  };
});
