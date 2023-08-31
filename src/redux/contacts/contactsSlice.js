import { createSlice } from "@reduxjs/toolkit";
import { addContact, getAllContacts } from "./operations";

const initialState = {
    contacts: []
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [getAllContacts.fulfilled]:(state, action) => {
            // console.log(action.payload);
            state.contacts = action.payload;
            // console.log(state.contacts);
        },
        [addContact.fulfilled]:(state, action) => {
            // console.log(action);
            state = [...action.payload, ...state];
        }
    }
});