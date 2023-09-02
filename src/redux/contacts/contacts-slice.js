const { createSlice } = require("@reduxjs/toolkit");
const { getAllContacts } = require("./contacts-operations");

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
    }
});