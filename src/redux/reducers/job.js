import { GET_JOBS, GET_JOBS_LOADING } from "../actions";

const initialState = {
  result: [],
  isLoading: true,
  isError: false,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        result: action.payload,
      };

    case GET_JOBS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default jobReducer;
