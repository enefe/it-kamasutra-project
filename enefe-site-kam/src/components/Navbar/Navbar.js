import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__items">
        <NavLink className="navbar__item" to="/profile"><li>Профиль</li></NavLink>
        <NavLink className="navbar__item" to="/dialogs"><li>Сообщения</li></NavLink>
        <NavLink className="navbar__item" to="/news"><li>Новости</li></NavLink>
        <NavLink className="navbar__item" to="/music"><li>Музыка</li></NavLink>
        <NavLink className="navbar__item" to="/settings"><li>Настройки</li></NavLink>
      </ul>
    </div>
    
  );
}

export default Navbar;
