import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { contatcSlice } from './contacts/contactsSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from 'redux-persist/es/persistStore';

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
});

export const persistor = persistStore(store);