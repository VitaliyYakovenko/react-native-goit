import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore"; 
const db = getFirestore();


export const logInUser = createAsyncThunk(
    "authentication/authenticationUser",
    async (userData, thunkAPI) => {
       
    try {
        const data = await signInWithEmailAndPassword(auth, userData.email, userData.password);
        const displayName = data.user.displayName;
        const token = data.user.stsTokenManager.accessToken;
        const email = data.user.email;
        
        const userDocRef = doc(db, "users", data.user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
       
        const avatar = userDocSnapshot.data()?.avatarPath;
        return { displayName, token , email, avatar};
    } catch (error) {
        thunkAPI.rejectWithValue(error.message);
        throw error;  
    }
  }
);

