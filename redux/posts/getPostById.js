import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";
import { getFirestore, doc , getDoc} from "firebase/firestore";
const db = getFirestore(); 



export const getPostById = createAsyncThunk(
    "post/getPostById",
    async (id, thunkAPI) => {
        try {
      const auth = getAuth();
      const user = auth.currentUser;   
      const postDocRef = doc(db, "users", user.uid, "posts", id);
      const postDocSnapshot = await getDoc(postDocRef);

      if (postDocSnapshot.exists()) {
          const post = { id: postDocSnapshot.id, ...postDocSnapshot.data() };
   
         return post;
      } else {
        throw new Error("Post not found");
      }

        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
            throw error;
        }
    }

);