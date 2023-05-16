import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  gameDetails,
  gameScreenshot,
  seriesGamesURL,
  gameAchievements,
} from "../../configs/endpoints";

export const loadDetail = createAsyncThunk("detail/loadDetail", async (id) => {
  const detailData = await axios.get(gameDetails(id));
  const screenShotData = await axios.get(gameScreenshot(id));
  const seriesData = await axios.get(seriesGamesURL(id));
  const achievementsData = await axios.get(gameAchievements(id));

  return {
    game: detailData.data,
    screen: screenShotData.data,
    series: seriesData.data,
    achievements: achievementsData.data,
  };
});
