import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/favouritesReducer";

const store = configureStore({
  reducer: mainReducer,
});

export default store;
