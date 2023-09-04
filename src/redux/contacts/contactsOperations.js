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

export const addContact = createAsyncThunk('contacts/add',
    async (contactData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/contacts', contactData);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk('contacts/delete',
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`/contacts/${id}`);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updtaeContact = createAsyncThunk('contacts/update',
    async ({contactNewData, contactId}, { rejectWithValue }) => {
        try {
            const { data } = await axios.patch(`/contacts/${contactId}`, contactNewData);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);