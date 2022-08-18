const INITIAL_STATE = { moviesCategories: [], seriesCategories: [] };

export default function categories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_MOVIES_CATEGORIES":
      return { ...state, moviesCategories: action.payload };
    case "GET_SERIES_CATEGORIES":
      return { ...state, seriesCategories: action.payload };
    default:
      return state;
  }
}
