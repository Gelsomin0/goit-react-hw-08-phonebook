import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/auth-slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import { contactsSlice } from './contacts/contacts-slice';

const persistAuthConfig = { key: 'authPersist', storage, whitelist: ['token'] };
const persistedAuthReducer = persistReducer(persistAuthConfig, authSlice.reducer);

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        contacts: contactsSlice.reducer,
    },
});

export const persistor = persistStore(store);