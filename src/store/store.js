import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { coinsApi } from '../api/coinsApi'
import { favoritesApi } from '../api/favoritesApi'
import userReducer from './userSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
}

const rootReducer = combineReducers({
  [coinsApi.reducerPath]: coinsApi.reducer,
  [favoritesApi.reducerPath]: favoritesApi.reducer,
  user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
    .concat(coinsApi.middleware)
    .concat(favoritesApi.middleware),
})

const persistor = persistStore(store)
setupListeners(store.dispatch)

export { persistor }
export default store
