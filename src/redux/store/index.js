import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import jobsSearchResultsReducer from "../reducers/jobsSearchResultsReducer";

const store = configureStore({
  reducer: combineReducers({
    job: jobsSearchResultsReducer,
  }),
});

export default store;
