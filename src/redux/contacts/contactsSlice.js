import { createSlice } from "@reduxjs/toolkit";
import { getAllContacts } from "./contactsOperations";

const initialState = {
    contactList: [],
    filter: '',
}

export const contatcSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [getAllContacts.fulfilled]: (state, { payload }) => {
            state.contactList = payload;
        }
    }
});