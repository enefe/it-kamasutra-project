import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
