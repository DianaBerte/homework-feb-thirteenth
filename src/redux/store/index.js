import {
  configureStore,
  combineReducers,
  // getDefaultMiddleware,
} from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favourite";
import jobReducer from "../reducers/job";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  storage: localStorage,
  key: "root",
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENV_SECRET_KEY,
    }),
  ],
};

const bigReducer = combineReducers({
  favourite: favouriteReducer,
  job: jobReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

const persistedStore = persistStore(store);

export { store, persistedStore };
