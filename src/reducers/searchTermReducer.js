import { CHANGE_SEARCH_TERM } from "../actions/";

const defaultSearchTermState = "";
const searchTerm = (state = defaultSearchTermState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      return action.searchTerm;
    default:
      return state;
  }
};

export default searchTerm;
