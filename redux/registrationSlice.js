import { createUserWithEmailAndPassword } from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../firebase/firebase";




export const registerUser = createAsyncThunk(
  "registration/registerUser",
  async (userData, thunkAPI) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
      return userData;
    } catch (error) {
      throw error;
    }
  }
);



initialState = {
    user: "",
    error: null,
};

export const registrationSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
    },
});

export const { registration } = registrationSlice.actions; 

