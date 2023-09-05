import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  initialState: [],
  name: "favoriteSlice",
  reducers: {
    addToFav: (state, action) => {
        state.push(action.payload);
    },
    removeFromFav: (state, action) => {},
  },
});

export const { addToFav, removeFromFav } = favSlice.actions;

export default favSlice.reducer;
