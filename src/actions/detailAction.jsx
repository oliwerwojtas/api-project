import axios from "axios";
import { gameDetails, gameScreenshot, seriesGamesURL, gameAchievements } from "../api";
export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAILS",
  });

  const detailData = await axios.get(gameDetails(id));
  const screenShotData = await axios.get(gameScreenshot(id));
  const seriesData = await axios.get(seriesGamesURL(id));
  const achievementsData = await axios.get(gameAchievements(id));

  console.log(detailData);

  dispatch({
    type: "GET_DETAILS",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
      series: seriesData.data,
      achievements: achievementsData.data,
    },
  });
};
