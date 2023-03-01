import React from 'react';
import { ButtonFunc } from '..';

function Header(props) {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-logo">
          <img src="/src/img/logo.svg" alt="logo" />
        </div>
        <nav className="header-nav">
          <ul className='header-nav__list'>
            <li>HOME</li>
            <li>PROJECT</li>
            <li>SERVICES</li>
            <li>ABOUT</li>
            <li>BLOG</li>
            <li>SHOP</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        <div className="header-button">
          <ButtonFunc class = 'header-button-style'>Sign Up</ButtonFunc>
        </div>
      </div>
    </header>
  );
}

export default Header;
