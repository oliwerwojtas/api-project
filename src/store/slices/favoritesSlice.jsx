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
        alert("Already in");
      } else {
        let buildFavoriteItem = { ...action.payload };

        state.favoritesItems?.push(buildFavoriteItem);
        localStorage.setItem("favoritesItems", JSON.stringify(state.favoritesItems));
      }
    },
    removeFavorites: (state, action) => {
      let selectedItems = state.favoritesItems?.filter((item) => item.id === action.payload.id);
      state.favoritesItems.splice(selectedItems, 1);

      localStorage.setItem("favoritesItems", JSON.stringify(state.favoritesItems));
    },
    // removeFavorites: (state, action) => {
    //   let selectedIndex = state.favoritesItems.findIndex((item) => item.id === action.payload.id);
    //   if (selectedIndex >= 0) {
    //     state.favoritesItems.splice(selectedIndex, 1);
    //     localStorage.setItem("favoritesItems", JSON.stringify(state.favoritesItems));
    //   }
    // },

    clearFavorites: (state, action) => {
      state.favoritesItems = [];
    },
  },
});
export const { addToFavorites, removeFavorites, clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
