import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul>
            <li><Link to="/" className='text-red-600'>Tasks</Link></li>
            <li><Link to="posts">Posts</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar