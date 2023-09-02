import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, refreshCurrentUser, registerUser } from "./auth-operations";

const initialState = {
    user: {
        name: '',
        email: '',
    },
    token: null,
    isLoggedIn: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers:{
        [registerUser.fulfilled]: (state, { payload }) => {
            state.token = payload.token;
            state.user = payload.user;
            state.isLoggedIn = true;
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.token = payload.token;
            state.user = payload.user;
            state.isLoggedIn = true;
        },
        [logoutUser.fulfilled]: (state) => {
            state.user = initialState.user;
            state.isLoggedIn = false;
        },
        [refreshCurrentUser.fulfilled]: (state, { payload }) => {
            state.user = payload;
            state.isLoggedIn = true;
        }
    }
});