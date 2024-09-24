import axios from 'axios';

const fetchUserData = async (username, location = '', minRepos = '', page = 1, perPage = 10) => {
  const query = username ? `${username}` : '';
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;
  
  const response = await axios.get(`https://api.github.com/search/users?q=${query}&page=${page}&per_page=${perPage}`);
  
  return response.data; // Return full response to get total_count
};

export default fetchUserData;
