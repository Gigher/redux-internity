import React from 'react';
import "../App.css"
import { useDispatch } from 'react-redux';
import { addFavoritePost } from '../store/favoritePostsSlice';

const PostsSection = ({ posts }) => {
  const dispatch = useDispatch();

  return (
    <div className='posts-section'>
      {posts?.map((post) => (
        <div key={post.id} className='posts-section__card'>
          <span className='posts-section__title'>{post.title}</span>
          <button className='posts-section__favorite' title='Add post to favorite' onClick={() => {
            alert('Post was added to favorite');
            dispatch(addFavoritePost(post));
          }}>
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12H18M12 6V18" stroke="CurrentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      ))}
    </div>
  )
}

export default PostsSection;