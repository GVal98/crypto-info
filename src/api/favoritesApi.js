import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const favoritesApi = createApi({
  reducerPath: 'favoritesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_SERVER_URL}/` }),
  tagTypes: ['favorites'],
  endpoints: (builder) => ({
    getFavorites: builder.query({
      query: (accessToken) => ({
        url: 'favorites/',
        headers: {
          accessToken,
        },
      }),
      providesTags: ['favorites'],
    }),
    addFavorite: builder.mutation({
      query: ({ accessToken, tokenId }) => ({
        url: `favorites/${tokenId}`,
        method: 'POST',
        headers: {
          accessToken,
        },
      }),
      invalidatesTags: ['favorites'],
    }),
    removeFavorite: builder.mutation({
      query: ({ accessToken, tokenId }) => ({
        url: `favorites/${tokenId}`,
        method: 'DELETE',
        headers: {
          accessToken,
        },
      }),
      invalidatesTags: ['favorites'],
    }),
  }),
})

export const {
  useGetFavoritesQuery,
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
} = favoritesApi
