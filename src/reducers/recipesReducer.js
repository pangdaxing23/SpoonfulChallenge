import {
  REQUEST_RECIPES,
  RECEIVE_RECIPES,
  RECEIVE_MORE_RECIPES,
} from "../actions/";

const recipesState = { data: [], loading: false };

const recipes = (state = recipesState, action) => {
  switch (action.type) {
    case REQUEST_RECIPES:
      return Object.assign({}, state, {
        loading: true,
      });
    case RECEIVE_RECIPES:
      return Object.assign({}, state, {
        loading: false,
        data: action.recipes,
      });
    case RECEIVE_MORE_RECIPES:
      return Object.assign({}, state, {
        loading: false,
        data: state.data.concat(action.recipes),
      });
    default:
      return state;
  }
};

export default recipes;
