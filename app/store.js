import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { nbaReducer } from "../features/nba/nbaSlice";

export const store = configureStore({
  reducer: {
    nba: nbaReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
