import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    addBook: builder.mutation({
      query: (book) => ({
        url: "books",
        method: "POST",
        body: book,
      }),
    }),
    updateBook: builder.mutation({
      query: (book) => ({
        url: `books/${book.id}`,
        method: "PUT",
        body: book,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
        body: id,
      }),
    }),
    getBookById: builder.query({
      query: (id) => `books/${id}`,
    }),
    getBooksByPageAndLimit:builder.query({
        query:(search,pageNum,limit)=> `books?title_like=&_page=1&_limit=20`
    })
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useGetBookByIdQuery,
  useGetBooksByPageAndLimitQuery,
} = apiSlice;
