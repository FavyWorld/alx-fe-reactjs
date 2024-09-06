import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// Fetch posts using Axios
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  // Use the useQuery hook to fetch data
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts);

  // Handle loading state
  if (isLoading) return <div>Loading...</div>;

  // Handle error state
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
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