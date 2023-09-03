import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// const tokenSetting = {
//     set(token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     },
//     unset() {
//         axios.defaults.headers.common.Authorization = '';
//     }
// }

export const getAllContacts = createAsyncThunk('contact/getAll',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/contacts');
            return data;    
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const createContacts = createAsyncThunk('contact/create',
    async (contactData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/contacts', contactData);
            return data;    
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteContacts = createAsyncThunk('contact/delete',
    async (contactId, { rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`/contacts/${contactId}`);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);