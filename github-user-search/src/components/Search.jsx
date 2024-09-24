import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); // Error state to track user search failure

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false); // Reset error state before each search

    try {
      const userData = await fetchUserData(username);
      if (userData) {
        setUser(userData);
      } else {
        setError(true); // Set error if no user found
      }
    } catch (error) {
      setError(true); // Set error if there's an issue with the API
    }

    setLoading(false); // Stop loading animation after the request is complete
  };

  return (
    <div className="search-component">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user</p>} {/* Error message when search fails */}
      {user && !error && ( // Display user info only when no error and user data is available
        <div className="user-info">
          <img src={user.avatar_url} alt="User Avatar" />
          <p>{user.name}</p>
          <p>Username: {user.login}</p> {/* GitHub username */}
          <a href={user.html_url} target="_blank" rel="noreferrer">View Profile</a>
        </div>
      )}
    </div>
  );
};

Looks like we cant find the user

export default Search;
