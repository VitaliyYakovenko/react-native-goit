import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./registrationUser";
import { logInUser } from "./logInUser";
import { logOutUser } from "./logOutUser";
import { refreshUser } from "./refreshUser";
import { updateAvatarUser } from "./updateAvatarUser";


const initialState = {
    user: null,
    token: null,
    displayName: null,
    avatar: null,
    email : null,
    isLogIn: false,
    isRefreshing: false,
    loginError: "idle",
};

const authSlice = createSlice({
    name:"auth/authUser", 
    initialState,
    reducers: {},
    extraReducers : (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogIn = false;
      })
      .addCase(logInUser.pending, (state, action) => {
        state.loginError = "idle";
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.displayName = action.payload.displayName;
        state.token = action.payload.token;
        state.email = action.payload.email;
        state.avatar = action.payload.avatar;
        state.isLogIn = true;
        state.loginError = "success";
      })
      .addCase(logInUser.rejected, (state, _) => {
        state.email = null;
        state.displayName = null;
        state.isLogIn = false;
        state.token = null;
        state.loginError = "error";
      })
      .addCase(logOutUser.fulfilled, (state, _) => {
        state.token = null;
        state.isLogIn = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state, _) => {
         state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.token = action.payload.refreshedToken;
        state.email = action.payload.email;
        state.displayName = action.payload.displayName;
        state.avatar = action.payload.avatar;
        state.isLogIn = true;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state, _) => {
        state.isRefreshing = false;
        state.isLogIn = false;
      })
      .addCase(updateAvatarUser.fulfilled, (state, action) => {
        state.avatar = action.payload;
      })
    },
});


export const authReducer = authSlice.reducer;


