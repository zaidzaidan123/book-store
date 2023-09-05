import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  initialState: [],
  name: "favorite",
  reducers: {
    addToFav: (state, action) => {
      state.push(action.payload);
    },
    removeFromFav: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToFav, removeFromFav } = favSlice.actions;

export default favSlice.reducer;
