import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import './App.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <div className="app__content">
          <Route path="/profile" render={ () => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} /> } />
          <Route path="/dialogs" render={ () => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
