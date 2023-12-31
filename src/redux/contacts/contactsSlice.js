import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, getAllContacts, updtaeContact } from "./contactsOperations";

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
        },
        [addContact.fulfilled]: (state, { payload }) => {
            state.contactList.push(payload);
        },
        [deleteContact.fulfilled]: (state, { payload }) => {
            state.contactList = state.contactList.filter((contact) => contact.id !== payload.id);
        },
        [updtaeContact.fulfilled]: (state, { payload }) => {
            const finedIndex = state.contactList.findIndex(el => el.id === payload.id);
            state.contactList.splice(finedIndex, 1, payload);
        }
    }
});