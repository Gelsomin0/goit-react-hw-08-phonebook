import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, registerUser } from "./operations";

const initialState = {
    user: { name: '', email: '' },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
};

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
        [refreshUser.pending]: (state) => {
            state.isFetchingCurrentUser = true;
        },
        [refreshUser.fulfilled]: (state, { payload }) => {
            state.user = payload;
            state.isLoggedIn = true;
            state.isFetchingCurrentUser = false;
        },
        [refreshUser.rejected]: (state) => {
            state.isFetchingCurrentUser = false;
        }
    }
});