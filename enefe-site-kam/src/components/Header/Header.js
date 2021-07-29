import React from 'react';
import './Header.css';
import logo from '../../images/persik.png';

const Header = () => {
  return (
    <div className="header">
       <img className="header__image" src={logo} alt="Лого" />
    </div>
  );
}

export default Header;
