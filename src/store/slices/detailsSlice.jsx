import { createSlice } from "@reduxjs/toolkit";
import { loadDetail } from "../actions/detailAction";
const initialState = {
  game: { platforms: [] },
  screen: { results: [] },
  series: { results: [] },
  achievements: {},
  isLoading: true,
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadDetail.fulfilled, (state, action) => {
        state.game = action.payload.game;
        state.screen = action.payload.screen;
        state.series = action.payload.series;
        state.achievements = action.payload.achievements;
        state.isLoading = false;
      });
  },
});

export default detailSlice.reducer;
