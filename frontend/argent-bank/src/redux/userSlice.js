import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    user: {},
    isEditingName: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.token = null;
            state.user = {};
            state.isEditingName = false;
        },
        toggleEditing: (state) =>{
            state.isEditingName = !state.isEditingName
        }
    },
});

export const { login, setUser, logout, toggleEditing } = userSlice.actions;

export const checkIfLogin = state => state.user.token !== null;
export const getUser = state => state.user.user;
export const getToken = state => state.user.token;
export const getIfEditing = state => state.user.isEditingName;

export default userSlice.reducer;