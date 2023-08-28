import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, registerUser } from "./operations";

const initialState = {
    user: { name: '', email: '' },
    token: null,
    isLoggedIn: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [registerUser.fulfilled]: (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logIn.fulfilled]: (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logOut.fulfilled]: (state) => {
            state.user = initialState.user;
            state.token = null;
            state.isLoggedIn = false;
        },
    }
})