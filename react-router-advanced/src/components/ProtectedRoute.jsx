import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../auth';

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" />; // Redirect to the home page or login page if not authenticated
  }

  return children; // Render the child component if authenticated
};

export default ProtectedRoute;