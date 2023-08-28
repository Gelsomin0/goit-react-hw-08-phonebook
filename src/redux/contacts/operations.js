import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userToken = {
    setToken(currentToken) {
        axios.defaults.headers.common.Authorization = `Bearer ${currentToken}`;
    },
    clearToken() {
        axios.defaults.headers.common.Authorization = '';
    }
}

export const getAllContacts = createAsyncThunk('contacts/getAll',
    async (_, { getState, rejectWithValue }) => {
        const persistedToken = getState().auth.token;
        userToken.setToken(persistedToken);
        try {
            const { data } = await axios.get('/contacts');
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk('contacts/add',
    async (newContact, { getState, rejectWithValue }) => {
        const persistedToken = getState().auth.token;
        userToken.setToken(persistedToken);
        try {
            const { data } = await axios.post('/contacts', newContact);
            // await axios.post('/contacts', newContact);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);