import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// Fetch posts using Axios
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  // Use the useQuery hook to fetch data with additional configuration
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery('posts', fetchPosts, {
    staleTime: 5000, // Data will be considered fresh for 5 seconds (5000ms)
    cacheTime: 10000, // Unused data stays in cache for 10 seconds before garbage collection
    refetchOnWindowFocus: false, // Prevent refetching when the window is focused
    keepPreviousData: true, // Keep previous data until new data arrives
  });

  // Handle loading state
  if (isLoading) return <div>Loading...</div>;

  // Handle error state
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      {isFetching && <p>Fetching new data...</p>} {/* Optional fetching state */}
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;