const { createSlice } = require("@reduxjs/toolkit");
const { getAllContacts, createContacts, deleteContacts } = require("./contacts-operations");

const initialState = {
    contactList: [],
    filter: '',
}
export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [getAllContacts.fulfilled]: (state, { payload }) => {
            state.contactList = payload;
        },
        [createContacts.fulfilled]: (state, { payload }) => {
            state.contactList = [...state.contactList, payload ];
        },
        [deleteContacts.fulfilled]: (state, { payload }) => {
            state.contactList = state.contactList.filter((contact)=> contact.id !== payload.id);
        },
        [deleteContacts.rejected]: (state, { payload }) => {
            console.log(payload);
        }
    }
});