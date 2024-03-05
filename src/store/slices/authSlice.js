import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    password: "",
    isAuthenticated: false,
  },
  reducers: {
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changePassword(state, action) {
      state.password = action.payload;
    },
    isLogin(state) {
      state.isAuthenticated = true;
    },
  },
});

export const { changeEmail, changePassword, isLogin } = authSlice.actions;
export const authReducer = authSlice.reducer;
