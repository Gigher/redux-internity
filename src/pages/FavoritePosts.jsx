import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import "../App.css";
import { removeFavoritePost } from '../store/favoritePostsSlice';

const FavoritePostsPage = () => {
  const favoritePosts = useSelector((state) => state.favoritePosts && state.favoritePosts.favoritePosts) || [];
  const dispatch = useDispatch();

  console.log(favoritePosts);

  return (
    <div className='favorite-wrapper'>
      <h1>Favorite Posts</h1>
      
      <div className='favorite-posts'>
        {favoritePosts.map((favoritePost) => {
          return (
            <div key={favoritePost.id} className="favorite-post">
              <h2>{favoritePost.title}</h2>
              <button onClick={() => dispatch(removeFavoritePost(favoritePost.id))}>
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                  <path d="M10 12V17" stroke="CurrentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14 12V17" stroke="CurrentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4 7H20" stroke="CurrentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="CurrentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="CurrentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoritePostsPage;