import { combineReducers } from "redux";
import recipes from "./recipesReducer";
import diet from "./dietReducer";
import searchTerm from "./searchTermReducer";

const recipeApp = combineReducers({
  recipes,
  diet,
  searchTerm,
});

export default recipeApp;
