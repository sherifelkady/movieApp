import { combineReducers } from "redux";
import movies from "./movies";
import categories from "./categories";
import favoritesReducer from "./favorites";

export default combineReducers({
  movies,
  categories,
  favorites: favoritesReducer,
});
