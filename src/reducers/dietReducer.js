import { CHANGE_DIET } from "../actions/";

const dietState = "Low Carb";

const diet = (state = dietState, action) => {
  switch (action.type) {
    case CHANGE_DIET:
      return action.diet;
    default:
      return state;
  }
};

export default diet;
