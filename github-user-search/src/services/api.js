import axios from "axios";

// If you have an API key in .env, you can use it here
const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${GITHUB_API_KEY}`, // Include if API key is required
  },
});

// Example function to get user data by username
export const getUserData = (username) => {
  return api.get(`/users/${username}`);
};
