import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import campersReducer from "./campers/slice";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const campersPersistConfig = {
  key: "location",
  storage,
  whitelist: ["location"],
};

const persistedCampersReducer = persistReducer(
  campersPersistConfig,
  campersReducer
);

export const store = configureStore({
  reducer: {
    campers: persistedCampersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
