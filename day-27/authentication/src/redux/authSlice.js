import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, register, getProfile } from '../api/api';

export const loginUser = createAsyncThunk('auth/login', async (data) => {
  return await login(data);
});

export const registerUser = createAsyncThunk('auth/register', async (data) => {
  return await register(data);
});

export const fetchProfile = createAsyncThunk('auth/profile', async (token) => {
  return await getProfile(token);
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: localStorage.getItem('token') || null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.data.detail;
        state.token = action.payload.data.token;
        localStorage.setItem('token', action.payload.data.token);
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.user = action.payload.data;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
