import React from 'react';
import './Profile.css';
import background from '../../images/background.jpg';
import MyPosts from './MyPosts/MyPosts';
import MyInfo from './MyInfo/MyInfo';

const Profile = () => {
  return (
    <div className="profile">
      <MyInfo />
      <div>
        new post
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;
