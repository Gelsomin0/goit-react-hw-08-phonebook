import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser, logoutUser, refreshUser } from "./authOperations";

const initialState = {
    user: { name: '', email: '' },
    token: null,
    isLoggedIn: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [createUser.fulfilled]: (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logoutUser.fulfilled]: (state) => {
            state.user = initialState.user;
            state.token = null;
            state.isLoggedIn = false;
        },
        [refreshUser.fulfilled]:(state, { payload }) => {
            state.user = payload;
            state.isLoggedIn = true;
        }
    }
});