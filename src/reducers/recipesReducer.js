import {
  REQUEST_RECIPES,
  RECEIVE_RECIPES,
  RECEIVE_NO_RECIPES,
  REQUEST_MORE_RECIPES,
  RECEIVE_MORE_RECIPES,
} from "../actions/";

const recipesState = {
  data: [],
  loading: false,
  refreshing: false,
  empty: false,
};

const recipes = (state = recipesState, action) => {
  switch (action.type) {
    case REQUEST_RECIPES:
      return Object.assign({}, state, {
        loading: false,
        refreshing: true,
      });
    case REQUEST_MORE_RECIPES:
      return Object.assign({}, state, {
        loading: true,
        refreshing: false,
      });
    case RECEIVE_RECIPES:
      return Object.assign({}, state, {
        loading: false,
        refreshing: false,
        data: action.recipes,
      });
    case RECEIVE_NO_RECIPES:
      return Object.assign({}, state, {
        loading: false,
        refreshing: false,
        data: [],
        empty: true,
      });
    case RECEIVE_MORE_RECIPES:
      return Object.assign({}, state, {
        loading: false,
        refreshing: false,
        data: state.data.concat(action.recipes),
      });
    default:
      return state;
  }
};

export default recipes;
