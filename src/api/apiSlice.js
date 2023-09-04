import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Books","Authors"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (search="") => `/books?title_like=${search}`,
      providesTags: ["Books"],
    }),
    addBook: builder.mutation({
      query: (book) => ({
        url: "books",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation({
      query: (book) => ({
        url: `books/${book.id}`,
        method: "PUT",
        body: book,
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Books"],
    }),
    getBookById: builder.query({
      query: (id) => `books/${id}`,
      providesTags: ["Books"],
    }),
    getAuthors: builder.query({
      query: () => "/authors",
      providesTags: ["Authors"],
    }),
    addAuthor: builder.mutation({
      query: (author) => ({
        url: `authors`,
        method: "POST",
        body: author,
      }),
      invalidatesTags: ["Authors"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useGetBookByIdQuery,
  useGetAuthorsQuery,
  useAddAuthorMutation,
} = apiSlice;
