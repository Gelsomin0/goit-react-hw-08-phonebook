import { createSlice } from "@reduxjs/toolkit";
import { addContact, getAllContacts } from "./operations";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    extraReducers: {
        [getAllContacts.fulfilled]: (state, action) => {
            state = action.payload;
            console.log(action.payload);
        },
        [addContact.fulfilled]: (state, action) => {
            console.log(action);
            state = [...action.payload, ...state];
        }
    }
});