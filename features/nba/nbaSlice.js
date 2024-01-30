import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseNbaUrl } from "../../app/shared/nbaUrls/baseNbaUrl";
import { gameData } from "../../app/shared/nbaScoreboard";

// export const fetchGame = createAsyncThunk("nba/fetchGame", async () => {
//   const data = gameData.json();
//   // Possible I introduced an error here

//   return data.events;
// });

const initialState = {
  gamesArray: gameData.events,
  status: "idle",
  error: null,
};

const nbaSlice = createSlice({
  name: "nba",
  initialState,
  reducers: {},
  // extraReducers: {
  //   [fetchGame.pending]: (state, action) => {
  //     state.status = "loading";
  //   },
  //   [fetchGame.fulfilled]: (state, action) => {
  //     state.status = "succeeded";
  //     state.gamesArray = action.payload;
  //   },
  //   [fetchGame.rejected]: (state, action) => {
  //     state.status = "failed";
  //     state.error = action.error.message;
  //   },
  // },
});

export const nbaReducer = nbaSlice.reducer;

// export const selectTeamById = (id) => (state) => {
//   return state.nba.nbaArray.find((team) => team.id === parseInt(id));
// };
