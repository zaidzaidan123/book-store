import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./favSlice";
import { apiSlice } from "../api/apiSlice";
export const store = configureStore({
  reducer: {
    favorites: favSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
