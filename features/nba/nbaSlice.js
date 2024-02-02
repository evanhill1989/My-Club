import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { gameData } from "../../app/shared/nbaScoreboard";
import { espnLiveGames } from "../../app/shared/nbaUrls/espnLiveGames";

export const fetchGames = createAsyncThunk(
  "nba/fetchGame",

  async () => {
    const scoreboard = await fetch(espnLiveGames);
    const response = scoreboard.json();
    console.log("Response inside async fetch ", response);
    return response;
  }
);

const initialState = {
  gamesArray: [],

  status: "idle",
  error: null,
};

const nbaSlice = createSlice({
  name: "nba",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGames.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchGames.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.gamesArray = action.payload;
    },
    [fetchGames.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const nbaReducer = nbaSlice.reducer;

// export const selectTeamById = (id) => (state) => {
//   return state.nba.nbaArray.find((team) => team.id === parseInt(id));
// };
