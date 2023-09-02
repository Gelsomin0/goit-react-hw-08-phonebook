import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const tokenSetting = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

export const registerUser = createAsyncThunk('user/create',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            tokenSetting.set(data.token);
            return data;    
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const loginUser = createAsyncThunk('user/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            tokenSetting.set(data.token);
            return data;    
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logoutUser = createAsyncThunk('user/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout');
            tokenSetting.unset();   
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const refreshCurrentUser = createAsyncThunk('user/refresh',
    async (persistedToken, { rejectWithValue }) => {
        tokenSetting.set(persistedToken);

        try {
            const { data } = await axios.get('/users/current');
            return data;   
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);