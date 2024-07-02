import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Posts from './pages/Posts';
import Navbar from './components/Navbar';
import FavoritePostsPage from './pages/FavoritePosts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/favorites" element={<FavoritePostsPage />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();