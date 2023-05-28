import React from 'react';
import './header.css';
import logo from '../../../assets/name-logo.png';

export default function Header() {
  return (
    <header className="header">
        <div className="name-logo">
          <img src={logo} alt="" />          
        </div>
        <h1 className='site-title'>
          <span>AvR</span>
          <span> Md. Asad Chowdhary</span>
        </h1>
    </header>
  );
};
