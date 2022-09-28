import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { coinsApi } from '../api/coinsApi'
import { favoritesApi } from '../api/favoritesApi'
import userReducer from './userSlice'

const store = configureStore({
  reducer: {
    [coinsApi.reducerPath]: coinsApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(coinsApi.middleware)
    .concat(favoritesApi.middleware),
})

setupListeners(store.dispatch)

export default store
