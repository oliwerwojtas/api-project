import { BASE_URL, PAGE_SIZE } from "./config";
import { getCurrentDate, getLastYearDate } from "./utils";

const upcoming_games = `games?key=${
  import.meta.env.VITE_REACT_APP_API_KEY
}&dates=${getLastYearDate()},${getCurrentDate()}&ordering=-added&page_size=${PAGE_SIZE}`;
const new_games = `games?key=${
  import.meta.env.VITE_REACT_APP_API_KEY
}&dates=${getLastYearDate()},${getCurrentDate()}&ordering=-released&page_size=${PAGE_SIZE}`;
const platforms = `platforms?key=${import.meta.env.VITE_REACT_APP_API_KEY}`;

export const popularGamesURL = () =>
  `${BASE_URL}games?key=${import.meta.env.VITE_REACT_APP_API_KEY}&page_size=${PAGE_SIZE}`;
export const upcomingGamesURL = () => `${BASE_URL}${upcoming_games}`;
export const newGamesURL = () => `${BASE_URL}${new_games}`;
export const getPlatforms = () => `${BASE_URL}${platforms}`;

export const gameDetails = (game_id) =>
  `${BASE_URL}games/${game_id}?key=${import.meta.env.VITE_REACT_APP_API_KEY}`;
export const gameScreenshot = (game_id) =>
  `${BASE_URL}games/${game_id}/screenshots?key=${import.meta.env.VITE_REACT_APP_API_KEY}`;
export const searchGameURL = (game_name) =>
  `${BASE_URL}games?search=${game_name}&key=${import.meta.env.VITE_REACT_APP_API_KEY}`;
export const seriesGamesURL = (game_id) =>
  `${BASE_URL}games/${game_id}/game-series?key=${import.meta.env.VITE_REACT_APP_API_KEY}`;
export const gameAchievements = (game_id) =>
  `${BASE_URL}games/${game_id}/achievements?key=${import.meta.env.VITE_REACT_APP_API_KEY}`;
export const allGenres = () => `${BASE_URL}genres?key=${import.meta.env.VITE_REACT_APP_API_KEY}`;
