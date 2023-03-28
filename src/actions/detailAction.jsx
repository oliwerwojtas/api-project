import axios from "axios";
import { gameDetails, gameScreenshot } from "../api";
export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetails(id));
  const screenShotData = await axios.get(gameScreenshot(id));
  console.log(detailData);

  dispatch({
    type: "GET_DETAILS",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};
