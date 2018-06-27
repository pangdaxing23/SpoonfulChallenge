import axios from "axios";
import uuidv4 from "uuid/v4";

export const CHANGE_DIET = "CHANGE_DIET";
export const CHANGE_SEARCH_TERM = "CHANGE_SEARCH_TERM";
export const REQUEST_RECIPES = "REQUEST_RECIPES";
export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_MORE_RECIPES = "RECEIVE_MORE_RECIPES";

import { defaultCard, edamamApiSearch, appId, appKey } from "../constants";
import { formatParams } from "../util";
const data = [defaultCard, defaultCard];

export const changeDiet = diet => ({
  type: CHANGE_DIET,
  diet,
});

export const changeSearchTerm = searchTerm => ({
  type: CHANGE_SEARCH_TERM,
  searchTerm,
});

const requestRecipes = (searchTerm, diet) => ({
  type: REQUEST_RECIPES,
  searchTerm,
  diet,
});

const receiveRecipes = (searchTerm, diet, hits) => ({
  type: RECEIVE_RECIPES,
  searchTerm,
  diet,
  recipes: hits.map(hit => ({
    id: uuidv4(),
    recipeName: hit.recipe.label,
    calories: hit.recipe.calories,
    cookingTime: hit.recipe.totalTime,
    imageSource: hit.recipe.image,
  })),
});

const receiveMoreRecipes = (searchTerm, diet, hits) => ({
  type: RECEIVE_MORE_RECIPES,
  searchTerm,
  diet,
  recipes: hits.map(hit => ({
    id: uuidv4(),
    recipeName: hit.recipe.label,
    calories: hit.recipe.calories,
    cookingTime: hit.recipe.totalTime,
    imageSource: hit.recipe.image,
  })),
});

export const fetchRecipes = (searchTerm, diet) => {
  return dispatch => {
    dispatch(changeSearchTerm(searchTerm));
    dispatch(requestRecipes(searchTerm, diet));
    const { dietQuery, searchTermQuery } = formatParams(searchTerm, diet);

    return axios({
      method: "get",
      headers: { "Accept-Encoding": "gzip" },
      url: edamamApiSearch,
      params: {
        q: searchTermQuery,
        app_id: appId,
        app_key: appKey,
        diet: dietQuery,
      },
    })
      .then(response => {
        console.log(response);
        dispatch(receiveRecipes(searchTerm, diet, response.data.hits));
      })
      .catch(err => console.error(err));
  };
};

export const fetchMoreRecipes = (searchTerm, diet, recipes) => {
  return dispatch => {
    dispatch(requestRecipes(searchTerm, diet));
    const { dietQuery, searchTermQuery } = formatParams(searchTerm, diet);

    return axios({
      method: "get",
      headers: { "Accept-Encoding": "gzip" },
      url: edamamApiSearch,
      params: {
        q: searchTermQuery,
        app_id: appId,
        app_key: appKey,
        diet: dietQuery,
        from: recipes.length, // get 10 more
        to: recipes.length + 10,
      },
    })
      .then(response => {
        console.log(response);
        dispatch(receiveMoreRecipes(searchTerm, diet, response.data.hits));
      })
      .catch(err => console.error(err));
  };
};