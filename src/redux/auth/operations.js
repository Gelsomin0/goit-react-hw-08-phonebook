import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const userToken = {
    setToken(currentToken) {
        axios.defaults.headers.common.Authorization = `Bearer ${currentToken}`;
    },
    clearToken() {
        axios.defaults.headers.common.Authorization = '';
    }
}

export const registerUser = createAsyncThunk('user/signup',
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await axios.post('/users/signup', credentials);
            userToken.setToken(res.data.token);
            return res.data;   
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const logIn = createAsyncThunk('user/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await axios.post('users/login', credentials);
            userToken.setToken(res.data.token);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk('user/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post('users/logout');
            userToken.clearToken();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const refreshUser = createAsyncThunk('user/refresh',
    async (_, { getState, rejectWithValue }) => {
        const persistedToken = getState().auth.token;

        if(persistedToken === null) {
            return rejectWithValue();
        }

        userToken.setToken(persistedToken);

        try {
            const { data } = await axios.get('users/current');
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);