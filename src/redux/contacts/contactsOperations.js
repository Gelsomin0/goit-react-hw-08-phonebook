import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getAllContacts = createAsyncThunk('contacts/getAll',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/contacts');
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);