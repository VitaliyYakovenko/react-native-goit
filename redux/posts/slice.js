import { createSlice } from "@reduxjs/toolkit";
import { createPost } from "./createPost";
import { fetchPosts } from "./fetchPosts";
import { getPostById } from "./getPostById";
import { createComment } from "./createComment";
import { getAllCommentsById } from "./getAllCommentsById";
import { deletePost } from "./deletePost";

const initialState = {
    posts: [],
    error: null,
    post: {},
    comments: [],
};

const postsSlice = createSlice({
    name: "posts/postsUser",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(createPost.rejected, (state, _) => {
            state.error = true;   
        })
        .addCase(createPost.fulfilled, (state, _) => {
            state.error = null;
        })    
        .addCase(fetchPosts.rejected, (state, _) => {
            state.error = true;    
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        })
        .addCase(getPostById.fulfilled, (state, action) => {
            state.error = null;
            state.post = action.payload;
        })    
        .addCase(getPostById.rejected, (state, _) => {
            state.error = true;    
        })
        .addCase(createComment.fulfilled, (state, action) => {
            state.error = null; 
        })
        .addCase(getAllCommentsById.fulfilled, (state, action) => {
            state.comments = action.payload;   
        })
        .addCase(deletePost.fulfilled, (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload.id);
            state.posts.splice(index, 1);
        })
    },
 
});


export const postsReducer = postsSlice.reducer;

