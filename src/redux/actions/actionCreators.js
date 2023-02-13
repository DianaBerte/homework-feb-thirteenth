import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, GET_JOBS } from "./index";

export const removeFromFavourites = (payload) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: payload,
  };
};

export const addToFavourites = (payload) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: payload,
  };
};

export const getJobs = (payload) => {
  return {
    type: GET_JOBS,
    payload: payload,
  };
};
