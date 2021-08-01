import React from 'react';
import './Post.css';
import logo from '../../../../images/logo.jpg';

const Post = (props) => {
  return (
    <div className="post">
        <img className="post__image" src={logo} alt="человек" />
        <p className="post__title">{props.post}</p>
        <p className="post__likes">likes: {props.likes}</p>
    </div>
  );
}

export default Post;