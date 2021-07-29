import React from 'react';
import './Profile.css';
import background from '../../images/background.jpg';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className="profile">
        <img className="profile__image" src={background} alt="Бэкграунд" />
        <div>
          ava + about
        </div>
        <div>
          new post
        </div>
        <MyPosts />
    </div>
  );
}

export default Profile;
