//Base URL
const base_url = "https://api.rawg.io/api/";
console.log(base_url);
//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Gamesde
const popular_games = `games?key=ea958761ee7f47db990ec82553924efe&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

const upcoming_games = `games?key=ea958761ee7f47db990ec82553924efe&dates=${lastYear},${currentDate}&ordering=-added&page_size=10`;

const new_games = `games?key=ea958761ee7f47db990ec82553924efe&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
const platforms = `platforms?key=ea958761ee7f47db990ec82553924efe`;
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
export const getPlatforms = () => `${base_url}${platforms}`;

export const gameDetails = (id) => `${base_url}games?key=ea958761ee7f47db990ec82553924efe&/${id}`;
console.log(popularGamesURL());
