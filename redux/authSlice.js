import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";


export const authUser = createAsyncThunk(
    "authentication/authenticationUser",
    async (userData, _) => {
       
    try {
        const data = await signInWithEmailAndPassword(auth, userData.email, userData.password);
        const displayName = data.user.displayName;
        const token = data.user.stsTokenManager.accessToken;
        return { displayName, token };
    } catch (error) {
        console.log(error.message);
        throw error;
    }
  }
);

const initialState = {
    token: null,
    error: null,
    displayName: null,
};

// const asdas = {
//     "_redirectEventId": undefined,
//     "apiKey": "AIzaSyDEe7uOpZr8L_3yNCeXs-CbCcckXSoNA0s",
//     "appName": "[DEFAULT]",
//     "createdAt": "1691846233232",
//     "displayName": undefined,
//     "email": "user1@gmail.com",
//     "emailVerified": false,
//     "isAnonymous": false,
//     "lastLoginAt": "1691847389425",
//     "phoneNumber": undefined,
//     "photoURL": undefined,
//     "providerData": [[Object]],
//     "stsTokenManager": { "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImNmM2I1YWRhM2NhMzkxNTQ4ZDM1OTJiMzU5MjkyM2UzNjAxMmI5MTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZ28taXQtaG9tZS13b3JrIiwiYXVkIjoiZ28taXQtaG9tZS13b3JrIiwiYXV0aF90aW1lIjoxNjkxODQ3NDcwLCJ1c2VyX2lkIjoiVHB3M3BYMW92c1ZPc3lxbnc3VjV2V2xQRkJ5MSIsInN1YiI6IlRwdzNwWDFvdnNWT3N5cW53N1Y1dldsUEZCeTEiLCJpYXQiOjE2OTE4NDc0NzAsImV4cCI6MTY5MTg1MTA3MCwiZW1haWwiOiJ1c2VyMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidXNlcjFAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.LS7iZC6uRg6V_FBS0UGXjfy1LvX-fNzYS8MqnhNdD3XRDW1t3pfVacHaeqAPc6_KjOjLjb2mCno7sV9TmRiMkT0-O4S43fnlhBGzE88kBb492MPkyjv53UCHXc74SyrU_qJBtK32zFU89ggi9mAorCncApL-QdbdX6_Z1Vpl3Z9c_E0OQPkXmp7ixbxkFPgq8UbzVIPLOR6zzKjvEjiz_pmevt5FBD3JFhi4Elp0ULcluqV0ZUk3awEnAktKLsp1W5BD8WZAbT5yMYsjbxZWWq0peceKknT_CGyyXr68344_NKDpVDv8b70iH2d9bDEYDDU4PvR8xGDHVMVlJuX3UQ", "expirationTime": 1691851065772, "refreshToken": "AMf-vBwiX7eTr7q9VqZtXupZX2XgvuV0tdq32jYfLPRcr2alMCFmnwTnRGH6pp46thIGEr8w5YQppCe4-roMXFAZ9dA3De4_9lrzssG4cy-jCBWPHRlWzVuA6UAuXESFRIRfWSfNIFvND-WJ-25GhgVD6MGgrGmkuJmNpTIbm9hus-6CZ_UI017UeSiYcxQJZW_LPoAFggVTBqGJDZ6i-KsqNNtYJ1ILRg" },
//     "tenantId": undefined,
//     "uid": "Tpw3pX1ovsVOsyqnw7V5vWlPFBy1"
// }
// console.log(asdas.stsTokenManager.accessToken);

export const  authSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {},
      extraReducers: (builder) => {
    builder
      .addCase(authUser.fulfilled, (state, action) => {
        state.displayName = action.payload.displayName;
        state.token = action.payload.token;
        console.log(state.token);
      })
      .addCase(authUser.rejected, (state, action) => {
        state.error = action.error;
      });
    },

});


export const { authentication } = authSlice.actions; 




