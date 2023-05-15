const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  platforms: [],
  allGames: [],
  searched: [],
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
        allGames: action.payload.allGames,
      };
    case "FETCH_SEARCHED":
      return { ...state, searched: action.payload.searched };

    case "CLEAR_SEARCHED":
      return { ...state, searched: [] };
    default:
      return { ...state };
  }
};

export default gamesReducer;
