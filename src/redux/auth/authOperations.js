import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const tokenConfig = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

export const createUser = createAsyncThunk('users/create',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            tokenConfig.set(data.token);
            return data;
            
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const loginUser = createAsyncThunk('users/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            tokenConfig.set(data.token);
            return data;
            
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logoutUser = createAsyncThunk('users/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout');
            tokenConfig.unset();
            
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const refreshUser = createAsyncThunk('users/refresh',
    async (_, { getState, rejectWithValue }) => {
        if (getState().auth.token === null) {
            return rejectWithValue();
        }

        try {
            tokenConfig.set(getState().auth.token);
            const { data } = await axios.get('/users/current');
            return data;
            
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);