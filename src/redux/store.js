import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsSlice } from './contacts/contactsSlice';

const persistConfig = {
  key: 'currentToken',
    storage,
    whitelist: ['token'],
}

export const store = configureStore({
    reducer: {
    auth: persistReducer(persistConfig, authSlice.reducer),
      contacts: contactsSlice.reducer,
    },
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
    },
});

export const persistor = persistStore(store);