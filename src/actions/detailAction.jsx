import axios from "axios";
import { gameDetails } from "../api";
export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetails(id));
  console.log(detailData);

  dispatch({
    type: "GET_DETAILS",
    payload: {
      game: detailData.data,
    },
  });
};
