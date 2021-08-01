import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <div className="app__content">
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
