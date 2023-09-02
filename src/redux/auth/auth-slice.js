import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, registerUser } from "./auth-operations";

const initialState = {
    user: {
        name: '',
        email: '',
    },
    token: '',
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
        [logoutUser.fulfilled]: (state, { payload }) => {
            console.log(payload);
        }
    }
});