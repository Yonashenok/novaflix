import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search/searchSlice";

const store = configureStore({
  reducer: {
    shows: searchSlice,
  },
});

export default store;
