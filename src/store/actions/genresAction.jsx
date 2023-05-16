import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { allGenres } from "../../configs/endpoints";

export const loadGenres = createAsyncThunk("genres/loadGenres", async () => {
  const genresData = await axios.get(allGenres());

  return {
    genres: genresData.data.results,
  };
});
