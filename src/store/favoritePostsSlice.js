import { createSlice } from "@reduxjs/toolkit";


const favoriteSlice = createSlice({
    name: "favoritePosts",
    initialState: {
        favoritePosts: []
    },
    reducers: {
        addFavoritePost: (state, action) => {
            state.favoritePosts.push(action.payload);
            console.log('Adding post to favorites:', action.payload);
          },

        removeFavoritePost: (state, action) => {
            state.favoritePosts = state.favoritePosts.filter((post) => post.id !== action.payload);
        }
    }
})

export const { addFavoritePost, removeFavoritePost } = favoriteSlice.actions;

export default favoriteSlice.reducer;