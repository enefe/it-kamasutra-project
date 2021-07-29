import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__items">
        <li className="navbar__item">Профиль</li>
        <li className="navbar__item">Сообщения</li>
        <li className="navbar__item">Новости</li>
        <li className="navbar__item">Настройки</li>
      </ul>
    </div>
    
  );
}

export default Navbar;
