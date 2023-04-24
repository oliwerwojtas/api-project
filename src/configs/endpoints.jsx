import { API_KEY, BASE_URL, PAGE_SIZE } from "./config";
import { getCurrentDate, getLastYearDate } from "./utils";

const popular_games = `games?key=${API_KEY}&dates=${getLastYearDate()},${getCurrentDate()}&ordering=-rating&page_size=${PAGE_SIZE}`;
const upcoming_games = `games?key=${API_KEY}&dates=${getLastYearDate()},${getCurrentDate()}&ordering=-added&page_size=${PAGE_SIZE}`;
const new_games = `games?key=${API_KEY}&dates=${getLastYearDate()},${getCurrentDate()}&ordering=-released&page_size=${PAGE_SIZE}`;
const platforms = `platforms?key=${API_KEY}`;

export const popularGamesURL = () => `${BASE_URL}${popular_games}`;
export const upcomingGamesURL = () => `${BASE_URL}${upcoming_games}`;
export const newGamesURL = () => `${BASE_URL}${new_games}`;
export const getPlatforms = () => `${BASE_URL}${platforms}`;

export const gameDetails = (game_id) => `${BASE_URL}games/${game_id}?key=${API_KEY}`;
export const gameScreenshot = (game_id) => `${BASE_URL}games/${game_id}/screenshots?key=${API_KEY}`;
export const searchGameURL = (game_name) =>
  `${BASE_URL}games?search=${game_name}&page_size=${PAGE_SIZE}&key=${API_KEY}`;
export const seriesGamesURL = (game_id) => `${BASE_URL}games/${game_id}/game-series?key=${API_KEY}`;
export const gameAchievements = (game_id) =>
  `${BASE_URL}games/${game_id}/achievements?key=${API_KEY}`;
export const allGenres = () => `${BASE_URL}genres?key=${API_KEY}`;
