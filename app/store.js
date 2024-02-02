import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { nbaReducer } from "../features/nba/nbaSlice";
import { nbaRostersReducer } from "../features/nba/nbaRostersSlice";

export const store = configureStore({
  reducer: {
    nba: nbaReducer,
    nbaRosters: nbaRostersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
