import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'usersAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3001/' }),
  tagTypes: ['favorites'],
  endpoints: (builder) => ({
    getFavorites: builder.query({
      query: (accessToken) => ({
        url: 'favorites/',
        headers: {
          accessToken
        }
      }),
      providesTags: ['favorites']
    }),
    addFavorite: builder.mutation({
      query: ({ accessToken, tokenId }) => ({
        url: `favorites/${tokenId}`,
        method: 'POST',
        headers: {
          accessToken
        },
      }),
      invalidatesTags: ['favorites']
    }),
    removeFavorite: builder.mutation({
      query: ({ accessToken, tokenId }) => ({
        url: `favorites/${tokenId}`,
        method: 'DELETE',
        headers: {
          accessToken
        },
      }),
      invalidatesTags: ['favorites']
    }),
  }),
})

export const { useGetFavoritesQuery, useAddFavoriteMutation, useRemoveFavoriteMutation } = usersApi