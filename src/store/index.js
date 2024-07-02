import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import postsReducer from './postsSlice';
import favoritePostsSlice from './favoritePostsSlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    posts: postsReducer,
    favoritePosts: favoritePostsSlice,
  }
});

export default store;