import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const usersPerPage = 10;

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setPage(1); // Reset page to 1 on new search

    try {
      const userData = await fetchUserData(username, location, minRepos, page, usersPerPage);
      if (userData.items.length > 0) {
        setUsers(userData.items);
        setTotalPages(Math.ceil(userData.total_count / usersPerPage));
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    handleSearch({ preventDefault: () => {} }); // Call search with current inputs
  };

  return (
    <div className="search-component max-w-4xl mx-auto p-4">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
          className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min Repos (optional)"
          className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200">
          Search
        </button>
      </form>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">Looks like we can't find the user</p>}
      
      {users.length > 0 && !error && (
        <div className="user-info grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {users.map((user) => (
            <div key={user.id} className="border p-4 my-2 rounded-md shadow-md transition-transform duration-300 hover:scale-105">
              <img src={user.avatar_url} alt="User Avatar" className="w-16 h-16 rounded-full mx-auto mb-2" />
              <p className="font-semibold text-center">{user.login}</p>
              <p className="text-gray-500 text-center">Location: {user.location || 'Not specified'}</p>
              <p className="text-gray-500 text-center">Repositories: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500 text-center block mt-2">View Profile</a>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-4 py-2 rounded-md ${page === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-200'} transition duration-200`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
