import React from 'react';
import './Post.css';
import logo from '../../../../images/logo.jpg';

const Post = () => {
  return (
    <div className="post">
        <img className="post__image" src={logo} alt="человек" />
        <p className="post__title">Мой пост</p>
    </div>
  );
}

export default Post;