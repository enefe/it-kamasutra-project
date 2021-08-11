import React from 'react';
import './Profile.css';
import MyPosts from './MyPosts/MyPosts';
import MyInfo from './MyInfo/MyInfo';

const Profile = (props) => {
  return (
    <div className="profile">
      <MyInfo />
      <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} />
    </div>
  );
}

export default Profile;
