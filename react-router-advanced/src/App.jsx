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
        <Link to="/blog/1">Blog Post</Link> {/* Example blog post link */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Protected Route for Profile */}
        <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        
        {/* Dynamic Route for Blog Posts */}
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Dynamic route for blog posts */}
      </Routes>
    </Router>
  );
}

export default App;