import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritesItems: localStorage.getItem(" favoritesItems")
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
        alert("Already in");
      } else {
        let buildFavoriteItem = { ...action.payload };

        state.favoritesItems?.push(buildFavoriteItem);
        localStorage.setItem("wishlistItems", JSON.stringify(state.favoritesItems));
      }
    },

    removeFavorites: (state, action) => {
      console.log("not ready yet");
    },

    clearFavorites: (state, action) => {
      state.favoritesItems = [];
    },
  },
});
export const { addToFavorites, removeFavorites, clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
