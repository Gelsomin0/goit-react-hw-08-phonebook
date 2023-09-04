import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { contatcSlice } from './contacts/contactsSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from 'redux-persist/es/persistStore';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

const authPersistedReducer = persistReducer(persistAuthConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    contacts: contatcSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);