import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { login, register, deleteAccount } from "../../services/apiServices/userRequest";

import { setToken, removeToken, firstLogin, setUserEmail, removeFirstLogin, removeUserEmail } from "../../services/storageServices";


export const loginAsync = createAsyncThunk("auth/login", async (data, { rejectWithValue }) => {
    try {
        const response = await login(data);
        return response.data;
    } 
    catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const registerAsync = createAsyncThunk("auth/register", async (data, { rejectWithValue }) => {
    try {
        const response = await register(data);
        return response.data;
    } 
    catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const deleteAccountAsync = createAsyncThunk("auth/deleteAccount", async (data, { rejectWithValue }) => {
    try {
        const response = await deleteAccount();
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.response.data);
    }
});


const authSlice = createSlice({
    name: "auth",
    initialState: {
        userEmail: null,
        isAuth: false,
        isLoading: false,
        error: null,
        firstLogin: false,
        status: null
    },
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        clearStatus: (state) => {
            state.status = null;
        },
        setAuth: (state, action) => {
            state.isAuth = action.payload;
        },
        setFirstLogin: (state, action) => {
            state.firstLogin = action.payload;
        },
        setEmail: (state, action) => {
            state.userEmail = action.payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
                state.error = null;
                state.status = "success"
                setToken(action.payload.token);
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.message;
            })
            .addCase(registerAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
                state.error = null;
                state.status = "success"
                setToken(action.payload.token);
                setUserEmail(state.userEmail);
                firstLogin();
            })
            .addCase(registerAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.message;
            })
            .addCase(deleteAccountAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteAccountAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = false;
                state.userEmail = null;
                state.error = null;
                removeToken();
                removeFirstLogin();
                removeUserEmail();
            })
            .addCase(deleteAccountAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.message;
            })
    }
});

export const { clearError, setAuth, setFirstLogin, setEmail, clearStatus } = authSlice.actions;

export default authSlice.reducer;