import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: "",
    user: {},
    isLogin: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload;
            state.isLogin = true;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.token = null;
            state.isLogin = false;
            state.user = {};
        },
    },
});

export const { login, logout } = userSlice.actions;

export const checkIfLogin = state => state.user.token !== null;

export default userSlice.reducer;