import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { coinsApi } from '../api/coinsApi'

const store = configureStore({
  reducer: {
    [coinsApi.reducerPath]: coinsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(coinsApi.middleware),
})
setupListeners(store.dispatch)

export default store