import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
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
      {error && <p>Looks like we can't find the user</p>}
      {user && (
        <div className="user-info">
          <img src={user.avatar_url} alt="User Avatar" />
          <p>{user.name}</p>
          <p>Username: {user.login}</p> {/* Display GitHub username (login) */}
          <a href={user.html_url} target="_blank" rel="noreferrer">View Profile</a>
        </div>
      )}
    </div>
  );
};

export default Search;
