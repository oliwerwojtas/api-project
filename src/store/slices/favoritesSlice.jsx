import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritesItems: localStorage.getItem("favoritesItems")
    ? JSON.parse(localStorage.getItem("favoritesItems"))
    : [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      let existsItemIndex = state.favoritesItems?.findIndex(
        (item) => item.id === action.payload?.id
      );

      if (existsItemIndex >= 0) {
      } else {
        let buildFavoriteItem = { ...action.payload };

        state.favoritesItems?.push(buildFavoriteItem);
        localStorage.setItem("favoritesItems", JSON.stringify(state.favoritesItems));
      }
    },
    removeFavorites: (state, action) => {
      const updatedFavorites = state.favoritesItems.filter((item) => item.id !== action.payload);
      state.favoritesItems = updatedFavorites;
      localStorage.setItem("favoritesItems", JSON.stringify(updatedFavorites));
    },

    clearFavorites: (state, action) => {
      state.favoritesItems = [];
    },
  },
});
export const { addToFavorites, removeFavorites, clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
