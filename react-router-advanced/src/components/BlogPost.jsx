import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();

  return (
    <div>
      <h1>Blog Post {postId}</h1>
      <p>This is a dynamic blog post with ID: {postId}.</p>
    </div>
  );
};

export default BlogPost;