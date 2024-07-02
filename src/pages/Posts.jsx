import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import "../App.css";
import { fetchPosts } from '../store/postsSlice'
import PostsSection from '../components/PostsSection'
import { Link } from 'react-router-dom';

const Posts = () => {

  const { status, error } = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])
  

  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className='posts'>
      <h1>Posts</h1>

      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>Error was occured: {error}</h2>}

      <PostsSection posts={posts} />

      <Link to="/posts/favorites" className='link-to-favotites'>Go to favorites ❤️</Link>
    </div>
  )
}

export default Posts