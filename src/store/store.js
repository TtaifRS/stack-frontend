import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import {
  persistReducer, persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authSlice } from './authSlice'
import { userSlice } from './userSlice';

const persistConfig = {
  key: 'user',
  storage,
}

const authReducer = persistReducer(persistConfig, authSlice.reducer)

export const store = configureStore({
  reducer: {
    user: authReducer,
    list: userSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)