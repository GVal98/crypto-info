import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { coinsApi } from '../api/coinsApi'
import { usersApi } from '../api/usersApi'
import userReducer from './userSlice'

const store = configureStore({
  reducer: {
    [coinsApi.reducerPath]: coinsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(coinsApi.middleware)
    .concat(usersApi.middleware),
})

setupListeners(store.dispatch)

export default store
