const INITIAL_STATE = { moviesList: [], seriesList: [], trendsList: [] };
export default function movies(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_MOVIES_LIST":
      return { ...state, moviesList: action.payload };
    case "GET_SERIES_LIST":
      return { ...state, seriesList: action.payload };
    case "GET_TRENDS":
      return { ...state, trendsList: action.payload };
    default:
      return state;
  }
}
