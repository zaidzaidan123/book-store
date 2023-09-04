import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [], // Initialize an empty array to store the books
  // Add other relevant state properties if needed
};

const booksSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooks: (state, action) => {
        return state.books
    },
  },
});

export const { setBooks } = booksSlice.actions;
export default booksSlice.reducer;