const initState = {
  game: { platforms: [] },
  screen: { results: [] },
  series: { results: [] },
  achievements: {},
  isLoading: true,
};
const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        series: action.payload.series,
        achievements: action.payload.achievements,
        isLoading: false,
      };

    case "LOADING_DETAILS":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
