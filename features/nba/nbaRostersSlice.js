import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { espnLiveGames } from "../../app/shared/nbaUrls/espnLiveGames";

// Potentially just merge this file with nbaSlice.
// Moved it here because it's a separate API call, but wasn't thinking I don't need separate files
// for separate slices. I could have 1 file with similar slices probably.
// Could be strange behavior from passing in teamId here
export const fetchRoster = createAsyncThunk(
  "nba/fetchRoster",
  async (teamId) => {
    console.log("teamId inside fetchRoster", teamId); // teamId undefined here
    const response = await fetch(
      `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${teamId}/roster`
    );
    const data = await response.json();
    return data;
  }
);

const initialState = {
  rosterArray: [],
  status: "idle",
  error: null,
};

// update to builder callback notation sometime.
const nbaRostersSlice = createSlice({
  name: "nbaRosters",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRoster.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchRoster.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.rosterArray = action.payload;
    },
    [fetchRoster.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const nbaRostersReducer = nbaRostersSlice.reducer;

// export const selectTeamById = (id) => (state) => {
//   return state.nba.nbaArray.find((team) => team.id === parseInt(id));
// };
