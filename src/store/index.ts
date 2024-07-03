import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import taskReducer from './taskSlice';
import postsReducer from './postsSlice';

import favoritePostsSlice from './favoritePostsSlice';

const rootReducer = combineReducers({
  tasks: taskReducer,
  posts: postsReducer,
  favoritePosts: favoritePostsSlice,
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;