import React from 'react';

const Home = () => {
  const handleLogin = () => {
    localStorage.setItem('auth', 'true'); // Simulate login
    window.location.reload();
  };

  const handleLogout = () => {
    localStorage.removeItem('auth'); // Simulate logout
    window.location.reload();
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;