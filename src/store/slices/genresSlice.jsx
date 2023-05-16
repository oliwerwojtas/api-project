import { createSlice } from "@reduxjs/toolkit";
import { loadGenres } from "../actions/genresAction";

const initialState = {
  genres: [],
};

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadGenres.fulfilled, (state, action) => {
      state.genres = action.payload.genres;
    });
  },
});

export default genresSlice.reducer;
