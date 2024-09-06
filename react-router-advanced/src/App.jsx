import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/post/1">Blog Post</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/post/:postId" element={<BlogPost />} /> {/* Dynamic Route */}
      </Routes>
    </Router>
  );
}

export default App;