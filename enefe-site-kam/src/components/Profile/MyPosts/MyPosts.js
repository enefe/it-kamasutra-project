import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = () => {

  let posts = [
    {post: 'Привет всем!', id: 1, likes: 14},
    {post: 'Че каво?!', id: 2, likes: 2},
  ]

  return (
    <div className="my-posts">
      { posts.map( p => <Post post={p.post} likes={p.likes} /> ) }
    </div>
  );
}

export default MyPosts;