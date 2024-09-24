import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); // State to track errors

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false); // Reset error state before starting the search

    try {
      const userData = await fetchUserData(username);
      if (userData) {
        setUser(userData);
      } else {
        setError(true); // Set error if no user found
      }
    } catch (error) {
      setError(true); // Catch any errors and set error state
    }

    setLoading(false); // Stop loading once request completes
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
      {error && <p>Looks like we can't find the user</p>} {/* Error message */}
      {user && !error && ( // Only display user data if no error
        <div className="user-info">
          <img src={user.avatar_url} alt="User Avatar" />
          <p>{user.name}</p>
          <p>Username: {user.login}</p> {/* Display GitHub username */}
          <a href={user.html_url} target="_blank" rel="noreferrer">View Profile</a>
        </div>
      )}
    </div>
  );
};

export default Search;
