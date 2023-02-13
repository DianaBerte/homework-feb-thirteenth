import { GET_JOBS } from "../actions";

const initialState = {
  favourite: {
    list: [],
  },
};

const jobsSearchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
};

export default jobsSearchResultsReducer;
