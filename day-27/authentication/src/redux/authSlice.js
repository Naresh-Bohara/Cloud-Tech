import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    csrfToken: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.csrfToken = null;
    },
    setCsrfToken: (state, action) => {
      state.csrfToken = action.payload;
    },
  },
});

export const { loginSuccess, logout, setCsrfToken } = authSlice.actions;
export default authSlice.reducer;
