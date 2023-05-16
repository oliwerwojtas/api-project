import { createSlice } from "@reduxjs/toolkit";
import { loadGames, fetchSearch } from "../actions/gamesAction";

const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  platforms: [],
  allGames: [],
  searched: [],
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    clearSearched: (state) => {
      state.searched = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadGames.fulfilled, (state, action) => {
        state.popular = action.payload.popular;
        state.upcoming = action.payload.upcoming;
        state.newGames = action.payload.newGames;
        state.platforms = action.payload.platforms;
        state.allGames = action.payload.allGames;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.searched = action.payload.searched;
      });
  },
});

export const { clearSearched } = gamesSlice.actions;

export default gamesSlice.reducer;
