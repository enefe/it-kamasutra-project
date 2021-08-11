import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/reducers/profileReducer';
import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  const newPostElement = React.createRef();

  const addPostClick = () => {
    props.dispatch(addPostCreator());
  }

  const onPostChange = () => {
    const newPost = newPostElement.current.value;
    props.dispatch(updateNewPostTextCreator(newPost));
  }

  return (
    <div className="my-posts">
      <div className="my-posts__new-post">
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
        <button onClick={addPostClick} >Добавить</button>
      </div>
      { props.posts.map( p => <Post post={p.post} likes={p.likes} /> ) }
    </div>
  );
}

export default MyPosts;