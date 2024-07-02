import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (_, {rejectWithValue}) => {

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        status: 'idle', // It's a good practice to set the initial status to 'idle'
        error: null,
    },
    reducers: {
        // Reducer to update a post by id
        updatePost: (state, action) => {
            const { id, title, body } = action.payload;
            const existingPost = state.posts.find(post => post.id === id);
            if (existingPost) {
                existingPost.title = title;
                existingPost.body = body;
            }
        },
        // Reducer to remove a post by id
        removePost: (state, action) => {
            const id = action.payload;
            state.posts = state.posts.filter(post => post.id !== id);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.status = "succeeded";
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    }
});

// Export the actions
export const { updatePost, removePost } = postsSlice.actions;

export default postsSlice.reducer;