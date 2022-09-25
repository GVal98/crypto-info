import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const coinsApi = createApi({
  reducerPath: 'coinsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3/' }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: (pageNumber) => ({
        url: 'coins/markets/',
        params: {
          vs_currency: 'usd',
          per_page: 20,
          page: pageNumber,
          price_change_percentage: '24h',
        },
      }),
    }),
    getCoinInfo: builder.query({
      query: (coinId) => ({
        url: `coins/${coinId}`,
        params: {
          localization: 'false',
          tickers: false,
          market_data: true,
          community_data: false,
          developer_data: false,
        },
      }),
    }),
    getCoinHistory: builder.query({
      query: (coinId) => ({
        url: `coins/${coinId}/market_chart`,
        params: {
          vs_currency: 'usd',
          days: '365',
        },
      }),
    }),
  }),
})

export const { useGetCoinsQuery, useGetCoinInfoQuery, useGetCoinHistoryQuery } = coinsApi
