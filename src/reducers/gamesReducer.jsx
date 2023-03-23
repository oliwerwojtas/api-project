const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  platforms: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
        platforms: action.payload.platforms,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
